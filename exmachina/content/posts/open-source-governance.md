---
title: "Open Source Governance"
date: "2024-05-08"
tags: ["regulation"]
widgets: ["categories"]
---

{{< figure src="/images/open-source-governance.jpg" width="auto" >}}

_There is a strange aversion in government circles to the use of open source software. I am no entirely sure where it comes from but I can try and debunk some of the misgivings they have. In most instances, releasing code as open source is actually a good idea._

<!--more-->

_This article was first published in The Mint. You can read the original at [_this link_](https://www.livemint.com/opinion/online-views/yes-releasing-the-evm-source-code-could-improve-our-polling-system-s-security-11715020084947.html)._

---

This year, as with nearly every recent election, questions were raised about the functioning of electronic voting machines (EVMs). While the Supreme Court upheld their use in elections, when asked if the source code of EVM machines could be released for open source use, it tersely [shut down that line of argument](https://indianexpress.com/article/india/supreme-court-vvpat-order-evm-9287698/), pointing out that if the source code is released, it would be misused.

While I have no desire to wade into the debate over whether and how electronic voting machines should be used, I do want to unpack the Supreme Court’s somewhat offhand rejection of open source. This is a line of thinking I’ve come up against time and again in my dealings with the government, and, for the life of me, I cannot understand where it comes from.

### Secrecy is not Security

As far as I can tell, there is a belief among the powers-that-be that source code is some sort of an access pass that gives anyone who gets hold of it the power to do whatever they want with the digital systems that have been built with it. All it will take to compromise a digital system, they seem to believe, is access to its source code—which is why there is such a concerted effort in government circles to keep it a secret.

As anyone who builds digital systems will tell you, this is simply not true. Source code merely explains how a system works. But just because you know how it works doesn’t mean you will be able to access it, much less get it to do what you want.

Take [Signal](https://signal.org/download/), for example, an open-source messaging app that ensures that messages sent to anyone using its protocol are encrypted end-to-end. Even though its source code is publicly accessible, without access to the private decryption keys specific to that messaging session, it is impossible to decrypt the messages. With perfect forward-secrecy implemented, each session uses temporary encryption keys that are continually updated, which means that even if a key is compromised, it cannot be used to decrypt previous or future messages.

### Security Advantage

For a malicious actor to [wreak harm](https://www.globalknowledge.com/us-en/resources/resource-library/articles/the-5-phases-of-hacking-maintaining-access/), he would need administrative access to a system. He would have to get deep enough into its workings to be able to rewrite the ways in which it functions, before he can twist it to do his bidding. Mere knowledge of the source code will not allow him to do that. At best, it will allow him to exploit any overlooked vulnerabilities—and that too, only until they are discovered.

This, counter-intuitively, is another [reason](https://devops.com/is-open-source-more-secure-than-closed-source/) why we should be releasing software as open source in the first place. The reason open-source software is believed to be more secure in the long-run than its proprietary counterparts is that a [broader community of developers](https://openssf.org/blog/2023/09/06/strengthening-open-source-software-best-practices-for-enhanced-security/), security experts and researchers is able to see the code. Once there is a critical mass of developers who are invested in trying to identify vulnerabilities in the code, they will be spotted quicker than would have been the case had it remained proprietary. 

Given that this community is both diverse and agile, we can identify the problem and find solutions for it far sooner than would otherwise have been possible. It is precisely because the Signal protocol is open-source that it can be audited and improved upon by a global community of security experts  who take pains to ensure that the cryptographic methods employed are among the best in class for securing private communication.

### Open Source is Everywhere

Many of the systems that we depend on everyday use open-source software. Apache Web Servers power [a third of the internet](https://w3techs.com/technologies/details/ws-apache), while the Linux operating system (on which the Android operating system was built) powers the [vast majority of smartphones](https://techjury.net/blog/android-market-share/) in the world. It is telling that even though both of them are open source software, the world is none the worse for the fact that everyone knows what their code contains. When the [Heartbleed bug](https://en.wikipedia.org/wiki/Heartbleed) threatened to compromise the OpenSSL libraries that are central to the security of communications over the internet, it was the agility of the open-source community that patched the vulnerability before it could cause too much damage.

We need to learn from these examples and apply similar logic when it comes to the source code that powers our government systems. We need to understand that simply because the source code of a given technology solution has been released as open source, it does not mean that the system itself is any more likely to be compromised. To the contrary, having multiple eyes on the code will help shore up our defences against attacks and bring to bear the entire collaborative might of the open-source community. When the code of our digital systems are available for everyone to scrutinise, we will be able to see for ourselves how these systems function and what they do with the data they collect. And that will restore public faith in how these systems have been designed.

### Open Standards

In 2010, the Indian government released the [National Open Standards Policy](https://www.egovstandards.gov.in/), a commitment to use [open source in governance](https://www.egovstandards.gov.in/sites/default/files/2021-07/Framework%20for%20Adoption%20of%20Open%20Source%20Software%20in%20e-Governance%20Systems.pdf). This was the culmination of a three-year effort to get it to join the ranks of governments committed to using open source.

Despite the [initial fanfare](https://opensource.com/government/10/11/open-standards-policy-india-long-successful-journey), not much progress has been made. A few standards have been notified, but there has been negligible progress on the ground. Even so, considering the government’s express support for the concept, the last thing I thought I’d see was a dismissive disposition towards the very notion of open source from the highest court in the land.