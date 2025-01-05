---
title: "Encoding Privacy Principles"
date: "2021-08-04"
tags: ["Digital Public Infrastructure"]
widgets: 
- "categories"
---

*The DEPA framework encodes most of the privacy principles that run through most privacy regulations into the framework of data transfers. However, while it solves the questions of notice, consent and purpose limitation, once the data is in the possession of the transferee, the traditional DEPA framework has no control over what is subsequently done with it. This means that it will no address issues of use restriction, data minimisation and retention limitation. If we can integrate into the traditional DEPA framework the concept of Confidential Clean Rooms we should be able to address these remaining privacy principles as well.*
<!--more-->

*This article was first published in The Mint. You can read the original at [this link](https://www.livemint.com/opinion/columns/privacy-checks-can-be-built-into-software-architecture-11628016765657.html).*

---

India’s Data Empowerment and Protection Architecture ([DEPA](http://niti.gov.in/sites/default/files/2020-09/DEPA-Book_0.pdf)) has featured more [than](/30/january/2019/account-aggregators-and-e-consent-for-credit-markets/) [once](/07/august/2019/a-new-framework-for-consent-to-ensure-data-privacy/) in these pages. In a [recent article](/08/september/2020/consent-to-port/), I explained how this framework makes it possible for us to split consent into collection consent (that we provide when we sign up for a service for the first time) and consent to port (that we provide just before data is transferred to a third party).

> *By uncoupling consent to port from sign-on consent we can significantly improve our effective control over our personal data. It makes the privacy compact that we enter into with those who collect our data more understandable and gives us greater, more effective agency in the decisions we make with regard to the transfer of our data.*

This sort of bifurcation gives us more proximate control over what is done with our data, while at the same time reducing the complexity of the terms of service that we sign up to.

But DEPA can do so much more than just give us better control over our data transfers. It can establish a technological framework within which most—if not all—of the principles that underpin modern privacy legislation can be implemented in code.

### The Privacy Principles

Central to privacy laws anywhere in the world is a set of principles that define how personal data can be collected and processed. These include:

- *notice and consent* — the obligation to obtain the informed consent of the data principal before collecting or processing her data,
- *purpose limitation* — the obligation to ensure that the purpose for which data is being collected is described in clear and specific terms,
- *data minimisation* - the obligation to only collect as much data as is strictly necessary to achieve the stated purpose,
- *retention limitation* — the obligation to ensure that data is not retained for longer than required to achieve the stated purpose, and
- *use limitation* — the obligation to ensure that data is only used for the purpose for which it was collected.

### Privacy in Code

DEPA makes it possible for all these principles to be programatically achieved in relation to the transfer of data from one data fiduciary to another.

Let’s start with the principle of informed consent. DEPA uses the [MeITy electronic consent artefact](http://dla.gov.in/sites/default/files/pdf/MeitY-Consent-Tech-Framework%20v1.1.pdf%29) to process data-transfer requests. What this means is that each time a data fiduciary makes a request for data, it has to provide information on what specific data it needs, the purpose to which that data will be put, and the duration for which it will be retained for the same. As a result, every data transfer request will provide users with due notice and can only be completed if consent is provided in relation to that specific request.

Now let’s turn to purpose limitation and data minimisation. Data transfer requests under DEPA are template based: data fiduciaries will have to choose from a set of templates and pick the data request format that meets their requirements. These templates will be designed to cover a broad range of uses for which data might be requested, while still ensuring that only that much data as is necessary to fulfil those uses is requested. By using consent templates, DEPA programatically ensures that both the purpose limitation and data minimisation principles are met.

As we can see, the basic DEPA construct addresses three out of the five privacy principles: Notice and consent, purpose limitation and data minimisation. What it doesn’t seem to be capable of protecting is what happens to the data after it has been collected. In other words, there is nothing to prevent a data fiduciary from using the data for purposes other than those for which consent was obtained or from retaining it for longer than agreed in the data transfer request.

If DEPA is to be an end-to-end solution for privacy, we have to incorporate technological safeguards that address the issues of use limitation and data retention as well.

### Confidential Computing

In the recent past, advances in confidential computing have made hardware-based, trusted execution environments commercially available at scale.

Companies like Microsoft have started offering confidential compute solutions as part of [their cloud service](https://azure.microsoft.com/en-us/solutions/confidential-compute/#overview). Within these trusted environments, data can be processed in much the same way as it can while under the direct control of the processor. However, because this data never leaves the execution environment, the use of this infrastructure provides [high levels of assurance](https://confidentialcomputing.io/wp-content/uploads/sites/85/2021/03/confidentialcomputing_outreach_whitepaper-8-5x11-1.pdf) on the integrity of the data being processed.

If we can use this technology to build confidential clean rooms and make them part of the standard DEPA implementation, we can, instead of transferring data into the control of a data fiduciary, deposit the data into these secure environs. The data fiduciary will be able to process data within the confidential clean room in much the same way as it currently does, with the added advantage of being able to ensure that processing is only limited to the stated purpose.

In addition, this confidential clean room can be designed to extinguish data in accordance with the agreed data-retention policy. As is evident from this, the inclusion of confidential clean rooms in the DEPA construct would allow us to programatically implement the principles of use limitation and data minimisation in its architecture.

### A Regulatory Solution

Data protection authorities the world over have been struggling to exercise effective control over the data businesses they are supposed to regulate. Currently, the only tools at their disposal are the laws and regulations they are empowered to enforce. Of late, it has been getting increasingly clear that regulation simply cannot match the rate of change in technology. India’s Data Empowerment and Protection Architecture offers a technological solution that embeds privacy principles directly into the technology architecture.

Done right, this might well be the solution that regulators have been looking for.
