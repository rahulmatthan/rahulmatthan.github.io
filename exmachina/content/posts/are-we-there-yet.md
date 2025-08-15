---
title: "Are We There Yet?"
date: "2025-06-11"
tags: ["digital public infrastructure", "maps"]
widgets: 
- "categories"
---

{{< figure src="/images/are-we-there-yet.jpg" width="auto" >}}

_As anyone who lives in India knows, it is really hard to get aroundon your own. Our addressing system is broken and while GPS gets you to vicinity of where you need to be no trip is complete without making a phone call to navigate the last mile. We need a better system. And we might just have got one._

<!--more-->
_This is a link-enhanced version of an article that first appeared in the Mint. You can read the original [here](https://archive.rahulmatthan.com/archive/1749638689.087932/www.livemint.com/opinion/online-views/digipin-india-post-navic-github-mit-media-lab-what3words-google-pay-phonepe-dpi-api-integration-gps-google-maps-location-11749474349893.html). If you would like to receive these articles in your inbox every week please consider subscribing by clicking on this [link](https://paragraph.xyz/@exmachina)._

---

Whenever I order something online, I’ve learnt to provide as much location information as I can at checkout. As with most parts of India, the houses on my street are numbered somewhat at random (mine is 22/1 and my immediate neighbour’s is 13), and there is no way anyone relying solely on GPS can find me without help. So they call, I explain, they get lost anyway, and we repeat this dance till somehow, with persistence and a lot of patience, the package finally reaches me.

This is a story that repeats itself millions of times a day across the length and breadth of the country. Our addressing system is so broken that delivery agents have taken to calling even before they set out. Despite India being a top-five economy, we still navigate like medieval merchants, using directions like “turn left at the paan shop.”

This is somewhat ironic considering that India has one of the world’s most extensive postal networks. With 155,000 offices and 89% rural coverage, [India Post](https://www.indiapost.gov.in/VAS/Pages/AboutUs/PostOfficeNetwork.aspx) can reach virtually every person in the country. But the challenge isn’t reaching them, it is reaching them on time. In a world where next-day delivery is the norm and 10 minutes is fast becoming an expectation, our postal service is just not up to the task.

So we’ve turned to logistics companies and their armies of delivery agents who zip around following turn-by-turn directions on mobile phones strapped to their handlebars to get parcels to us. And even if the miracles of modern technology get them close to us, the last mile often defeats them.

### Digipin

Last week, the Department of Posts launched [Digipin](https://dac.indiapost.gov.in/mypincode/menu), a brand new digital addressing system that might be an answer to this problem. By dividing all of India into millions of tiny squares (all about the size of a parking space), each with a unique 10-character name, all you would need to do is find the Digipin square that corresponds to the exact location of your doorstep and share the ten characters that define it with whoever needs to reach you.

Unlike proprietary pinpoint systems like [What3Words](https://what3words.com/toddler.geologist.animated), Digipin is India’s latest block of digital public infrastructure (DPI). Free, open and designed for national scale, it offers a foundation for addressing-as-a-service. Since its specifications are open source and easily accessible on [Github](https://github.com/CEPT-VZG/digipin), all it takes is a few API calls for applications to integrate with it. Which means that we no longer need to go through endless cycles of “turn left at the temple, then right after the blue house,” for deliveries to reach us.

The real challenge will be adoption. Digipin names are unintelligible alphanumeric phrases like ‘G4J-9K4-7LPY’ that are hard to remember. If this is what we have to memorise to use it, we will get even more lost than we do today. What’s needed is a way to translate these alphanumeric phrases into something we can recall.

### Name Servers

This is a problem that’s already been solved. Internet websites are identified by 12-digit URLs that no one remembers. However, since all URLs are mapped to domain names that are easy to recall, we simply type those names into a browser for domain name servers (DNS) to translate into URLs that a computer can understand.

Just as DNS unlocked the web for billions by translating forgettable URLs into names we could remember, a similar alias layer could unlock Digipin’s mass adoption. Once we have this, I will be able to register a phrase like ‘rahul.matthan.home’ and map it to the precise Digipin coordinates of my front doorstep. Then all I need to do is share it with the delivery agent, who will then be able to navigate directly to my front door.

Digipin is designed to work with all Global Navigation Satellite Systems, but I am particularly pleased to see that it will work with India’s own NavIC satellite constellation. In a 2017 [Ex Machina article](https://exmachina.in/16/02/2017/gps-is-a-time-machine/), I had pointed out that GPS is “probably modern civilisation’s single point of failure,” given that it is a US Department of Defence system that underpins everything we rely on, from mobile networks to power grids. At this fractious time in global geopolitics, we should ensure that our digital location service relies on our own network of geo-positioning satellites.

According to [MIT Media Lab](https://www.media.mit.edu/publications/what-is-the-right-addressing-scheme-for-india/), 80% of Indian addresses are described in relation to landmarks that lie anywhere between 50 and 1,500 metres away from their actual location. For an economy that wants to grow to [$5 trillion by 2027](https://economictimes.indiatimes.com/news/economy/policy/india-on-track-to-become-usd-5-trillion-economy-by-2027-28-chief-economic-advisor/articleshow/121488715.cms?from=mdr), precision addressing isn’t a luxury—it’s a necessity.

### DPI Thinking

As with every other DPI, the role of the government should be catalytic, not operational. Digipin’s breakthrough moment will come when someone builds the addressing equivalent of Google Pay or PhonePe—with an interface so intuitive that using landmark-based directions feels as antiquated as paying with cash. Early adopters will, no doubt, be delivery-heavy businesses, but I’m far more keen to see the second-order effects: How precise addressing will reshape social coordination in ways that we have yet to imagine.

Some 30 years ago, we couldn’t imagine needing the internet; 20 years ago, mobile phones seemed like a luxury; 10 years ago, digital payments felt optional. Today, precise addressing feels like a nice-to-have, but tomorrow, we probably won’t remember how we managed without it.

For too long, we’ve been finding workarounds to getting around. Digipin is our chance to finally address our addressing challenge. 