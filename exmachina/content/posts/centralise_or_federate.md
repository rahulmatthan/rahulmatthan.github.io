---
title: "Centralise or Federate"
date: "2021-12-28"
tags: ["Digital Public Infrastructure"]
widgets: 
- "categories"
---

*The design of digital data sharing infrastructure must be federated. Where there is a need for data availability beyond the duration that data fiduciaries will retain it we need to build data storage alternatives that data principals can use. We should resist the temptation of getting the government to build these data stores as a public good because the role of the government is to govern - and it should not get into the business of data storage and data management. Instead we should take a market approach and encourage private data storage providers to offer federated, inter-operable solutions.*
<!--more-->
*This article was first published in The Mint. You can read the original at [this link](https://www.livemint.com/opinion/columns/the-value-and-vulnerability-of-centralized-data-storage-11640707771648.html).*

---

Over the past few years, India has rolled out a dizzying array of data-sharing infrastructure projects. The most visible developments have been in the financial sector, where the [recently-launched](https://sahamati.org.in/media/account-aggregator-ecosystem-go-live-media-coverage/) [account aggregator framework](https://sahamati.org.in/) has made it possible for over 300 million users to share their data with different financial entities across the credit ecosystem. Similar activity is also underway in the [health sector](https://abdm.gov.in/), and many other sectors will, doubtless, follow suit.

The most obvious benefit of these frameworks is the resulting improvements in the ease of doing business. Once data is capable of moving between institutional silos using digitally authenticated flows, businesses will be able to rely on the veracity of the underlying information to offer their customers a range of paperless, presence-less services that would otherwise not have been possible. This in turn allows data to be used, with the consent of the user, in many more ways and by different entities than originally envisaged. In the health sector, for example, this means that data can be aggregated longitudinally, offering a view of the cumulative [medical history](https://play.google.com/store/apps/details?id=in.ndhm.phr) of a patient across all of that person’s touch points with the healthcare system.

### Unified or Federated

One of the most important decisions that needs to be made while building digital infrastructure of this sort is whether data should be extracted from the silos in which they currently reside and aggregated into a central repository, or simply left where they are but interconnected so they can, at the behest of the user, be transferred from one entity to another.

A central store makes data management easier, allowing individuals greater control over their data without the need to rely on data collectors to provide them access to their own data. However, it also creates a single point of failure, as a centralized data repository of sensitive personal information is an obvious target for hackers and the like. If a store like this eventually hosts all the sensitive personal data of entire country, a breach would place the sensitive personal data of the entire population at risk.

One way to mitigate these risks is to adopt a federated design that ensures that all this data does not end up in a single archive. If data can remain where it currently is and be transferred on request, this model offers the same benefits with significantly less risk.

### Data Availability

But the federated model is not without its challenges. Data users want their personal data to be available indefinitely, so that they can use it many years and even decades into the future. Data collectors, on the other hand, have no incentive to store the data any longer than necessary, particularly since storage comes at a cost and their liability for a data breach is on the rise.

What this means, in the healthcare context, for instance, is that a patient’s ability to access her complete personal health record in a federated data system is effectively dependent on the data retention policies of each of the hospitals and medical establishments that she uses. All it takes is for any one of them to decide that the cost of storing this data is too high and that portion of her personal health record would be lost forever.

Data collectors cannot be compelled to store data indefinitely simply because users want to be able to access it whenever they want. What’s more, any one of these entities could go bankrupt or change the focus of its business—at which point in time, the data under its care could be lost forever. A federated data architecture cannot mitigate these eventualities. If we want to build a robust data-sharing system based on the principles of federated design, we need to find answers to these problems.

One solution that’s been proposed is for the government to establish a centralized data repository and offer it as a public good for the benefit of all its citizens, along the lines of [DigiLocker](https://www.digilocker.gov.in/dashboard), except that it will be for one’s personal data and not official documents. Data that is currently stored in different databases throughout the federated data architecture could be backed up by this repository, ensuring that even if any one of the service providers goes down, the data is not lost.

### Market Solution

This, in my humble opinion, would be a bad idea. Apart from the fact that the mere suggestion of the government aggregating sensitive data into a single store is likely to be met with stiff opposition, this is not a job for the state. The core function of government is to govern—which, in the context of digital infrastructure, means establishing frameworks, ensuring appropriate behaviour and incentivizing market participation in the data sharing framework. This means that all the government should do is prescribe the data sharing protocols, establish the regulations that will govern participants in the ecosystem, and ensure compliance. Under no circumstances should we expect the government to additionally play the role of a data host and service provider.

What the government can do, instead, is allow private service providers to offer hosted storage services alongside the rollout of a federated data architecture and integrate this into the design. If we adopt a market-based approach, private innovators will find the solutions we need to the problems of permanent data storage.

As long as we insist that all hosted storage solutions are interoperable with each other, we should be able to ensure that all storage solutions are federated, just like the rest of the architecture.
