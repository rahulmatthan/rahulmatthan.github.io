<?xml version="1.0" encoding="UTF-8"?>
<!--
  Bharat Niti Lipi 1.0: profile rules for a single document.

  Run:  xmllint -noout -schematron bnl/rules.sch file.xml

  Akoma Ntoso says what a legal document may contain; these rules say what an
  Indian one must. Messages start "BNL-n" so they can be cited. Rules that need
  more than one document (a rule whose parent provision is repealed, a State
  amendment without the President's assent) live in the cross-document checks,
  which also list every link marked inferred or contested for review.
-->
<schema xmlns="http://www.ascc.net/xml/schematron">
  <ns prefix="a" uri="http://docs.oasis-open.org/legaldocml/ns/akn/3.0"/>
  <ns prefix="bnl" uri="urn:bnl:1.0"/>

  <pattern name="Time">
    <rule context="a:section | a:rule">
      <assert test="ancestor-or-self::*[@period] or .//*[@period]">BNL-1 Every section and rule has a commencement date (a period on it, above it, or on each of its parts).</assert>
    </rule>
  </pattern>

  <pattern name="Delegated legislation">
    <rule context="a:act">
      <assert test="not(a:meta/a:identification/a:FRBRWork/a:FRBRsubtype) or .//a:legalSystemMod[@type='legislativeDelegation'][@bnl:basis='stated']">BNL-2 Subordinate legislation states the power it is made under (a legislativeDelegation with basis "stated").</assert>
    </rule>
    <rule context="a:legalSystemMod">
      <assert test="not(@type='legislativeDelegation') or @bnl:basis">BNL-3 Every delegation link says how it is known (bnl:basis).</assert>
    </rule>
  </pattern>

  <pattern name="Courts">
    <rule context="a:forceMod | a:efficacyMod | a:meaningMod">
      <assert test="not(@type='unconstitutionality' or @type='inapplication' or self::a:meaningMod) or //a:references/a:jurisprudence/@eId = substring-after(a:source/@href, '#')">BNL-5 A court's effect on a provision cites the judgment or order.</assert>
      <assert test="not(@type='unconstitutionality' or @type='inapplication' or self::a:meaningMod) or not(starts-with(a:destination/@href, '#')) or //@eId = substring-after(a:destination/@href, '#')">BNL-6 A provision struck down, stayed or read down stays in the text; only its status changes.</assert>
      <assert test="not(@type='inapplication') or a:efficacy/@period">BNL-7 A stay records when it began (and ends when vacated or decided).</assert>
    </rule>
  </pattern>

  <pattern name="References">
    <rule context="a:ref">
      <assert test="not(starts-with(@href, '#')) or //@eId = substring-after(@href, '#')">BNL-8 Every reference inside a document lands on a provision that exists.</assert>
    </rule>
  </pattern>

  <pattern name="Territory">
    <rule context="*">
      <assert test="not(@bnl:extent) or @bnl:extent='IN' or not(ancestor::a:analysis) or //a:references/*[starts-with(@href, '/akn/in-') or self::a:jurisprudence]/@eId = substring-after(a:source/@href, '#')">BNL-4 A change limited to part of India comes from a State instrument or a court.</assert>
    </rule>
  </pattern>
</schema>
