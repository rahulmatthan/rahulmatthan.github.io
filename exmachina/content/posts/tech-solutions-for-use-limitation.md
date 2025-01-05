---
title: "Tech Solutions for Use Limitation"
date: "2024-11-20"
tags: ["Digital Public Infrastructure"]
widgets: ["categories"]
---

{{< figure src="/images/tech-solutions-for-use-limitation.jpg" width="auto" >}}

_The Account Aggregator system has implemented most data protection principles directly into code. With one exception - use limitation. A recent paper offers a technical solution to this problem through sharding and confidential multiparty compute._

<!--more-->

_This article was first published in The Mint. You can read the original at [_this link_](https://www.livemint.com/opinion/columns/lets-plug-a-privacy-loophole-in-india-s-account-aggregator-system-digital-public-infrastructure-dpi-data-ai-regulation-11731925401734.html). If you would like to receive these articles in your inbox every week please consider subscribing by clicking on this [link](https://paragraph.xyz/@exmachina)._

---
As regular readers of this column will know by now, I have long advocated the benefits of embedding regulatory principles directly into digital infrastructure. Having worked on different versions of India’s digital public infrastructure, I have come to see, first-hand, how well this techno-legal approach addresses the many challenges that will arise in the context of a rapidly digitizing economy.

When I discuss these ideas in public, the example I often give is of India’s [Account Aggregator](https://sahamati.org.in/what-is-account-aggregator/) framework—the consent-based, data sharing system that has now processed nearly 125 million ‘consents’ that have enabled all manner of financial products. It exemplifies the approach I am talking about by demonstrating how data protection principles can be incorporated directly into the design of digital infrastructure.

### Data Protection Principles

In order to process the personal data of a data principal, the data fiduciary must first obtain her informed consent. In particular, the data fiduciary must inform the data principal of the purposes for which such data will be processed and can only collect as much data as is strictly necessary to fulfil the stated purposes. No data can be retained for longer than is strictly necessary in order to satisfy specified purposes and it cannot be used for any purpose other than those for which consent has been obtained.

India’s Account Aggregator system has been built around a technology construct—referred to as the ‘[consent artefact](https://dla.gov.in/sites/default/files/pdf/MeitY-Consent-Tech-Framework%20v1.1.pdf)’—that embodies these privacy principles in a digital format. Entities that want to use financial data (called financial information users or FIUs), such as lenders looking to appraise loan-worthiness, must  make a data request using this artefact and will only be entitled to receive data from the entity that has that data (called the financial information provider or FIP) if and when they have obtained the data principal’s consent to do so.

Since the principles of notice, purpose specification, retention restrictions and data minimization have all been incorporated directly into the consent artefact, personal data processed by FIPs and FIUs will, by the mere act of participation in the Account Aggregator system, align with globally recognized principles of privacy.

But there is one important shortcoming of the current system. Once personal data has been transferred from the FIP to the FIU, there is no technical measure that it deploys to prevent the latter from using it for any other purpose it may choose. All the consent artefact can do is obtain a commitment from the FIU that it will only use the data in accordance with the terms set out in the consent artefact, but there is no way that use-limitation commitment can be programmatically enforced.

### A Solution to Use Limitation

A [recent paper](https://md.silencelaboratories.com/s/CQW5fu-fP) proposes a possible solution to this problem. Instead of simply handing the data over to the FIU, it describes a mechanism whereby this data can be placed in a special environment that allows FIUs to extract the inferences they need but ensures that they do not directly lay their hands on the raw data. Since they never get to access the data, they have no opportunity to use it in ways that run contrary to the agreed purpose.

The way the paper proposes we do this is through the creation of a set of special nodes, or financial information compute units (FICUs), that are capable of securely processing encrypted data. Data that has to be transferred pursuant to a consented data request would first be encrypted and then divided into shards that are distributed across multiple FICU nodes, so that no single node will be able to get any useful data from the shard they have been given.

FIUs that what to extract inferences from the data will need to submit computation requests in the form of secure, purpose-bound operational codes, which are individual programmatic instructions that describe exactly what will be done with the data. These operational codes will first be inspected by a consent prover in order to validate their alignment with the purposes that the user consented to while okaying the data transfer request. This ensures that the FIU cannot extract any inference from the personal data that does not conform to what the person agreed it could be used for.

Once these operational codes have been approved, the FIU can use them to extract the inferences they need from the data. They do this using distributed multi-party computation (MPC) techniques that, when applied to different shards of encrypted data distributed across various FICU nodes, will generate the final computed insights without exposing any of the raw data that underlies it. That data remains, at all times, encrypted within FICU nodes.

### Use Limitation Through Code

If we can use this sort of technical construct to augment the Account Aggregator system, we will finally have a complete technological solution for financial data transfers that implements all the key privacy principles in code. 

This will require us to create a brand new category of institutional entity—of consent approvers—to verify the operational codes that ensure data is only processed based on people’s consent. We will also have to implement an effective multi-stakeholder governance system to ensure that various entities operating the FICU node all have different incentives, so that no one party is able to assume full control over either the data or computation processes. Since useful inference can only take place with the cooperation of multiple nodes, this will ensure that rogue operators will be unable to process data on their own.