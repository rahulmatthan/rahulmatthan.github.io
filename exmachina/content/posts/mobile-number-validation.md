---
title: "Mobile Number Validation"
date: "2025-07-30"
tags: ["telecommunication"]
widgets: 
- "categories"
---

{{< figure src="/images/mobile-number-validation.jpg" width="auto" >}}

_Given how widely OTPs are used for a range of different purposes, it has become the focus of attention for malicious actors. While that might be the case, the system that the Department of Telecommunications is building to crack down on these abuses, will excessively centralise data and exceed its authority._

<!--more-->
_This is a link-enhanced version of an article that first appeared in the Mint. You can read the original [here](https://www.livemint.com/opinion/online-views/otp-authentication-telecom-cybersecurity-sim-swap-fraud-aadhaar-ekyc-digital-identity-verification-upi-compliance-govern-11753711101612.html). If you would like to receive these articles in your inbox every week please consider subscribing by clicking on this [link](https://paragraph.xyz/@exmachina)._

---

As transactions have grown increasingly digital, service providers rarely (if ever) come face-to-face with their customers. This means that without reliable means of authentication, they have no way to ensure that the products and services they sell actually end up in the hands of those who bought them.

One way to address this would be to insist on [multiple factors of authentication](https://www.onelogin.com/learn/what-is-mfa). In practical terms, this means that in addition to proving who you are in reference to ‘something you know’ (such as a PIN or a password), you would also be required to do so with reference to ‘something you have’ (such as a hardware token or a mobile device) or ‘something you are’ (such as a fingerprint or another biometric identifier).

### OTP Use and Abuse

In India, the most widely used additional form of authentication is the one-time password (OTP), a number sequence sent to your mobile phone (since this is ‘something you have’) to validate that you are who you say you are. There are many reasons why these are preferred. OTPs are only valid for a single session, which means that an attacker who gains access to one will not be able to reuse it, and, since it has limited validity, they have just a small window within which to misuse them.

Today, OTPs are used for all sorts of purposes. Delivery boys insist on them before handing over a parcel, and ride-hailing apps need one to start a ride. Given their widespread use (and perhaps because of it), malicious actors are going to extraordinary lengths to find ways to exploit them. Some register for services using old or recycled SIMs so that they can obtain OTPs to access the previous user’s account. Others use OTP application programming interfaces (APIs) to flood users with OTPs, which can serve as a way to perpetrate denial-of-service attacks or mask other fraudulent activity.

### Cyber Security Amendments

Last week, to curb some of these illicit uses, the Indian government proposed a set of changes to India’s Telecom Cyber Security Rules. They intend to establish a government-run real-time platform that validates whether a mobile number is active, recently re-issued or swapped, and linked to the same subscriber profile recorded by the telecom company. This, the government hopes, will help prevent impersonation through SIM reuse, [SIM swaps](https://www.hindustantimes.com/cities/noida-news/noida-man-loses-15-5-lakh-in-sim-swap-fraud-police-launch-probe-101753816494218.html) and spoofing.

The Cyber Security Rules will apply to all organisations that use telecom identifiers to authenticate users or deliver services. For this purpose, it has created a new category of regulated entities called Telecommunication Identifier User Entities (TIUEs), defined in terms so broad that they cover over-the-top platforms, fintech firms, e-commerce service providers, edtech platforms and just about any entity that provides digital services. TIUEs have to follow the same cybersecurity protocols as other licensed operators, including risk assessment, incident reporting and data security. In the event of misuse, the government will have the power to temporarily suspend the use of a given telecom identifier or suspend its use for the identification of customers/users or delivery of services. It could even permanently disconnect it.

While the Centre’s efforts at cracking down on OTP abuse are appreciable, I worry that the solution it has come up with [exceeds its authority](https://www.moneycontrol.com/news/business/digital-industry-slams-telecom-cybersecurity-rules-for-overreach-cost-burden-and-privacy-risks-13349885.html). The Telecommunications Act of 2023 applies to entities that provide telecom services or operate telecom networks and equipment. In creating a new category of regulated entities called TIUEs, its amendments extend the government’s authority to just about any organisation that uses telecom services as part of its business. This is far in excess of what the Act permits.

### Regulatory Over-reach

Today, OTPs are used across a range of sectors. The [Reserve Bank of India](https://img1.digitallocker.gov.in/circulars/RBI_master_circular_on_eKYC_09.01.2020.PDF) has permitted the use of Aadhaar-based OTPs for e-KYC and has authorised the use of OTPs for card-not-present transactions, UPI, net-banking, wallets and recurring e-mandates. The [National Health Authority](https://abdm.gov.in:8081/uploads/ABDM_Building_Blocks_v8_3_External_Version_eabbc5c0f3_4_a96f40c645_5716a684de_b344369144.pdf) frequently uses OTPs for the creation of health IDs, consent management and access to health information. All the entities that use OTPs for these purposes are regulated by existing regulators and have to abide by a detailed set of obligations that set out how OTP authentication needs to be carried out. If these amendments to the cybersecurity rules come into force, they will additionally be forced to comply with the instructions of the telecom regulator. This will give rise to confusion and regulatory uncertainty, increase their burden of compliance and force businesses to implement measures that may be improperly aligned with the objectives of the different regulators they have to obey.

There are also practical consequences of this approach that the government may not have fully thought through. Given how broadly it has been defined, tens of thousands of entities will likely qualify as TIUEs and will have to integrate their services with the mobile number validation (MNV) platform. This will create a centralised log of OTP usage, offering cross-sectoral intelligence on user behaviour of unprecedented magnitude. This will probably become a honeypot for cybersecurity attacks and data breaches that could put us all at risk. Regardless of the idea’s intention, it will also likely be viewed as a form of surveillance that is neither proportionate nor warranted—and thus an instance of regulatory overreach.

While OTP misuse is a problem, all we need to do is tighten SIM re-issuance procedures and mandate fraud reporting. Over-broad solutions can end up eroding the very trust they seek to preserve.