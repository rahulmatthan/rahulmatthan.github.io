---
title: "Tragedy of the Commons"
date: "2025-07-02"
tags: ["digital public infrastructure"]
widgets: 
- "categories"
---

{{< figure src="/images/tragedy-of-the-commons.jpg" width="auto" >}}

_The open source sustainability crisis refers to the fact that many of the foundational open source applications on which all of us depend are maintained by small teams of volunteers in their spare time. Since the DPGs are also open source, do we run the risk of facing a similar challenge as we build DPI solutions using them?_

<!--more-->
_This is a link-enhanced version of an article that first appeared in the Mint. You can read the original [here](https://archive.rahulmatthan.com/archive/1751468163.040464/www.livemint.com/opinion/online-views/log4j-vulnerability-open-source-security-risks-ransomware-attacks-digital-public-infrastructure-dpi-goods-dpg-codebase-11751281250996.html). If you would like to receive these articles in your inbox every week please consider subscribing by clicking on this [link](https://paragraph.xyz/@exmachina)._

---

The [vulnerability](https://www.cisa.gov/news-events/news/apache-log4j-vulnerability-guidance) found on the open-source logging library Log4j was one of the most serious ever detected. It was ranked 10th on the [Common Vulnerability Severity Score](https://www.first.org/cvss/specification-document) on account of the risk it posed to hundreds of millions of devices. If present, it could be used to take full control of a system, steal information or launch ransomware attacks. 

When it was [discovered](https://www.dynatrace.com/news/blog/what-is-log4shell/) in 2021, it had already been around for eight years. The small team of unpaid volunteers responsible for maintaining that open-source library was completely unaware of its existence. By then, it was already being used by a wide range of applications and companies, including an assortment of Apache frameworks and the blockbuster game, Minecraft.

### Tragedy of the Commons

Open-source software suffers from a ‘[tragedy of the commons](https://pages.mtu.edu/~asmayer/rural_sustain/governance/Hardin%201968.pdf).’ While it is designed so everyone can benefit from it, our ability to continue to use these applications depends on a handful of increasingly overwhelmed volunteers whose job it is to keep the code from falling apart. This concern is particularly acute in the case of successful projects that typically have many more users than a small team of maintainers can hope to adequately support.

In her book, [Working in Public](https://www.amazon.in/Working-Public-Making-Maintenance-Software/dp/0578675862), Nadia Eghbal discussed how this maintainer crisis ended up transforming the optimistic and collaborative open source movement of the late 1990s into a cottage industry teetering on the edge of catastrophe. She argues that even though open-source code is free to distribute, it is expensive to maintain, with most projects relying on a few unpaid hobbyist developers to work on it in their spare time. According to a [survey](https://4008838.fs1.hubspotusercontent-na1.net/hubfs/4008838/2024-tidelift-state-of-the-open-source-maintainer-report.pdf) in 2024, more than 60% of open source maintainers are still not paid for the work they do.

Open source was advertised as the ideal of peer-to-peer collaboration. Many believed that vision and trusted it enough to use it as critical infrastructure, not realizing that they would have to depend on the efforts of an under-appreciated volunteer labour force to keep their infrastructure together.

### DPG Maintainers

But there is another, more immediate reason why this is a matter of concern. As more countries look to replicate India’s success with digital public infrastructure (DPI),  rather than building domestic solutions from scratch, they have chosen to leverage available [digital public goods](https://docs.cdpi.dev/the-dpi-wiki/dpg-and-dpi) (DPGs) for that purpose. Since DPG building blocks are modular and interoperable, they can be quickly assembled into the solutions needed.

DPGs are, by [definition](https://www.digitalpublicgoods.net/standard), open-source. They are managed by philanthropically-funded, non-profit [foundations](https://www.mosip.io/) and academic institutions responsible for maintaining the code and supporting its users. While most such DPGs have no immediate problems with funding, unless we think carefully about the long-term sustainability of these institutions, there is every likelihood that they could end up facing the same challenges that other open-source projects have.

As more and more ordinary people have come to depend on DPI solutions for various aspects of their daily lives, we will need to ensure that DPGs on which these solutions have been built are robust and do not suffer the [sustainability crisis](https://openpath.quest/2024/the-open-source-sustainability-crisis/) that Eghbal so eloquently described. Fortunately, there may be an elegant solution we have to offer.

### Private Sector Support

The private sector has—in some way, shape or form—been involved in all of India’s DPI deployments. As a result, a vibrant community of systems integrators, technology service providers, and [hyperscalers](https://blog.google/intl/en-in/company-news/outreach-initiatives/driving-large-scale-impact-for-businesses-and-individuals-through-gemini-and-google-cloud/) have sprung up around the DPI ecosystem. These companies have, for over a decade now, successfully carried out in-country deployment, provisioned cloud infrastructure and made available all sorts of other technical support for countries looking to deploy DPI for their people. To these companies, nothing can be more important than ensuring that the DPGs around which they have built entire business verticals remain viable, secure and functional.

That being the case, there is no reason why we should not give these private entities the opportunity to take more of an active role in the maintenance of these open-source projects. While this could certainly take the form of financial contributions to DPG holders, what might be even more useful is non-commercial support in the form of structured secondments, code contributions or a commitment to augment the resources of DPG holders where necessary.

That said, as we put these arrangements in place, we need to give careful thought to how they should be implemented. After all, we should not, in the process of allowing private entities to maintain DPGs, allow them to alter the code-base so they can secure an unfair commercial advantage over their competitors.

We could, for instance, put in place a multi-stakeholder technical steering committee (modelled on the [Linux Foundation’s Technical Advisory Board](https://wiki.linuxfoundation.org/tab/start)) to oversee code commits to ensure that no private participant alters the DPG code-base to preferentially benefit its own commercial imperatives.

Done right, we just might be able to transform this tragedy of the commons into a flywheel where each new deployment results in expanding the pool of vested contributors. If we can pull this off, we might just be able to prevent the inherent fragility of an open-source ecosystem from chipping away at the durability we expect from our digital infrastructure.