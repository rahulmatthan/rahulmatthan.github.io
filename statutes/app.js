// Reader interactions. The text stays still; everything about a provision opens in the
// panel on the right. Two views (the Act read through, or one section at a time), the law
// on a date, the law in a State, and annotation layers switched on one at a time.
(function () {
  const LAW = window.LAW || {};
  const root = document.documentElement;
  const esc = (s) => (s || "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const fmt = (d) => new Date(d + "T00:00:00").toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : v; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
  };

  // ---------- theme and text size (every page) ----------
  const themeBtn = document.getElementById("theme");
  const sizeBtn = document.getElementById("size");
  const SIZES = { s: "S", m: "M", l: "L", xl: "XL" };
  function showPrefs() {
    if (themeBtn) themeBtn.textContent = root.dataset.theme === "dark" ? "Light" : "Dark";
    const lab = document.getElementById("size-label");
    if (lab) lab.textContent = SIZES[root.dataset.size] || "M";
  }
  themeBtn && themeBtn.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    store.set("bnl-theme", root.dataset.theme);
    showPrefs();
  });
  sizeBtn && sizeBtn.addEventListener("click", () => {
    const order = Object.keys(SIZES);
    root.dataset.size = order[(order.indexOf(root.dataset.size) + 1) % order.length];
    store.set("bnl-size", root.dataset.size);
    showPrefs();
  });
  showPrefs();

  const reader = document.querySelector(".reader");
  if (!reader) return;
  const params = new URLSearchParams(location.search);
  const panel = document.getElementById("panel");
  const body = document.getElementById("panel-body");
  const aboutTpl = document.getElementById("about-tpl");
  const short = reader.dataset.short;
  const available = [...document.querySelectorAll(".bar .ly")].map((b) => b.dataset.layer);
  const isUnit = (el) => el.matches(".el.section, .el.rule, .el.schedule");
  const units = [...document.querySelectorAll(".text .el.section, .text .el.rule, .text .el.schedule")]
    .filter((u) => !u.parentElement.closest(".el.section, .el.rule, .el.schedule"));
  const unitOf = (el) => units.find((u) => u === el || u.contains(el));
  let view = "read", layers = new Set(), date = LAW.today, summary = "";

  function setParam(k, v) {
    const url = new URL(location);
    v ? url.searchParams.set(k, v) : url.searchParams.delete(k);
    history.replaceState(null, "", url);
  }

  // ---------- the law on a date ----------
  // A provision's own dates come from its life in the statute book (data-from,
  // data-until); a court's effects (data-struck, data-stayed) from the rulings that
  // point at it. Children inherit from their parents.
  function within(el, attr) {
    for (let e = el; e && e.dataset; e = e.parentElement) if (e.dataset[attr]) return e.dataset[attr];
    return null;
  }
  function applyDate(d) {
    date = d;
    let live = 0, later = 0, gone = 0;
    document.querySelectorAll(".text .el").forEach((el) => {
      const from = within(el, "from"), until = within(el, "until");
      el.classList.toggle("notyet", !!from && from > d);
      el.classList.toggle("gone", !!until && until <= d);
      const struck = el.dataset.struck, stayed = el.dataset.stayed;
      el.classList.toggle("struck", !!struck && struck.split("|")[0] <= d);
      if (stayed) {
        const [a, b] = stayed.split("|");
        el.classList.toggle("stayed", a <= d && (!b || d < b));
      }
    });
    // A status shows only where a provision is not simply in force.
    document.querySelectorAll(".text .status").forEach((b) => b.remove());
    units.forEach((el) => {
      const head = el.querySelector(":scope > .prov-head, :scope > .chap");
      let text = "", cls = "";
      const parts = [...el.querySelectorAll(".el[data-from]")];
      const notyet = parts.filter((p) => p.classList.contains("notyet")).length;
      if (el.classList.contains("gone")) { text = "omitted from " + fmt(within(el, "until")); cls = "gone"; gone++; }
      else if (el.classList.contains("struck")) { text = "struck down"; cls = "struck"; gone++; }
      else if (el.classList.contains("notyet")) { text = "in force from " + fmt(within(el, "from")); cls = "later"; later++; }
      else if (notyet) { text = `partly in force: ${notyet} of ${parts.length} parts not yet`; cls = "later"; later++; }
      else live++;
      if (el.querySelector(".el.stayed") || el.classList.contains("stayed")) { text += (text ? "; " : "") + "stayed in part"; cls = cls || "stayed"; }
      el.dataset.status = text;
      if (text && head) {
        const b = document.createElement("span");
        b.className = "status " + cls;
        b.textContent = text;
        (head.querySelector(".ht") || head.querySelector(".h") || head.querySelector(".pnum")).after(b);
      }
    });
    document.querySelectorAll(".toc li[data-toc]").forEach((li) => {
      const el = document.getElementById(li.dataset.toc);
      li.classList.toggle("gone", !!el && el.classList.contains("gone"));
      li.classList.toggle("later", !!el && el.classList.contains("notyet"));
    });
    summary = `On ${fmt(d)}: ${live} in force` + (later ? `, ${later} not yet or only in part` : "") + (gone ? `, ${gone} omitted or struck down` : "") + ".";
    const s = document.getElementById("asof-summary");
    if (s) s.textContent = summary;
    document.getElementById("asof-date").value = d;
    let hit = null;
    document.querySelectorAll(".bar .dates button").forEach((b) => {
      b.setAttribute("aria-pressed", b.dataset.date === d);
      if (b.dataset.date <= d) hit = b;
    });
    const w = document.getElementById("asof-what");
    if (w) w.textContent = hit && hit.dataset.date !== LAW.today ? `The law as it stood after ${fmt(hit.dataset.date)}: ${hit.dataset.what}.` +
      (hit.dataset.date > LAW.today ? " Not yet in force." : "") : "";
    setParam("on", d === LAW.today ? "" : d);
    if (view === "section") showUnit(current());
    else if (body.dataset.for) openDossier(document.getElementById(body.dataset.for), true);
  }

  // ---------- the law in a State ----------
  function applyState(code) {
    document.querySelectorAll(".text .el").forEach((el) => {
      el.classList.remove("state-hit");
      el.querySelectorAll(":scope > .statetext").forEach((x) => x.remove());
      el.querySelectorAll(":scope > .content p, :scope > .intro p").forEach((p) => {
        if (p.dataset.central) { p.innerHTML = p.dataset.central; delete p.dataset.central; }
      });
    });
    setParam("state", code);
    if (!code) return;
    document.querySelectorAll(".text .el[data-states]").forEach((el) => {
      if (!el.dataset.states.split(" ").includes(code)) return;
      el.classList.add("state-hit");
      el.querySelectorAll(`:scope > .dossier .statecard[data-state="${code}"]`).forEach((card) => {
        const { type, old, new: nw } = card.dataset;
        const name = card.querySelector(".sc-state").textContent;
        const paras = el.querySelectorAll(":scope > .content p, :scope > .intro p");
        const at = el.querySelector(":scope > .content, :scope > .intro");
        if (old && nw) {
          // a change of words: apply it in place
          paras.forEach((p) => {
            if (p.textContent.includes(old) && !p.dataset.central) {
              p.dataset.central = p.innerHTML;
              p.innerHTML = p.innerHTML.replace(esc(old), `<del>${esc(old)}</del> <ins class="st">${esc(nw)}</ins>`);
            }
          });
        } else if (nw) {
          if (type === "substitution") paras.forEach((p) => { p.dataset.central = p.innerHTML; p.innerHTML = `<del>${p.innerHTML}</del>`; });
          const st = document.createElement("div");
          st.className = "statetext";
          st.innerHTML = `<span class="lbl">${esc(name)}${type === "substitution" ? "" : " adds"}</span> ${esc(nw)}`;
          at ? at.after(st) : el.append(st);
        }
      });
    });
  }

  // ---------- annotation layers ----------
  function loadLayers() {
    const saved = store.get("bnl-layers-" + view, null);
    const want = saved === null ? (view === "section" ? available : []) : saved.split(",").filter(Boolean);
    setLayers(new Set(want.filter((l) => available.includes(l))));
  }
  function setLayers(set) {
    layers = set;
    available.forEach((l) => reader.classList.toggle("show-" + l, layers.has(l)));
    document.querySelectorAll(".bar .ly").forEach((b) => b.setAttribute("aria-pressed", layers.has(b.dataset.layer)));
    const sel = document.getElementById("state");
    if (sel) {
      sel.hidden = !layers.has("states");
      if (!layers.has("states") && sel.value) { sel.value = ""; applyState(""); }
    }
    store.set("bnl-layers-" + view, [...layers].join(","));
  }

  // ---------- the panel ----------
  function showPanel() { panel.classList.add("open"); }
  function about() {
    body.innerHTML = aboutTpl.innerHTML;
    delete body.dataset.for;
    const s = document.getElementById("asof-summary");
    if (s) s.textContent = summary;
  }
  function crumbs(el) {
    const out = [];
    for (let e = el; e && e.classList && e.classList.contains("el"); e = e.parentElement.closest(".el")) out.unshift(e);
    return out;
  }
  function openDossier(el, quiet) {
    if (!el) return;
    const d = el.querySelector(":scope > .dossier");
    const head = el.querySelector(":scope > .prov-head .ht, :scope > .chap .h");
    const unit = unitOf(el);
    let html = `<div class="d-kicker">${esc(short)}</div><div class="d-cite">${esc(el.dataset.cite || "")}</div>`;
    const title = head ? head.textContent : unit && unit !== el ? (unit.querySelector(":scope > .prov-head .ht") || {}).textContent : "";
    if (title) html += `<div class="d-title">${esc(title)}</div>`;
    if (unit && unit.dataset.status) html += `<p class="d-status">${esc(unit.dataset.status[0].toUpperCase() + unit.dataset.status.slice(1))} on ${fmt(date)}.</p>`;
    if (d) html += d.innerHTML;
    // the parts below it that have something recorded against them
    const inner = [...el.querySelectorAll(".el > .dossier")].map((x) => x.parentElement).filter((x) => x !== el);
    if (inner.length) {
      html += `<section class="d-sec"><h4>Within this ${isUnit(el) ? "provision" : "part"}</h4><ul class="plain">` +
        inner.map((x) => `<li><button class="link" data-open="${x.id}">${esc(x.dataset.cite)}</button> ` +
          [...x.querySelectorAll(":scope > .marks .mk, :scope > .prov-head .marks .mk")].map((m) => `<span class="mk mk-${m.dataset.layer} still">${esc(m.textContent)}</span>`).join(" ") + "</li>").join("") +
        "</ul></section>";
    }
    if (isUnit(el)) {
      const defs = [...new Map([...el.querySelectorAll(".term[data-def]")].map((t) => [t.dataset.def, t.textContent])).entries()];
      if (defs.length) {
        html += `<section class="d-sec" data-layer="terms"><h4>Defined terms used here</h4>` + defs.map(([k, word]) => {
          const p = (LAW.previews || {})[k] || {};
          return `<details><summary>${esc(word)}</summary><p>${esc(p.text)}</p><a href="${k.split(":")[0]}.html${location.search}#${k.split(":")[1]}">${esc(p.cite)}</a></details>`;
        }).join("") + "</section>";
      }
    }
    if (!d && !inner.length) html += `<p class="small muted">Nothing is recorded against this provision: no amendment, ruling, rule or citation.</p>`;
    html += `<div class="d-actions"><button data-act="copy" data-id="${el.id}">Copy link</button><button data-act="xml" data-id="${el.id}">Show as data (XML)</button></div>`;
    body.innerHTML = html;
    body.dataset.for = el.id;
    body.querySelectorAll(".fx[data-from]").forEach((fx) => fx.classList.toggle("future", fx.dataset.from > date));
    document.querySelectorAll(".text .picked").forEach((x) => x.classList.remove("picked"));
    el.classList.add("picked");
    if (!quiet) { showPanel(); panel.scrollTop = 0; }
  }
  function preview(key, kicker) {
    const p = (LAW.previews || {})[key];
    if (!p) return;
    const [slug, id] = key.split(":");
    body.innerHTML = `<div class="d-kicker">${esc(kicker)}</div><div class="d-cite">${esc(p.cite)}</div>` +
      (p.head ? `<div class="d-title">${esc(p.head)}</div>` : "") + `<div class="d-text">${esc(p.text)}</div>` +
      `<p><a class="go" href="${slug}.html${location.search}#${id}">Go to ${esc(p.cite)} →</a></p>`;
    delete body.dataset.for;
    showPanel();
  }
  function note(kind, text) {
    body.innerHTML = `<div class="d-kicker">${esc(kind)}</div><div class="d-text">${esc(text)}</div>`;
    delete body.dataset.for;
    showPanel();
  }

  // ---------- one section at a time ----------
  const shown = () => units.filter((u) => !u.classList.contains("gone") || layers.has("history"));
  function current() {
    const id = body.dataset.unit || location.hash.slice(1);
    const t = id && document.getElementById(id);
    const u = t && unitOf(t);
    return u && shown().includes(u) ? u : shown()[0];
  }
  function showUnit(u, target) {
    if (!u) return;
    body.dataset.unit = u.id;
    units.forEach((x) => x.classList.toggle("off", x !== u));
    document.querySelectorAll(".text .el.chapter, .text .el.part").forEach((c) => {
      if (!c.parentElement.closest(".el.section, .el.rule, .el.schedule")) c.classList.toggle("off", !c.contains(u));
    });
    const list = shown(), k = list.indexOf(u);
    const prev = list[k - 1], next = list[k + 1];
    const label = (x) => x ? `${x.dataset.cite}${x.querySelector(":scope > .prov-head .ht") ? " " + x.querySelector(":scope > .prov-head .ht").textContent : ""}` : "";
    const pb = document.getElementById("prev"), nb = document.getElementById("next");
    pb.textContent = prev ? "← " + label(prev) : ""; pb.disabled = !prev; pb.onclick = () => prev && go(prev);
    nb.textContent = next ? label(next) + " →" : ""; nb.disabled = !next; nb.onclick = () => next && go(next);
    document.getElementById("pos").textContent = `${k + 1} of ${list.length}`;
    markToc(u.id);
    openDossier(target && target !== u ? target : u, true);
    showPanel();
  }
  function go(u) {
    history.replaceState(null, "", location.search + "#" + u.id);
    showUnit(u);
    window.scrollTo({ top: 0 });
  }
  function setView(v) {
    view = v;
    reader.dataset.view = v;
    document.querySelectorAll(".seg button").forEach((b) => b.setAttribute("aria-pressed", b.dataset.view === v));
    document.getElementById("pager").hidden = v !== "section";
    setParam("view", v === "section" ? "section" : "");
    loadLayers();
    if (v === "section") { showUnit(current()); window.scrollTo({ top: 0 }); }
    else {
      const u = body.dataset.unit && document.getElementById(body.dataset.unit);
      document.querySelectorAll(".text .off").forEach((x) => x.classList.remove("off"));
      if (u) u.scrollIntoView({ block: "start" });
    }
  }
  function markToc(id) {
    document.querySelectorAll(".toc li.on").forEach((li) => li.classList.remove("on"));
    const li = document.querySelector(`.toc li[data-toc="${CSS.escape(id)}"]`);
    if (li) { li.classList.add("on"); li.scrollIntoView({ block: "nearest" }); }
  }
  const spy = new IntersectionObserver((es) => {
    if (view !== "read") return;
    es.forEach((e) => e.isIntersecting && markToc(e.target.id));
  }, { rootMargin: "-140px 0px -70% 0px" });
  units.forEach((u) => spy.observe(u));

  // ---------- data ----------
  let xmlDoc = null;
  async function showXml(id) {
    const el = document.getElementById(id);
    if (!xmlDoc) xmlDoc = new DOMParser().parseFromString(await (await fetch((LAW.files || {})[reader.dataset.doc])).text(), "application/xml");
    const node = xmlDoc.querySelector(`[eId="${CSS.escape(id)}"]`);
    const mods = [...xmlDoc.querySelectorAll("analysis *")].filter((m) =>
      [...m.querySelectorAll(":scope > destination")].some((d) => d.getAttribute("href") === "#" + id));
    const pretty = (n) => esc(new XMLSerializer().serializeToString(n).replace(/ xmlns(:\w+)?="[^"]*"/g, ""))
      .replace(/(&lt;\/?)([\w:]+)/g, '$1<span class="t">$2</span>')
      .replace(/(\s)([\w:]+)=(&quot;[^&]*&quot;)/g, '$1<span class="a">$2</span>=$3');
    document.getElementById("xml-title").textContent = `${short} ${el.dataset.cite} · eId="${id}"`;
    document.getElementById("xml-body").innerHTML = (node ? pretty(node) : "(not found)") +
      (mods.length ? "\n\n<span class='cm'>&lt;!-- what has happened to it, from &lt;analysis&gt; --&gt;</span>\n" + mods.map(pretty).join("\n") : "");
    document.getElementById("xml").hidden = false;
  }
  document.getElementById("xml-close").addEventListener("click", () => (document.getElementById("xml").hidden = true));

  // ---------- clicks ----------
  document.addEventListener("click", (e) => {
    const t = e.target;
    let x;
    if ((x = t.closest(".bar .ly"))) {
      const s = new Set(layers);
      s.has(x.dataset.layer) ? s.delete(x.dataset.layer) : s.add(x.dataset.layer);
      setLayers(s);
      if (view === "section") showUnit(current());
    } else if ((x = t.closest(".seg button"))) setView(x.dataset.view);
    else if ((x = t.closest(".presets button"))) applyDate(x.dataset.date);
    else if ((x = t.closest("#panel-about"))) { about(); showPanel(); }
    else if ((x = t.closest("#panel-close"))) panel.classList.remove("open");
    else if ((x = t.closest("[data-act=copy]"))) {
      const url = location.origin + location.pathname + "#" + x.dataset.id;
      navigator.clipboard && navigator.clipboard.writeText(url);
      x.textContent = "Copied";
      setTimeout(() => (x.textContent = "Copy link"), 1200);
    } else if ((x = t.closest("[data-act=xml]"))) showXml(x.dataset.id);
    else if ((x = t.closest("[data-open]"))) openDossier(document.getElementById(x.dataset.open));
    else if ((x = t.closest(".text .pnum, .text .mk"))) {
      openDossier(x.closest(".el"));
      if (x.classList.contains("mk")) {
        const sec = body.querySelector(`.d-sec[data-layer="${x.dataset.layer}"]`);
        if (sec) sec.scrollIntoView({ block: "start" });
      }
    } else if ((x = t.closest(".text .term")) && layers.has("terms")) {
      const here = reader.dataset.doc;
      preview(x.dataset.def, x.dataset.def.split(":")[0] !== here ? "Defined in the parent Act, which these rules adopt" : "Definition");
    } else if ((x = t.closest(".text a.ref"))) {
      e.preventDefault();
      if (layers.has("refs")) preview(x.dataset.ref, "Cross-reference");
    } else if ((x = t.closest(".text .fn, .text ins.corr"))) note(x.dataset.kind, x.dataset.note);
    else if ((x = t.closest(".toc a")) && view === "section") {
      e.preventDefault();
      const u = document.getElementById(x.getAttribute("href").slice(1));
      if (u) go(unitOf(u) || u);
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { document.getElementById("xml").hidden = true; panel.classList.remove("open"); }
    if (view !== "section" || e.target.matches("input, select, textarea")) return;
    if (e.key === "ArrowRight" || e.key === "j") document.getElementById("next").click();
    if (e.key === "ArrowLeft" || e.key === "k") document.getElementById("prev").click();
  });
  window.addEventListener("hashchange", () => {
    const t = document.getElementById(location.hash.slice(1));
    if (!t) return;
    if (view === "section") showUnit(unitOf(t) || t, t);
    else t.classList.contains("el") && openDossier(t, true);
  });

  // ---------- start ----------
  document.getElementById("asof-date").addEventListener("change", (e) => e.target.value && applyDate(e.target.value));
  const sel = document.getElementById("state");
  if (sel) sel.addEventListener("change", () => applyState(sel.value));
  view = params.get("view") === "section" ? "section" : "read";
  applyDate(params.get("on") || LAW.today);
  setView(view);
  if (sel && params.get("state") && layers.has("states")) { sel.value = params.get("state"); applyState(sel.value); }
  if (location.hash && view === "read") {
    const t = document.getElementById(location.hash.slice(1));
    if (t) setTimeout(() => { t.scrollIntoView({ block: "start" }); t.classList.contains("el") && openDossier(t, true); }, 60);
  }
})();
