---
title: "Data Breach Notifications"
date: "2022-05-10"
tags: ["Data Governance", "Regulation"]
widgets: 
- "categories"
---

*In India, the absence of comprehensive privacy law has led to over-reliance on CERT-In Rules, 2013, for data breach guidance. Recent directions by the Ministry of Electronics and Information Technology has expanded mandatory reporting requirements, raising concerns about inundating CERT-In with trivial incidents and, as a result, hindering its ability to respond to serious breaches.*
<!--more-->

*This article was first published in The Mint. You can read the original at [this link](https://www.livemint.com/opinion/online-views/a-regulatory-overload-could-weaken-our-cyber-security-11652200600874.html).*

---

Towards the top of the list of the most challenging assignments I have had to undertake as a technology lawyer in India, is trying to explain to clients what they need to do in the event they suffer a data breach in India.

Most countries have comprehensive rules setting out the various steps that companies must follow from the moment they learn of a breach. These rules are designed to mitigate the privacy harms from a breach of personal data.

In the absence of a full-fledged privacy law in India, we have had to find answers to these questions in the unlikeliest of places.

### CERT-In Rules, 2013

In 2013, the [Indian Computer Emergency Response Team](https://cert-in.org.in/) (CERT-In) was established [under rules](https://cert-in.org.in/PDF/G.S.R_20%28E%29.pdf) issued under the Information Technology Act, 2000 to serve as a "trusted referral agency" that users could turn to in the event of a cyber attack. The role of CERT-In was to provide technical assistance in the event of a breach and as such it had no mandate to assess the privacy implications of such breaches. However, since these were the only regulations that even came close to setting out breach reporting obligations, we had no option but to turn to them for answers.

The 2013 Rules largely left it up to individual users to decide whether or not they wanted to report a cybersecurity incident to CERT-In. However, in an Annex at the end of the rules, it listed ten types of incidents that mandatorily had to be reported.

And that was where the problems began.

### Mandatory Reporting

Most incidents described in the Annex had to do with attacks on critical infrastructure - the SCADA systems central to our national energy grid, the DNS servers that routed internet traffic and other such systems. However, the Annex also required relatively benign incidents - "unauthorised access to IT systems/ data", "defacement of websites" and "spoofing and phishing attacks" - to be reported.

Now I do not, for a moment, intend to minimise the seriousness of these types of breaches - when executed well, phishing attacks are among the most effective ways by which to gain access to an IT system. However, only a very small percentage of these attacks are successful. Requiring users to mandatorily report all such incidents - every phishing attempt, every attempt to gain unauthorised access to a computer, every kid who scrawls digital graffiti on a website - is excessive and unwarranted. It places an onerous reporting burden on companies that is unnecessary considering that most IT departments are eminently capable of dealing with them.

More importantly, it risks so thoroughly inundating CERT-In with trivial incidents that they will be incapable of responding to the serious incidents when in fact they occur.

### New Directions

If the 2013 Rules were bad, late last month when the Ministry of Electronics and Information Technology (MeitY) extended the 2013 Rules by issuing a new set of [Directions](https://www.cert-in.org.in/PDF/CERT-In_Directions_70B_28.04.2022.pdf) under the Information Technology Act 2000, things got decidedly worse.

The new directions considerably expanded the list of mandatorily reportable incidents - doubling it from 10 to 20. It introduced new reporting requirements in relation to attacks on IoT devices, unauthorised access to social media accounts and, in a particularly incomprehensible regurgitation of meaningless technology buzzwords, for suspicious activities that could affect systems relating to big data, blockchain, virtual assets, robotics, 3D and 4D printing, additive manufacturing, drones, artificial intelligence and machine learning.

If that wasn't enough, companies are now required to report cyber incidents to CERT-In within 6 hours becoming aware of them - in a form that has to be downloaded from the CERT-In website as a [non-editable PDF](https://cert-in.org.in/PDF/certinirform.pdf). Even if we can find a way to live with everything else, surely it would have been more efficient to design an online form to collect this information digitally in a manner that allows the incident to be properly analysed. And acted upon.

What’s more, they are required to maintain (within the territory of India), logs of their ICT systems for a period of 180 days and ensure that their system clocks are synchronised with Network Time Protocol Servers of either the National Informatics Centre or the National Physical Laboratory. It even presumes to regulate virtual asset service providers requiring them to maintain Know Your Customer information and records of their financial transactions for a period of five years.

### Regulatory FOMO

Questions have been raised as to whether the MeitY has the legislative competence to issue directions to cover such a broad swathe of subjects - classifying all "suspicious activity" relating to drones, blockchain and artificial intelligence as cyber security incidents, regardless of their likely consequence, does seems excessive.

But even if we set that aside for a moment, what escapes me is how mandating such broad and all-encompassing reporting will help CERT-In better perform its statutory functions. Surely an organisation tasked with assisting users deal with cyber incidents should focus its resources on addressing serious cyber incidents that are likely to have an impact on the largest number of users. Instead of doing that, CERT-In seems to be encouraging companies to bury it under such a monstrous pile of cyber incident reports that it will be simply incapable of filtering out the signal from the noise.

I had [previously written](/01/march/2017/fomo-and-the-law/) about the instinct to over-legislate so that nothing slips through the regulatory net on account of unintended restraint:

> *I believe that it is this anxiety around unintended consequences of their drafting that drives lawmakers to stuff their statutes with residuary clauses—ostensibly innocuous catch-all provisions designed to cover subject matter that might have been inadvertently omitted during the drafting process.*

This tendency, that I called Regulatory FOMO or the law maker's fear of missing out - is probably the best explanation for why the new CERT-In Directions have been issued in this form.

But surely we can't allow FOMO to prevent our first line of defence against cyber attack from doing what it was created to do.
