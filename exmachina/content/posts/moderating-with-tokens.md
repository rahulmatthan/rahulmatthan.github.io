---
title: "Moderating With Tokens"
date: "2025-06-25"
tags: ["content moderation"]
widgets: 
- "categories"
---

{{< figure src="/images/moderating-with-tokens.jpg" width="auto" >}}

_India's new data protection law introduced the concept of age tokens as a means to obtain verifiable parental consent. If this concept can be adapted to apply to online content, it should finally be possible for us to ensure that online content is delivered in an age-appropriate manner without violating personal privacy._

<!--more-->
_This is a link-enhanced version of an article that first appeared in the Mint. You can read the original [here](https://archive.rahulmatthan.com/archive/1751091661.273395/www.livemint.com/opinion/online-views/age-gating-netchoice-lawsuit-rob-bonta-first-amendment-online-speech-age-verification-online-dpdp-aadhaar-adult-censor-11750679642142.html). If you would like to receive these articles in your inbox every week please consider subscribing by clicking on this [link](https://paragraph.xyz/@exmachina)._

---

In September 2022, California governor Gavin Newsom [signed](https://www.gov.ca.gov/2022/09/15/governor-newsom-signs-first-in-nation-bill-protecting-childrens-online-data-and-privacy/) the [Age-Appropriate Design Code Act](https://leginfo.legislature.ca.gov/faces/billCompareClient.xhtml?bill_id=202120220AB2273&showamends=false) (CAADCA) into law, introducing a new legislative framework to protect children online. The law required businesses whose services were likely to be accessed by minors to conduct ‘data protection impact assessments’ before launching new features. These assessments had to evaluate whether platforms could expose children to “harmful or potentially harmful materials” and mandate mitigation strategies for any risks identified.

NetChoice, a tech industry trade group, immediately sued California Attorney General Rob Bonta, [arguing](https://cdn.ca9.uscourts.gov/datastore/opinions/2024/08/16/23-2969.pdf) that the law violated the US First Amendment and other constitutional provisions. A district court issued a preliminary injunction in September 2023, which was [subsequently broadened](https://netchoice.org/wp-content/uploads/2025/03/NetChoice-v-Bonta-CA-Speech-Code-PI-Granted-Mar-13-2025.pdf) on 13 March 2025.

### Editorial Judgment

The court’s decision was based on the finding that the law violated the constitutional guarantee of free speech by compelling businesses to “opine on and mitigate the risk that children may be exposed to harmful or potentially harmful materials online.” This, the court held, essentially forced platforms to make editorial judgments about speech content, which was not permitted under the near-absolute right to speech available under the US Constitution.

A closer look at the court’s reasoning suggests that the problem is not just that the CAADCA restricted free speech. Since there is no reliable way in the US to distinguish children from adults online, platforms that are under pressure to deny children access end up restricting what adult users can access. Without a clear mechanism to accurately identify which of their users is a child, platforms know that if they under-restrict access, they risk non-compliance with the law. As a result, most will choose to over-restrict, preventing adults from uploading or accessing content that they have a constitutional right to see and share.

The situation in India is somewhat different. While the [Indian Constitution](https://cdnbbsr.s3waas.gov.in/s380537a945c7aaa788ccfcdf1b99b5d8f/uploads/2024/07/20240716890312078.pdf) also grants citizens the right to freedom of speech and expression, it is subject to “reasonable restrictions.” As a result, when the state insists that intermediaries ought to police harmful content, courts rarely interfere, even if this means that these platforms have to exercise the sort of ‘editorial’ judgement over content that US courts have struck down as unconstitutional.

### Digital Infrastructure

That said, India has something that the US lacks: digital infrastructure that offers an elegant solution to the age verification problem that has resulted in US companies over-compensating in order to comply. This means that even though Indian courts may not interfere with laws that require online intermediaries to take editorial decisions on content, Indian platforms are better equipped than their American counterparts to strike an appropriate balance while moderating content.

In an [earlier article](https://exmachina.in/10/04/2024/age-tokens/), I had described how India could leverage Aadhaar to generate zero-knowledge tokens of proof that verify a user’s age without revealing any other personal information. I had discussed this solution in the context of India’s Digital Personal Data Protection (DPDP) Act of 2023, which imposes strict age-based restrictions on the processing of personal data by requiring verifiable parental consent before any such data of a child can be processed. That idea has now been incorporated into the draft DPDP rules, which expressly contemplate the use of “[virtual tokens mapped to identity and age](https://exmachina.in/06/01/2025/the-dpdp-rules-first-impressions/).”

If we can apply the same technological solution to content moderation, it should be possible for Indian intermediaries to avoid the overreach problem that has plagued content regulation in the US. 

### Age Tokens for Moderation

If platforms can accurately determine which of their users are children and which are not, they will be able to narrowly tailor content restrictions so that these apply only to those below the permitted age. This will mean that children attempting to access age-inappropriate material can be redirected away from such content without affecting the ability of adults to access it. This will enable platforms to uphold the fundamental right to freedom of speech and expression while also ensuring that reasonable restrictions can be applied with surgical precision.

As a result, even though India has narrower constitutional protections for speech than the US has, it is capable of striking a far better balance when protecting children from harmful content. Since we have a technological infrastructure that offers a simple, low-friction solution to age verification, Indian platforms are able to build solutions that can target content more effectively than is possible in the US.

Content moderation is a global challenge. Every country needs to strike a balance between over-moderation and children’s exposure to harm that is appropriate in its own unique context. Given the volume and velocity at which content is generated online, no country will be able to do this effectively unless it puts in place an effective age-verification mechanism.

India’s age-token solution represents a remarkable inversion of the way in which content moderation is currently conceptualized. It offers an answer that not only preserves privacy, but ensures that content restrictions can be devised to apply only to those in need of protection. 

Sometimes, solutions lie not in the laws we enact, but in the infrastructure we erect. 