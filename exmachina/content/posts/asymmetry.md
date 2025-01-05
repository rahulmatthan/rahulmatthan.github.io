---
title: Asymmetry
date: '2022-10-04'
tags: ['Data Governance']
widgets:
  - categories
---

{{< figure src="/images/asymmetry.jpg" width="auto" >}}

_Data asymmetry allows those with access to large data sets to gain insights that can be used for various purposes, including manipulation. Solutions like India's DEPA framework aim to reduce this asymmetry. However, challenges remain in knowledge and intelligence asymmetry, requiring democratisation of data science techniques and addressing biases in AI algorithms._

<!--more-->

_This article was first published in The Mint. You can read the original at_ [_this link_](https://www.livemint.com/opinion/columns/eliminate-data-asymmetries-to-democratize-data-use-11664899567533.html)._

---

Anyone who possesses a large enough store of data can reasonably expect to glean powerful insights from it. These insights are more often than not used to enhance advertising revenues or ensure greater customer stickiness. In other instances, they’ve been subverted to alter our [political preferences](https://www.theguardian.com/news/2018/may/06/cambridge-analytica-how-turn-clicks-into-votes-christopher-wylie) and [manipulate us](https://www.forbes.com/sites/forbesbusinesscouncil/2020/08/03/the-dangerous-art-of-social-media-and-messaging-manipulation/?sh=7d3777403f69) into taking decisions we otherwise may not have.

### Data Asymmetry

The ability to generate insights places those who have access to these data sets at a distinct advantage over those whose data is contained within them. It allows the former to benefit from the data in ways that the latter may not even have thought possible when they consented to provide it. Given how easily these insights can be used to harm those to whom it pertains, there is a need to mitigate the effects of this data asymmetry.

Privacy law attempts to do this by providing data principals with tools they can use to exert control over their personal data. It requires data collectors to obtain informed consent from data principals before collecting their data and forbids them from using it for any purpose other than that which has been previously notified. This is why, even if that consent has been obtained, data fiduciaries cannot collect more data than is absolutely necessary to achieve the stated purpose and are only allowed to retain that data for as long as is necessary to fulfill the stated purpose.

In India, we’ve gone one step further and built techno-legal solutions to help reduce this data asymmetry. The [DEPA framework](http://niti.gov.in/sites/default/files/2020-09/DEPA-Book_0.pdf) (which has [featured](https://exmachina.in/04/08/2021/encoding-privacy-principles/) [frequently](https://exmachina.in/07/09/2021/a-technolegal-approach-to-data-transfers/) in this [column](https://exmachina.in/15/12/2021/smart-regulation/)) makes it possible to extract data from the silos in which they reside and transfer it on the instructions of the data principal to other entities, which can then use it to provide other services to the data principal. This data micro-portability dilutes the historical advantage that incumbents enjoy on account of collecting data over the entire duration of their customer engagement. It eliminates data asymmetries by establishing the infrastructure that creates a competitive market for data-based services, allowing data principals to choose from a range of options as to how their data could be used for their benefit by service providers.

### Knowledge Asymmetry

This, however, is not the only type of asymmetry we have to deal with in this age of big data. In a recent [article](https://link.springer.com/content/pdf/10.1007/s00146-022-01410-5.pdf), Stefaan Verhulst of [GovLab](https://thegovlab.org/stefaan-verhulst.html) at New York University pointed out that it is no longer enough to possess large stores of data—you need to know how to effectively extract value from it. Many businesses might have vast stores of data that they have accumulated over the years they have been in operation, but very few of them are able to effectively extract useful signals from that noisy data. Without the know-how to translate data into actionable information, merely owning a large data set is of little value.

Unlike data asymmetries, which can be mitigated by making data more widely available, information asymmetries can only be addressed by radically democratising the techniques and know-how that are necessary for extracting value from data. This know-how is largely proprietary and hard to access even in a fully competitive market. What’s more, in many instances, the computation power required far exceeds the capacity of entities for whom data analysis is not the main purpose of their business.

That said, we have in the recent past begun to see new marketplaces that address this requirement—[platforms](https://www.kaggle.com/) that offer access to off-the-shelf models and AI algorithms that can be used to extract value from a range of different data sets. The resulting [democratisation of data science](https://towardsdatascience.com/democratization-of-ai-de155f0616b5) has made it possible for ordinary businesses to extract value from the data they own in ways that were not previously possible. This, in turn, has begun to chip away at the information asymmetry that separated those with technical knowledge from those with data.

### Intelligence Asymmetry

Before we close, there is one other type of asymmetry that is often discussed in the context of data. As technology improves, the decisions taken by or based on the suggestions of algorithms will impact us in increasingly significant ways. Today, AI is used to determine our [eligibility for loans](https://themarkup.org/denied/2021/08/25/the-secret-bias-hidden-in-mortgage-approval-algorithms), the value of our [insurance premiums](https://www.aclu.org/news/racial-justice/big-data-could-set-insurance-premiums-minorities-could) and even the nature and duration of [prison sentences](https://www.propublica.org/article/how-we-analyzed-the-compas-recidivism-algorithm). Each of these decisions has an effect on the lives and livelihoods of ordinary people—and any bias inherent in the algorithm can unfairly prejudice those to whom the decision applies. This is particularly true of so-called ‘[black box](https://en.wikipedia.org/wiki/Black_box)’ algorithms in which the rationale for decisions remains opaque even to the program’s operator. This inability to understand how automated decisions are taken is what Verhulst refers to as intelligence asymmetry—and needs to be addressed to prevent harm on account of algorithmic bias.

The regulatory response to this has traditionally been to require that automated decisions be accompanied by an explanation of the basis on which that decision was arrived at. But explainability is often a trade-off against accuracy. Algorithms whose decisions can be explained are more often than not less accurate than those whose decisions take place inexplicably—in a black-box.

Is this a trade-off we are willing to make? What if a black box algorithm can [accurately diagnose](https://www.sciencedaily.com/releases/2017/04/170424141252.htm) the lesion on your skin as malignant far sooner than any human radiologist can hope to. Would you still insist that life-saving algorithms should not exist because their decisions can’t be explained?
