---
title: "Verifiable Credentials"
date: "2025-05-14"
tags: ["digital public infrastructure"]
widgets: 
- "categories"
---

{{< figure src="/images/verifiable-credentials.jpg" width="auto" >}}

_We built technology systems to enable data portability only to realise that system-to-system integration is a non-trivial lift. A far simpler solution is to create self-custodial verifiable credentials that are capable of being verified without relying on their issuers._

<!--more-->
_This is a link-enhanced version of an article that first appeared in the Mint. You can read the original [here](https://archive.rahulmatthan.com/archive/1748510517.914127/www.livemint.com/opinion/online-views/digilocker-digiyatra-data-portability-digital-public-infrastructure-self-custodial-personal-data-gdpr-dpdp-dpi-qr-code-11747052653483.html). If you would like to receive these articles in your inbox every week please consider subscribing by clicking on this [link](https://paragraph.xyz/@exmachina)._

---

Back in the day, all we had to rely on were paper records. When we visited a doctor, we carried along with us a file containing all our medical records—prescriptions, diagnostic results, etc, for the doctor to review before treating what currently ailed us. When we went to our bank, it was always with passbook in hand, so that the history of our transactions could be manually updated in its pages for our record. This allowed us to do with this information what we pleased. If we needed a second opinion, we carried that same file to a new doctor so that he or she could read through it without needing to speak to our primary physician. If we applied for a loan from some other bank, we simply showed them our passbook so that they could assure themselves of our creditworthiness.

Over time, as these systems became more digital, the organisations we interacted with offered us new conveniences. They built digital systems that stored our data and designed internet portals and mobile applications we could use to access and interact with them. Eventually, these organisations came to realise that this data was valuable and, in order to preserve their competitive advantage, began to make the data hard for others to access. In the process, it also denies us, those to whom that data pertains, the ability to properly avail ourselves of it.

### Data Portability

Countries around the world have found different ways to address this problem. Europe included the right to data portability in its General Data Protection Regulation ([GDPR](https://gdpr-info.eu/)), allowing residents to invoke this right in order to access their personal data that happens to be under the control of a data fiduciary. Other countries built large population-scale digital infrastructure to enable data transfers—in Australia, this is called the [Consumer Data Rights](https://www.cdr.gov.au/) initiative, and in India, the Data Empowerment and Protection Architecture ([DEPA](https://www.niti.gov.in/sites/default/files/2023-03/Data-Empowerment-and-Protection-Architecture-A-Secure-Consent-Based.pdf)).

Today, these digital infrastructure projects are considered among the most important elements of a country’s digital public infrastructure (DPI) stack, making up, along with digital identities and payments, the holy trinity of DPI implementation. As currently envisaged, they connect different isolated systems to each other so as to enable data in one silo to be moved to another.

To work properly, we have to ensure that the digital system of a given organisation is capable of interacting with that of every other one that it needs to share data with, communicating in a language they all understand. We do this by putting in place Application Programming Interfaces (APIs), simple schema that all entities have to align with in order to understand data requests made by any one of them and be able to respond in a useful way.

### Verifiable Credentials

Despite the success we have had, this system-to-system approach is hard to implement at scale. Getting multiple organisations of different sizes and technical capabilities to align their digital applications with the requirements of these APIs takes months, sometimes years. And while we may have managed to pull this off in the financial services sector, it will be much harder to do so in others.

A [recent paper by FIDE](https://drive.google.com/file/d/1kOEvGqjsKxoYvK3KglB77-DmmiZIykhA/view) suggests that the answer might lie in going back to where we started. When we only had paper records to rely on, we carried copies of our personal data with us. This self-custodial approach allowed us to use our information as we wanted and to share it with whomever we chose. If we can replicate this concept in the digital realm, we can regain agency over what is done with our data while still availing the benefits that digital systems provide.

A verifiable credential is a cryptographically secure digital representation of the claims made by an issuer (say, a bank) about a subject (such as the financial records of a customer) that is presented in a tamper-evident format capable of being independently verified without relying on its issuer. While we may not have realised it, we deal with verifiable credentials all the time. During COVID, for example, the credentials of the digital vaccination certificates we carried could be verified using a QR code. All the contents of our DigiLocker—digital versions of our driver’s licences, PAN cards and other government documents—are verifiable credentials, as are the aircraft boarding passes we place in the DigiYatra app for smooth airport security clearance.

If banks can provide us with personal information such as our bank statements and other financial records in the form of verifiable credentials, they will no longer have to worry whether the organisations seeking access to it have actually obtained our consent to use it. By giving us custody of that information in a robust machine-readable format, it is up to us to share it with whoever we choose. At the same time, since verifiable credentials are cryptographically guaranteed not to have been tampered with, recipients can trust that their contents are authentic. This establishes a user-centric, self-custodial solution to the data sharing problem that is easily scalable across ecosystems as they digitise.

### Self-Custodial Portability

APIs made data portable for institutions. Verifiable credentials will do that for users at a fraction of the cost. If we can get every bank, hospital and telecom company to issue verifiable credentials, we can reclaim agency over our data without the need for massive back-end systems that facilitate this.

We will need legislative and regulatory support to make this possible. 

But that should not be too much to ask.