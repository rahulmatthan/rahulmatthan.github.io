---
title: "Secondary Use of Health Data"
date: "2024-12-18"
tags: ["Health"]
widgets: 
- "categories"
---
{{< figure src="/images/secondary-use-of-health-data.jpg" width="auto" >}}

*While it is generally advisable to anonymise health data, doing so at population scale would allow us benefit from secondary usese of data. The ABDM envisages this but by additionally deploying Secure Data Environments it should be possible to augment the level of data protection.*
<!--more-->
*This article was first published in The Mint. You can read the original at [this link](https://archive.rahulmatthan.com/archive/1734515810.344806/www.livemint.com/opinion/columns/anonymized-medical-data-should-be-given-an-additional-privacy-shield-security-doctors-healthcare-records-abd-11734328192606.html).*

---

When I first saw the original [blueprint](https://abdm.gov.in:8081/uploads/ndhb_1_56ec695bc8.pdf) of the Ayushman Bharat Digital Health Mission ([ABDM](https://abdm.gov.in/)), the feature that really jumped out at me was its anonymizer module. This was the first time that a digital building block designed to de-identify personal data was being built directly into the digital workflow and I was excited by the possibilities that this offered.

Once personal data is anonymized, it is inherently more secure. In the event of a data breach, all a hacker will be able to lay his hands on is raw data completely dissociated from the person to whom it pertains. This significantly reduces the risk that the data can be used to cause harm and improves the safety of the system as a whole.

### The State of Health Data

Hospital systems rarely take the trouble to do something like this. Most of them store your personal information as plain text, allowing it to flow freely to all parts of the hospital—from the billing department and the pharmacy to diagnostic laboratories and just about any administrative function in the building—without paying heed to the fact that should there be a [breach](https://www.cm-alliance.com/cybersecurity-blog/aiims-ransomware-attack) in any of those departments, it could be misused. What’s more, given that modern hospitals often outsource these functions, patient data is, more often than not, in the hands of entities over whom the hospital has little control.

The fact is that no one in the hospital, with the exception of your doctor and attending nurses, needs to know the details of your personal medical history. This being the case, medical systems need to be redesigned so that this information is kept hidden by default and only made available to the medical professionals directly attending to you. All other functions—the purchase of medicines from the pharmacy or reports from the lab—need to be associated with an anonymous code that cannot be traced back to you, so that in the event their systems are breached, it does not expose all your personal data.

But there is another, perhaps less well appreciated, benefit. One of the ways in which we, as a country, can significantly improve our health outcomes is by unlocking the secondary use of medical data. At scale, aggregate data-sets can be highly effective in [identifying trends](https://bmcmedresmethodol.biomedcentral.com/articles/10.1186/s12874-022-01732-4), detecting [disease clusters](https://www.sciencedirect.com/science/article/pii/S0950705122009704) and developing personalized remedies. But, given that each individual element of medical data that comprises the data-set is personal, we would need the prior permission of each and every data principal in order to enable such secondary use. This, in most instances, is simply not feasible.

### Non-Personal Data

India’s data protection law only applies to digital personal data. As a result, any data that is not individually identifiable would fall outside the ambit of the law. What this means is that once we anonymize the personal data in our control, the obligation to seek the consent of a data principal before it is processed falls away. In other words, all it would take to unlock the full range of secondary uses of medical data is the effective conversion of all that personal medical information into [non-personal data](https://prsindia.org/policy/report-summaries/non-personal-data-governance-framework).

Unfortunately, anonymization has a poor reputation in privacy circles as an effective means of privacy protection. Nearly two decades ago, shortly after Governor William Weld of Massachusetts went on record extolling the virtues of anonymization, Harvard professor Latanya Sweeney [dramatically demonstrated](https://ischoolonline.berkeley.edu/blog/anonymous-data/) how his medical records could be identified within that anonymized database. After other similar experiments, privacy absolutists now refuse to recognize anonymization as an effective means of protecting personal data.

I am the first to admit that anonymization is not and will probably never be perfect. What’s more, as anonymized data-sets are layered one on top of the other, it becomes easier to identify the unique intersections between them—and the individuals they relate to. Even so, I would argue that it is better to anonymize your data in complex hospital systems rather than allow it to exist within them as plain text. What we may need to do, in addition, is apply some technical measure to augment the anonymization applied to a medical record in order to ensure adequate data protection.

### Secure Data Environments

One way to do that might be to use certified Secure Data Environments (SDEs).

The way in which we derive inferences from data today is by aggregating data into a data lake and then running models and algorithms on that data. At present, this requires us to transfer data from the places where they were collected into the hands of the data analysts making the inference.

SDEs flips that paradigm around. Instead of moving data to the algorithm, they make it possible to ‘[take the model to the data](https://understandingpatientdata.org.uk/secure-data-environments).’ Once the data-sets in question have been placed within the SDE, model builders are permitted to engage with the SDE on the condition that all they can do is extract the inferences they need without ever having access to the underlying data itself. This augments the protection offered by data anonymization.

This approach is being increasingly adopted in countries around the world. Europe’s [health data spaces](https://understandingpatientdata.org.uk/secure-data-environments) have been built around this idea, as has the [UK’s NHS digitalisation](https://understandingpatientdata.org.uk/secure-data-environments). India’s ABDM has already demonstrated far-sighted vision in developing the anonymizer module as a key element of the country’s digital stack. It now needs to take this one step further by enabling interoperable SDEs that will allow us to unlock the benefits that will come from enabling the secondary use of data.