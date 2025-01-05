---
title: "Identity and Privacy"
date: "2021-10-21"
tags: ["Privacy"]
widgets: 
- "categories"
---

*Identity is a prerequisite for the provision of services and efficient identity systems are necessary to scale digital public infrastructure. We can build back trust in identity systems through encryption and tokenisation of identity information by using privacy preserving technologies like zero knowledge proofs so that we can still establish eligibility for a service without exposing identity information.*
<!--more-->

*This article was first published in The Mint. You can read the original at [this link](https://www.livemint.com/opinion/columns/health-ids-needn-t-cause-any-anxiety-over-data-privacy-11634661799198.html).*

---

No sooner had the Ayushman Bharat Digital Health Mission of the Indian government begun to issue [digital Health IDs](https://healthid.ndhm.gov.in/) than I saw a flurry of [articles](https://www.rediff.com/news/report/indias-digital-health-mission-likely-to-face-privacy-issues/20211011.htm) on how this new scheme was yet another assault on our personal [privacy](https://www.thenewsminute.com/article/risks-storing-health-records-13-billion-indians-national-health-stack-156707). Many of the concerns raised were the same arguments that had featured prominently in an earlier challenge to Aadhaar. This included the apprehension that the new Health ID would result in our health data being [aggregated](https://science.thewire.in/health/ayushman-bharat-digital-mission-technofix-public-healthcare-privatisation/) into large, centralized databases, making this intimate information easily accessible to those who wanted to misuse it.

As it happens, this particular fear is [largely unfounded](https://healthid.ndhm.gov.in/FAQ) in the case of India’s digital health architecture, given that its federated design will, for the most part, ensure that your data remains where it was originally stored. But as I read through increasingly agitated conversations on social media, it was clear that there was a much deeper issue at play. For some reason, digital identity systems in India are directly associated with privacy harms and any attempt to introduce them into the architecture of our public digital infrastructure is met with knee-jerk opposition.

What’s not entirely clear is why.

### The Importance of Identity

Identity is a prerequisite for the provision of services. In order to assess whether or not individuals are eligible for the services they are requesting, you have to be able to tell who they are. After establishing eligibility, you still need to identify them correctly each time they avail the service to make sure that they are not trying to double-dip on a benefit they have already received.

When services were provided physically, we thought nothing of producing a proof of identity for service providers to verify. We understood that they had to be able to identify us in order to ensure an equitable distribution of entitlements. And yet, now that these services are available online, we balk at identifying ourselves.

From one perspective, this discomfort is understandable. There is already widespread concern that digital service providers know more about our habits and behaviours than they ought to. To add to that, given the number of incidents of data breach and negligence that are reported on an almost-daily basis, it is not surprising that most users believe that digital service providers have no interest in safeguarding our personal privacy. With universal identity systems added to the mix, many people believe that all we are doing is enabling hitherto unrelated items of information to be more accurately cross-referenced, making a bad situation worse. And yet, there is little doubt that digital identity solutions, if implemented well, can add value to almost any service offering.

This is one of the central challenges facing anyone looking to build population scale infrastructure for digital public goods. While efficient identity solutions will greatly enhance the utility of these systems, given how closely digital identity has come to be associated with privacy harms, any attempt to incorporate them tends to meet instant resistance. Privacy purists would much rather that we did away with digital identity systems altogether. They argue that the harms these systems are capable of causing are simply not worth any benefits they may provide.

### Rebuilding Trust in Digital Identity

Maybe there is a less extreme alternative. Given how important identity is in the digital context, rather than trying to engineer our digital public goods infrastructure to function without any digital identity, perhaps we need to make an effort to ensure that the identity solutions used are [designed](https://iapp.org/media/pdf/resource_center/pbd_implement_7found_principles.pdf) more thoughtfully—to enhance rather than erode privacy.

There are a number of ways in which this can be achieved. Where identity is necessary for the limited purpose of identifying eligible recipients, we could make sure that the moment eligibility has been established, the identity information is sequestered in separate hard-to-access confidential stores in such a manner that it becomes impossible for this data to be intermingled with other transactional information generated in the course of providing the service. Wherever possible, this information should be encrypted and/or tokenized to ensure that even in the event of a data breach, the detrimental impact on privacy is negligible.

Where beneficiaries of one service are entitled to avail of other allied services, we should design our public goods infrastructure to facilitate this sort of cross-verification of beneficiaries in a privacy-preserving manner—without actually exchanging the digital identity information wherever possible. We could, for instance, conceptualize [zero-knowledge proof solutions](https://www.notboring.co/p/zero-knowledge##Zero-knowledge+proofs+have+the+potential+to+eliminate+the+need+for+the+trade-off+and+bring+about+a+paradigm+shift+in+the+way+we+think+about+privacy.+Instead+of+a+black+and+white+decision%2C+we+can+ask%2C+%E2%80%9CExactly+who+needs+exactly+how+much+information%2C+and+under+what+circumstances%3F%E2%80%9D) that establish a person’s eligibility for an associated service without actually exposing any core identity information.

In each case, the ideal solution will depend on the specific application in question. In some circumstances, it might be more appropriate to separate data flows from identity flows (like how data and consent flows have been disaggregated in the [DEPA framework](http://niti.gov.in/sites/default/files/2020-09/DEPA-Book_0.pdf)). In others, it might be preferable to generate tokens that serve as proxies for identity. Rather than being prescriptive, we should incentivize the use of privacy-enhancing digital identity solutions but leave it to the ingenuity of service providers to develop appropriate modes of implementation.

It is only by actively re-building public trust in digital identity systems in this manner that we will achieve the full potential of our digital public infrastructure.

