---
title: "The utter meaninglessness of anonymizing telecom data sets"
date: "2019-01-02"
tags: ["Privacy"]
widgets: 
- "categories"
---

*Mobile phones provide opportunities to obtain real-time movement information, aiding in crisis management like tracking disease spread. However, the balance between utilizing this data and ensuring privacy is complex. Current anonymization methods are inadequate, and conscientious use obligations may be a more effective approach to protect privacy.*
<!--more-->
*This article was first published in The Mint. You can read the original at [this link](https://www.livemint.com/Opinion/h9A1vfAHPgSKZCMEvmqO7M/Opinion--The-utter-meaninglessness-of-anonymizing-telecom-d.html).*

---

The deep penetration of mobile phones has thrown up unique opportunities to solve some of the hardest challenges faced by countries in crisis. Given the number of people who now always carry a mobile phone on their person, we have, for the first time, a means to obtain granular, real-time movement information at a national scale.

There are many uses for this sort of information. In the aftermath of the 2010 earthquake in Haiti, SIM card position data was used to build migration trends to anticipate the spread of cholera. By tracking movements as people left areas where a cholera epidemic broke out following the earthquake, aid workers were able to better predict new areas that were at risk. This sort of fine-tuned analysis is invaluable in understanding the propagation of infectious diseases and halting their spread.

While there can be no argument about the usefulness of mobile data, it is clear that without stringent safeguards, the disclosure of this data could have catastrophic implications. Our mobile phones contain personal information that can both be directly extracted and indirectly inferred. This information can reveal details of our personal habits and preferences, our likes and dislikes and our current financial situation. Unless we commit to dealing responsibly with mobile data sets, even when they are being released for laudable purposes, any disclosure could have irreversible privacy consequences.

Ethical researchers attempt to strike the balance between these conflicting objectives by using anonymized data. The protocol most frequently adopted is the k-anonymity algorithm that uses various generalization and suppression techniques to capture the essential properties of the data set without distorting it. While this algorithm might have been adequate in 1998 when it was introduced, its anonymization protocols are ineffective today. A recent study has shown that all it takes is four distinct data points to accurately identify close to 95% of the people out of a database of 1.5 million that had been de-identified using the algorithm.

It is this conundrum that has been reflected upon and dealt with, albeit superficially, by the [[[[Justice Srikrishna]] Committee]]. They have entirely exempted anonymized data from the rigours of the proposed law, allowing, by necessary implication, this sort of data to be freely used for the sorts of research purposes I have described earlier. However, by defining the term “anonymization" to mean the “irreversible process of transforming or converting personal data to a form in which a data principal cannot be identified", they have ensured that only data sets that can never be re-identified are exempted. As even the most widely used anonymization method allows re-identification, this is somewhat of a meaningless exemption.

In this context, a recent article in Nature magazine has proposed a model for the conscientious use of mobile phone data sets suggesting four methods by which this can be achieved. While no one method is entirely foolproof, any one of them could, depending on the context, be used to arrive at an optimum balance.

Under the first option, a small data set is transformed by the data fiduciary, using properly salted hashes and limited spatial and temporal data coarsening to prevent re-identification. The transformed data is then released under strict data use agreements that prevent further disclosure. This model is only effective in small groups of trusted third parties when used for exploratory purposes. The second method involves the release of a set of pre-computed indicators derived from the mobile data set and aggregated across individuals. This removes access to individual data but does nothing to address the issue of group privacy.

While the first two models involved the release of transformed data to the third party, the next two apply concepts of privacy-through-security, ensuring that the data always remains under the control of the data fiduciary. The third method is remote access that allows users supervised access to the data set through special application programming interfaces (APIs) that ensure that individual-level information never leaves the server. While this allows the data to be less aggressively transformed, making it more useful for analysis, even this does little to protect against the targeted re-identification of individuals.

The final and most aggressively contained model allows only question-and-answer access to the data set. Questions are asked and answers provided using pseudonymized data. This effectively prevents contact with individual-level data. However, even this method could be compromised using a series of cleverly posed questions whose answers could be assembled like a jigsaw to generate useful personal data.

All these models offer different ways to generate anonymized information. However, none of them guarantee that the individuals in the data set will not be re-identified. This is the reality of anonymization and the reason why the exemption under the proposed Personal Data Protection Bill is meaningless. A more useful approach might have been to impose conscientious use obligations on data fiduciaries as well as on the third parties to whom they transfer data. This would have forced fiduciaries to carefully select the most appropriate method, given the specific circumstances, and dynamically determine the correct balance that needs to be struck between optimal data use and ensuring privacy.

