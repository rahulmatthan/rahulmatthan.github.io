---
title: "Big Data Protection"
date: "2025-05-21"
tags: ["privacy"]
widgets: 
- "categories"
---

{{< figure src="/images/big-data-protection.jpg" width="auto" >}}

_Modern privacy law is based on principles of data protection that were first articulated in the 1970s. As a result, it is based on the idea that we should collect as little data as possible to safeguard personal privacy. In the age of AI and big data, that approach is fast losing its relevance._

<!--more-->
_This is a link-enhanced version of an article that first appeared in the Mint. You can read the original [here](https://archive.rahulmatthan.com/archive/1748510675.779162/www.livemint.com/opinion/online-views/data-protection-digital-privacy-fipps-consent-regulation-ai-ethics-data-retention-anonymization-federated-learning-india-11747657040827.html). If you would like to receive these articles in your inbox every week please consider subscribing by clicking on this [link](https://paragraph.xyz/@exmachina)._

---

The first country to seriously address the issue of protecting digital personal data was the United States of America. In a report titled [Records, Computers and the Rights of Citizens](https://aspe.hhs.gov/reports/records-computers-rights-citizens) issued in 1973, it set out a list of data protection principles called the Fair Information Practice Principles ([FIPPs](https://www.fpc.gov/resources/fipps/)). FIPPs required organisations to provide notice before collecting personal data and seek consent before processing it. Only as much personal data as was necessary to achieve the specified purpose could be collected, and it could only be used for the purpose specified. Organisations had to keep personal data accurate, complete and up to date, and give individuals the ability to access and amend it as required.

If all this sounds familiar, it is because it is. These principles have been incorporated into all modern data protection laws—from Europe’s [General Data Protection Regulation](https://gdpr-info.eu/) to India’s [Digital Personal Data Protection Act](https://www.meity.gov.in/static/uploads/2024/06/2bf1f0e9f04e6fb4f8fef35e82c42aa5.pdf). It is where concepts like notice and consent, purpose specification, use limitation, data minimisation and retention restriction come from, and it is remarkable how 50 years after they were first conceptualised, they continue to be used to protect personal privacy.

Or do they? In the 1970s, our ability to process data was limited, constrained by computational power and storage capacity. As a result, very few organisations could afford to process personal information at a scale that would affect our privacy. Since companies had to be selective about what data they collected and used, it made sense to require them to constrain the uses to which they put the data and for how long they retained it.

### Big Data

Today, these constraints are no longer relevant. All organisations, regardless of their size or sphere of activity, use data in all aspects of their operations. Global data creation grew from about two zettabytes in 2010 to over 180 zettabytes projected in 2025. As a result, concepts like notice and consent are becoming increasingly meaningless, as it is no longer feasible to provide notice of all the different types of data processed or the many uses to which it will be put.

Advances in artificial intelligence (AI) have further complicated the issue. If we want to benefit from all that AI has to offer, we need to give these systems access to our personal data so that they can draw inferences from it. With the ability to analyse the cumulative record of all the data that our personal fitness trackers have recorded about us, for example, AI systems may be able to use that information to infer our likelihood of contracting a disease. Those who are currently unable to access credit because they lack the traditional indicators of creditworthiness may be able to provide other indicators of their ability to repay a loan if AI systems are allowed to analyse their personal information.

### Purpose, Retention and Minimisation

If we use AI systems for these purposes today, we are likely to run afoul of one or more of the data protection principles. Take, for instance, purpose specification. Since most AI use cases may not even have been conceivable when the data in question would have been collected, it is unlikely that our consent would have been obtained for it to be used in that manner. Deploying AI for these use cases would most likely require seeking fresh consent from data principals.

The other concern is around retention. Since data is only permitted to be retained for as long as necessary to serve the purpose for which it was collected, organisations that comply with the mandates of global data protection regulations have set up systems to delete personal data once their purpose has been served. In the case of healthcare data, this is unfortunate because medical AI applications rely on access to health data records over as long a period of time as possible in order to establish trends for current parameters to be evaluated against baselines. If hospitals have to delete this data as soon as the immediate purpose is served, these opportunities will not be realised.

Finally, there is the principle of data minimisation, which requires us to only collect as much data as is strictly required to fulfil the specified purpose. Since AI systems perform better if they have more data on which they can be trained, the minimisation obligation makes less data available for training and, as a result, limits the benefits that AI can bring.

### Technology Solutions

The approach taken by the US FIPPs to minimise the risk of privacy harm limited the amount of personal data in the hands of the organisations that processed it. At the time, this was a reasonable approach as there was no additional benefit to be gained by allowing corporations to store our data.

This is no longer the case. The more data that AI systems have, the better the outcomes they produce. As a result, any approach that simply limits the data these systems can use trades the benefits that could accrue from data analysis for the mitigation of privacy-related risks.

I have, in previous columns, written about how new technological approaches—data anonymisation and [privacy-enhancing technologies](https://exmachina.in/09/10/2019/we-may-need-a-whole-new-approach-to-data-protection/)—as well as institutional measures like [data trusts](https://exmachina.in/09/10/2019/we-may-need-a-whole-new-approach-to-data-protection/), can offer us a new approach. If we can deploy federated learning and [confidential compute](https://exmachina.in/04/08/2021/encoding-privacy-principles/) systems, we should be able to use personal data without violating personal privacy.

Our current approach to data protection is now more than half a century old. It is no longer fit for purpose. We need to learn to use personal data for our benefit without causing privacy harms. 