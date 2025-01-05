---
title: "Age Tokens"
date: "2024-04-10"
tags: ["privacy"]
widgets: ["categories"]
---

{{< figure src="/images/age-tokens.jpg" width="auto" >}}

_One of the more worrisome provisions of India's new data protection law has to do with processing of children's data - and in particular, how data fiduciaries should go about verifying the age of those whose data they process. Thanks to India's digital public infrastructure, I believe we may have a novel solution._

<!--more-->

_This article was first published in The Mint. You can read the original at [_this link_](https://www.livemint.com/opinion/online-views/aadhaarbased-age-tokens-can-solve-a-privacy-problem-11712663231351.html), or, if you prefer, listen to me read the article by clicking play below._

{{< audio src="/audio/age-tokens.mp3" >}}

---

Among the more worrisome provisions of India’s new [Digital Personal Data Protection (DPDP) Act, 2023](https://trilegal.com/dataprotection/dataprotectionrevamp/), is Section 9 that imposes an obligation on all data fiduciaries to obtain a parent’s verifiable consent before they process the personal data of a child. What this means is that, before collecting any personal data, businesses will have to ascertain whether the person to whom it relates is a child or not.

This, if you think about it, is an onerous obligation that will likely have far greater consequences than legislators intended. In order to know whether or not the personal data they are processing pertains to a child, data fiduciaries will have to verify the age of every person they interact with. In an entirely online world, there is no way to do this without introducing friction and exposing more personal information than is advisable.

### Age Verification

The best way to assure oneself of the age of the person is by validating it using some form of reliable identity documentation—ideally a document that has been issued by the government. Which seems to suggests that in order to comply with their obligations under the DPDP Act, online services will have to ask everyone who uses their services to first produce identity documents before they can proceed.

This, as you can imagine, will break the internet as we know it. Today, we think nothing of flitting from one website to another by simply clicking on hyperlinks that allow us to navigate wherever our fancy takes us. In the age-verification future that Section 9 describes, each such click will shunt us into an age-verification pit-stop where we will have to confirm our identity before being allowed to view whatever it is that website has to offer.

Yet, as bad as this friction is, that is not what worries me. What I am really concerned about is the fact that in the process of protecting our children from harm, we might have given data businesses something they have sought for a really long time—an excuse to legally collect information on us that can, better than anything else, uniquely target us with their algorithms.

### Protecting Children with ZKP

It is probably worth pointing out at this stage that, [around the world](https://www.theverge.com/23721306/online-age-verification-privacy-laws-child-safety), concerns over the amount of inappropriate information children are being exposed to has been mounting. Many countries have already begun to enact laws to address this—some of which, like the UK’s [Online Safety Act](https://www.legislation.gov.uk/ukpga/2023/50/contents/enacted), have even put in place [age-gating obligations](https://www.legislation.gov.uk/ukpga/2023/50/part/4/enacted) similar to those in the DPDP Act. All of which is to say that, as extreme as it sounds, Section 9 is not as much of an outlier as we might have thought.

There is almost universal agreement on the need to protect children online. To do that, we must identify them as children. But how do we do so in a way that protects not only their personal privacy, but everyone else’s as well?

One answer might be to use [zero-knowledge proofs](https://en.wikipedia.org/wiki/Zero-knowledge_proof) (ZKPs), which are cryptographic computational techniques that mathematically confirm a given fact without disclosing the personal information that would otherwise have been necessary for that purpose. All it will take is for us to generate a digital token that, when processed using a ZKP, will confirm that the person is above the prescribed age without sharing any other personal information. This will allow us to verify the age of internet users while still preserving privacy.

### Smart Tokens for Age Verification

[Aadhaar](https://uidai.gov.in/en/) is a digital system that offers a unique identity to everyone in India. The system includes an age field that, even though not intended to serve as canonical proof of age, could be used for age-verification. All we need is for the Unique Identification Authority of India (UIDAI) to generate a token for each Aadhaar-holder that could, when passed through a suitable ZKP system, confirm whether or not the possessor of that token is above the prescribed age.

It should be possible to generate this ZKP token on the UIDAI website in much the same way as we generate [virtual IDs](https://uidai.gov.in/en/contact-support/have-any-question/284-english-uk/faqs/aadhaar-online-services/virtual-id-vid.html) today. Once in possession of such a token, all a user needs to do is present it whenever access is needed to a new website or online service, so that one’s age can be proven as appropriate without having to reveal any other identifying information. Where a child is looking to access a service, all the website needs is the token of a parent who is provably above the prescribed age. While the solution I have presented uses Aadhaar, the same functionality can be built using just about any digital identity system that offers proof of age.

Token-based solutions address privacy concerns around age-gating. Set up right, they can also reduce the friction implicit in any age-gating implementation. If ZKP tokens are designed in a way so that they can easily be uploaded to one’s internet browser, all a data fiduciary would have to do is run the browser token through the ZKP system to ascertain whether the user is of an appropriate age. This could take place in the background, so that the data fiduciary not only gets to verify the user’s age without accessing her personal information, it can do so without affecting the user experience.

While India’s digital identity system gives it a relative advantage over other countries, allowing us to implement this sort of a tokenized solution at scale, ZKP tokens can be used to address age-verification problems anywhere in the world. In their search for solutions to fulfil obligations under India’s new data protection law, Indian companies could well find answers to a problem that the whole world is eager to solve.