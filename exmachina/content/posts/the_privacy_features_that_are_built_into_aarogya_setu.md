---
title: "The privacy features that are built into Aarogya Setu"
date: "2020-04-08"
tags: ["Privacy"]
widgets: 
- "categories"
---

*The Indian government's Aarogya Setu app aims to slow the spread of COVID-19 by tracking and testing those who have come into contact with infected individuals. Despite concerns over personal privacy, the app incorporates privacy protections such as dissociating personal data, retaining data on the device by default, and strict data retention policies.*
<!--more-->
*This article was first published in The Mint. You can read the original at [this link](https://www.livemint.com/opinion/columns/the-privacy-features-that-are-built-into-aarogya-setu-11586279239882.html).*

---

The biggest challenge in dealing with covid-19 is that infected people are contagious long before they are visibly symptomatic. This means that by the time you know for sure that you are ill, you would have already infected a number of people. These people, in turn, would have infected others, and so on in an outward ripple. If we can quickly track and test everyone who an infected patient came in contact with and isolate them before they transmit the disease, we have a chance to slow its spread.

Last week, the Indian government launched an app called Aarogya Setu to try and use data science to solve this problem. The app is already wildly popular, having been downloaded over 10 million times at the time of writing this. But in the privacy circles I inhabit, it’s been met with cynical scepticism. This is hardly surprising, since its stated purpose—to identify everyone you might have contacted so that they can be tested if you contract covid-19—clearly has the potential to violate personal privacy.

Over the past two weeks, I have been advising the government on how best to design Aarogya Setu so that it can achieve its stated objective while safeguarding user privacy. Given that much of what the app needs to do to achieve its purpose could also affect personal privacy, there were many unavoidable trade-offs that had to be made. But even so, the app has incorporated in its design a number of important privacy protections. Given the widespread concern, I thought I’d use this week’s column to highlight the features of the app that give me comfort.

Aarogya Setu was designed on the assumption that if two mobile phones are within Bluetooth range of each other, their owners are probably close enough to transmit the virus. When two phones on which the app has been installed come close to each other, the app gets activated and both phones quietly exchange information about where the contact happened, with whom, and for what duration. If you subsequently test positive for the virus, details of all those you came in contact with over the past 30 days and who have a high likelihood of having been infected by you are sent to the Union health ministry so that they can be tested on priority.

So what exactly was done to protect the personal privacy of Aarogya Setu users?

To begin with, the app dissociates you from your data very early on during the on-boarding process. All personally identifiable information submitted at registration—your name, age, sex, telephone number—is securely uploaded to its server and hashed with a unique, randomly generated device ID number (DiD). This DiD is your identifier for all further app interactions. When you come in contact with someone, it is this DiD that is sent to his or her device, not your name and phone number. When the app needs to calculate your probability of being infected, it is this DiD that is uploaded to the server along with your contact history. It is only when your risk of infection is so high that the government needs to tell you to get tested that the DiD is reconnected to your personal information.

Secondly, data collected by the app is designed to remain, by default, on your device. In order to work, the app needs to collect location information and contact histories. All this information is stored in the app and on your device. It is only if you are unwell with the virus and at risk of infecting others that your GPS location history as well as the details of everyone you came in contact with are sent to the cloud.

Finally, the app has strict data retention policies that ensure all information collected is purged after a specified duration. Contact and location information on the app is deleted on a 30-day rolling cycle, with similar data retention rules applying to information on the cloud. What this means is that even though the app collects a lot of information, all that data is destroyed once it’s no longer required.

At present, use of the app is entirely voluntary. Those who do not want Aarogya Setu to collect or share their information can simply choose not to download it. Even if you have already installed the app on your device, you can at any time turn off location services or simply uninstall it. Giving users such choice is critical to personal privacy.

Aarogya Setu was designed to serve the legitimate state purpose of trying to stop the spread of a deadly pandemic. It incorporates the well-established privacy principles of use limitation, purpose limitation, data minimization, its retention and security. To the extent that it impinges on personal privacy, it does so reasonably and with due adherence to accepted privacy principles.

In terms of what could be improved, I would like to see the app released as open source code so that independent app developers could examine it and satisfy themselves with respect to how it works. If, in the process, they discover mistakes or bits of code that don’t function as advertised, they could let the Indian government know, so that the particular piece of code can be fixed, thus improving overall outcomes.

Like all apps, Aarogya Setu has detailed terms of service and an openly stated privacy policy. Those knowledgeable about such matters will notice that its privacy policy is explicit, exhaustively covering all information collected by the app and everything that will be done with it.

I encourage you to read it for yourself, and if you notice anything amiss, or missing, please point it out.

