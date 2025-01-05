---
title: "Aarogya Setu and the value of syndromic surveillance"
date: "2020-05-13"
tags: ["Health"]
widgets: 
- "categories"
---

*The 2001 anthrax attacks led to the development of syndromic surveillance, a method for early disease detection using aggregated data. This technique, exemplified by India's Aarogya Setu app during COVID-19, analyzes symptom data and location history to predict and manage outbreaks, balancing public health benefits with privacy concerns.*
<!--more-->
*This article was first published in The Mint. You can read the original at [this link](https://www.livemint.com/opinion/columns/aarogya-setu-and-the-value-of-syndromic-surveillance-11589304017285.html).*

---

In the weeks following the terrorist attacks of 11 September 2001 in the US, letters containing anthrax spores were mailed to several media offices and legislators in that country. The 2001 anthrax attacks, as they came to be called, killed five people and infected 17 others. But perhaps the most significant long-term consequence of these attacks was the creation of a system for early detection of the spread of a deadly disease that has since come to be used more widely in the context of infectious diseases.

The term syndromic surveillance is used to describe methods of detecting population health indicators that are discernible before confirmed diagnoses can be made. Its purpose is to assess the size, spread and velocity of a disease outbreak, and it works by identifying illness clusters by collecting and analysing aggregate data. For instance, people who have the flu often purchase tissues, orange juice, and over-the-counter remedies for colds and allergies. While these data points are not particularly useful by themselves or in relation to a single individual, if aggregated and correlated geographically, they can generate geo-spatial clusters that might be indicative of an outbreak. Given the widespread use of data in our everyday life today, we can now collect this data at scale giving us an unprecedented ability to detect infectious diseases early.

On 4 March 2020, Farzad Mostashari, former assistant commissioner of the New York City department of health, noticed an unusual drop in the number of flu cases in the city and a significant rise in the number of patients coming into its emergency rooms. By that time, there were already a few cases of covid-19 in the US, but they were all, for the most part, limited to the west coast. Based on the data trends he was observing, Mostashari was convinced that the virus was already in New York City and that its health systems were about to be subject to 20 times the burden of illness they were designed to support. No one heeded his warning, and by the time governor Andrew Cuomo ordered a lockdown on 20 March 2020, it was already too late.

Most of the technology solutions developed in connection with covid-19 have been designed to break the chain of infection. Electronic quarantine apps keep the infected confined to a defined geographical location, while contact-tracing detects those who might have been infected even though they are visibly asymptomatic. Very few technology solutions are using data science techniques to detect disease clusters early.

Earlier this week, the government of India released some remarkable statistics on how data collected by its Aarogya Setu app was being put to use for this purpose. By analysing the location history of the infected and aggregate self-declared symptoms of users collected via the self-assessment feature on the app, the team has been able to forecast over 650 hotspots across the country at a sub-post office level.

Of those, 130 hotspots predicted by the app were officially declared as such by the Union health ministry three to 17 days after they were first identified by the [[Aarogya Setu]] team. The team is calling this technique “syndromic mapping", since it builds on the concept of syndromic surveillance by accurately crowdsourcing data inputs.

The effect this has in real terms is that it allows the government to quickly deploy resources in regions where outbreaks are likely to occur.

When the app was released, there were questions about the utility of its self assessment feature. Many said it was useless because people would be inclined to lie about their symptoms or would describe them inaccurately. However, this sort of imperfection is implicit in all applications of data science. In his seminal paper on the subject, Ken Mandl wrote “…the very earliest detection will likely come from statistical analysis of noisy data—for example, over-the-counter sales of medications—rather than from highly accurate but late data such as microbiology culture results. Therefore, a potential data source should be judged by the combination of its data quality and timeliness as well as knowledge of the cost of false alarms versus the cost of delays in triggering true alarms for a specific disease threat."

One of the challenges of syndromic mapping is balancing the benefits it provides with the privacy of the users whose data it uses. It is important to ensure that the analysis takes place on aggregate anonymized data, and that affected individuals are only reidentified specifically if this is absolutely necessary to provide them medical support, which may happen if an analysis indicates that an outbreak is about to occur.

Aarogya Setu has kept these concerns front and centre in its design. At registration, users are allotted a unique random direct inward dialling (DID) number, to which all self-assessment data is linked before it is uploaded to government servers. It is therefore not personally identifiable. In addition, syndromic mapping takes place on grids that range from 200m to 3km in size so that, at all times, the details of at least 50 people are mixed in each grid cell, making it practically impossible to identify individual data.

It seems that the Aarogya Setu team has managed to extract the correct signals from all the noisy data that its self-assessment tool generates, and has done so with due attention to principles of personal privacy. Tools like this, if deployed widely, will likely have benefits beyond those demonstrated during the current pandemic.

