---
title: "The DPDP Rules: First Impressions"
date: "2025-01-06"
tags: ["Privacy"]
widgets: 
- "categories"
---

{{< figure src="/images/the-dpdp-rules-first-impressions.jpg" width="auto" >}}

_The much awaited Digital Personal Data Protection Rules are finally with us and, with that the final piece of the puzzle is in place. While there is a lot to unpack, overall, the Rules follow the Act in terms of simplicity - adding just enough to make it complete without complicating things unduly. That said, there are a few issues that still need to be sorted out._

<!--more-->
_This is a link-enhanced version of an article that first appeared in the Mint. You can read the original [here](https://www.livemint.com/opinion/columns/indias-digital-data-protection-rules-a-story-of-hits-and-misses-privacy-law-home-ministry-it-ministry-innovation-11735972217485.html). If you would like to receive these articles in your inbox every week please consider subscribing by clicking on this [link](https://paragraph.xyz/@exmachina)._

---

The draft [Digital Personal Data Protection (DPDP) Rules](https://static.mygov.in/innovateindia/2025/01/03/mygov-999999999568142946.pdf) are finally with us and the long wait has for the most part been worth it. There is enough detail in the rules to give businesses the clarity they need, but not so much that compliance becomes cumbersome. That said, there are two areas—data breaches and the obligations of significant data fiduciaries—where I believe the government has exceeded its brief. It has in the process greatly increased the burden on data fiduciaries.

### Data Breaches

Rule 6 provides a definition of the term “reasonable security measures” mentioned in Section 8 of the [DPDP Act](https://www.meity.gov.in/writereaddata/files/Digital%20Personal%20Data%20Protection%20Act%202023.pdf). As a result, data fiduciaries now have to put in place at least seven distinct types of measures to safeguard against data breaches. While I have no argument with as many measures as are necessary to protect data, why all data fiduciaries must implement these seven measures is beyond me. Section 8 only required data fiduciaries to take reasonable security safeguards. The government should have left well alone and allowed individual data fiduciaries to determine what is reasonable in their own context. By insisting that everyone has to put in place all these measures, it is disproportionately increasing the burden on small data fiduciaries.

Also of concern is the manner in which the rules have extended the data breach notification obligations. While the Act requires data fiduciaries to provide notice “in the event of” a personal breach, the rules state that intimation must be made “as soon as the Data Fiduciary becomes aware of it.” As anyone who’s been involved in a breach incident will tell you, knowledge accumulates incrementally during such situations, and while it is easy to identify that something is going wrong, it is usually hard to tell whether this is because a hacker has broken into the system or on account of some other malfunction. Even after it is clear that it’s a breach, it is hard to say with certainty precisely which data principals have been affected.

If data fiduciaries have to notify a breach as soon as they become aware of it, most of them will over-report rather than risk being found non-compliant. This sort of reporting could cause panic among data fiduciaries who will have been told their data was compromised, even though it was not. The more this happens, the less likely they are to pay heed, as they may assume after a point that all notifications are false alarms. What’s worse is that the Data Protection Board will be so inundated with breach notifications that it will simply not be able to take action where required. The government had an opportunity to reframe how a data breach could be handled. Not only has it squandered that opportunity, it has placed such a burden on data fiduciaries and the board that its made matters worse.

### Data Localisation

This brings us to Rule 12(4) and the sneaky way in which it is bringing data localization back into consideration. Ever since Justice Srikrishna first included the concept in the 2018 draft of India’s data protection law, I have [argued](https://exmachina.in/31/07/2019/we-need-a-cost-benefit-analysis-of-data-localization/) against this insistence on the physical storage of data in India. Thankfully, each subsequent draft of the law has diluted this concept, and the DPDP Act all but did away with it. With Rule 12(4) suggesting that significant data fiduciaries may have to localize certain categories of personal data, it feels like the government is sneaking in a provision that we all believed we’d seen the back off.

We tend to conflate location with access—assuming that if data is physically situated in the territory of India, it will be easier to access. This is not the case, just as it is wrong to assume that merely because data happens to reside in a foreign jurisdiction, Indian law enforcement authorities will never be able to access to it. Rather than requiring businesses to incur the considerable cost of building domestic data centres, the government would be well advised to negotiate treaties with as many jurisdictions as it can to secure faster and more effective data access. After all, no matter what laws we put in place, it is likely that some data we really need will be lying somewhere outside our grasp.

Despite these concerns, the rules have shone a light on many aspects of the DPDP Act. There was confusion over what consent managers were expected to do. They had been defined in the law, but details were scant. The rules now make it clear that this term has been introduced to align with the country’s data empowerment and protection architecture, and consent managers should be treated as such.

### Age Tokens

Similarly, we now have much-needed clarity on age-gating and how the obligations under the law can be met. Regular readers know that I’ve been [making a case for age tokens](https://exmachina.in/10/04/2024/age-tokens/). If coupled with privacy-preserving techniques (such as zero-knowledge-proof), this will allow data fiduciaries to comply with the requirements under Section 9 of the Act without having to process personal information. Rule 10 has provided a legal basis for just such a framework, and I am glad to see that data fiduciaries can now reference virtual tokens mapped to identity and age.

All we need is for some entity (like the Unique Identification Authority of India) to issue age tokens, and data fiduciaries will be able to use those to ensure they only process the personal data of a child with parental consent. This is one of the most advanced concepts proposed in the rules. If implemented, this could become the age-gating example for the rest of the world to adopt.
