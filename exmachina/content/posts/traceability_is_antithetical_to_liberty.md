---
title: "Traceability is Antithetical to Liberty"
date: "2021-03-02"
tags: ["Encryption"]
widgets: 
- "categories"
---

*The Indian Intermediary Guidelines require messaging services to be able to identify the first originator of information. For those services that are end-to-end encrypted complying with this obligation will mean that they can no longer guarantee the anonymity of the parties. By asking message originators to be identified, it requires every single message to be tracked. In trying to identify a few criminals, it makes criminals of us all.*
<!--more-->

*This article was first published in The Mint. You can read the original at [this link](https://www.livemint.com/opinion/columns/lets-not-snatch-liberty-away-by-busting-end-to-end-encryption-11614700491427.html).*

---

End-to-end encryption has [featured frequently](/26/february/2020/the-trade-off-between-privacy-and-content-traceability/) in this column. I have argued that the anonymity it guarantees is essential to our notions of privacy and individual liberty because it gives us the ability to hold personal views and express them freely in private. This freedom to speak without fear is central to the notion of privacy. In the words of Justice Sanjay Kishen Kaul, it “is nothing but a form of dignity, which itself is a subset of liberty.”

### The Dichotomy

But just as anonymity can guarantee privacy, it can also conceal illegality. It makes it harder for law enforcement to access evidence of crimes committed or which are about to be perpetrated. This is the dichotomy inherent in our use of this technology. Encryption secures the liberty and dignity of the individual, but it also allows crimes to be planned and criminals to evade detection.

Can the prevention of the latter ever be worth forsaking the former?

In an earlier article, I had described this dilemma in metaphorical terms. I likened encryption to the mythical Ring of Gyges that gave its wearer invisibility and the consequent freedom to do whatever s/he wanted without the risk of detection. I argued, citing Socrates, that just because a given technology makes it possible for us to operate undetected does not mean that we will embark on a crime spree. We adhere to the social contract not out of the fear of being caught, but because we know that if we don’t, society itself will quickly unravel. Even behind a veil of anonymity, most people behave responsibly—usually no differently than when being observed.

More importantly, [I argued](28/august/2019/end-to-end-encryption-must-be-retained-at-all-cost/), the shield of anonymity gives those who are often silenced a voice:

> *It gives confidence to people whose voices would otherwise have been suppressed, including minorities and marginalized sections of society, allowing them to express their views publicly without fear of being targeted. It gives whistle-blowers, who otherwise face the risk of organizational recrimination, the courage to shine light on information that their employers would otherwise keep suppressed to serve their own ends. It enables political protest, ensuring that views, no matter how inconvenient they are to the government, can be expressed without fear of reprisal.*

This is why we must lean towards preserving the liberty and dignity that end-to-end encryption guarantees, instead of allowing our regulatory direction to be guided by the criminality of a few.

### The New Intermediary Rules

Last week, the Indian government notified its [Information Technology (Guidelines for Intermediaries and Digital Media Ethics Code) Rules, 2021](https://static.pib.gov.in/WriteReadData/specificdocs/documents/2021/feb/doc202122521.pdf), making it clear that it had other priorities. The new rules require traceability of content, effectively destroying the anonymity built into the design of modern messaging platforms, and with that, all expectations of privacy in communication. While the provisions are only supposed to be used to investigate offences, I don’t think the government has fully understood all the unintended consequences of its actions.

To fully appreciate what companies will have to do to comply with the new requirements we need to take a closer look at what they say. Rule 4(2) of the Intermediary Guidelines states that:

> *A significant social media intermediary providing services primarily in the nature of messaging shall enable the identification of the first originator of the information on its computer resource as may be required by a judicial order passed by a court of competent jurisdiction or an order passed under section 69 by the Competent Authority as per the Information Technology (Procedure and Safeguards for interception, monitoring and decryption of information) Rules, 2009, which shall be supported with a copy of such information in electronic form:*

The choice of the words “*enable the identification of the first originator of the information*” is significant. It is a tacit recognition of the fact that no messaging platform currently does this and a call for them to put in place technology that will allow this sort of traceability to be implemented.

The only way I know, to enable the identification of the first originator of the message, is to tag each message with a unique identifier and associate it with its creator — so that no mater how many times it is subsequently forwarded the author is always identifiable. One reason why no-one does this is because of the sheer scale of technological challenge this poses. Over 100 billion messages pass through the WhatsApp servers every single day. Identifying who the first ordinator of a message that was created in that same day would, in itself, be a mammoth task. But in order to do what the Indian government wants, messaging companies will need to create a system that tracks every message that was ever created and make it so that even years later, the first originator can be tracked.

As much as this is a tech challenge, there is a second, far more important consideration. If every single message that has ever been sent is made identifiable and traceable to its creator it will create a panopticon of intimate information, the likes of which has never existed before. Even if only a minuscule fraction of these messages are ever requested by the government, the fact that the message history of every user is available for the asking constitutes, in my view, an egregious violation of person privacy that is not only utterly disproportionate to the objective it is supposed to achieve, but will also ultimately fail to achieve that end.

In an attempt to reassure users that the inviolability of the underlying message (one of the basic tenets of end-to-end encryption) will not be disturbed, the proviso to Rule 4(2) states that there will be no requirement to disclose either “the contents of any electronic message” or “any other information related to the first originator” or any other user. It is not entirely clear what comfort this provides given that the law enforcement authority seeking the identification of the first originator must, by definition, already have access to the message it is looking to trace. Stating that the messaging intermediary does not need to provide that information is plain disingenuous.

### The Guarantee of Anonymity

What concerns me most is that this policy direction represents an imperfect understanding of not only the technological underpinnings of end-to-end encryption but also the guarantee of anonymity itself. A message can only be truly anonymous if information about both the content as well as the sender are obscured from the sight of all but the recipient. Disclosure of either one diminishes the guarantee of anonymity—and, as a consequence, the dignity that Justice Kaul called an essential sub-set of liberty. This is why the facile assurance that traceability will not result in disclosure of the underlying message is so worrying.

To ensure anonymity, chat services bake end-to-end encryption into the heart of their applications. Messages are encrypted before they leave the user’s device and it is only after the data packet has been securely delivered to the device of its intended recipient that it is decrypted to reveal its contents.

To enable the traceability required by the new Intermediary Guidelines, messaging services will need to create unique identifiers for every message so that they can be tracked from user to user as they get forwarded. This will weaken the anonymity guarantee not just for those messages whose originators the government wants to identify, but for every single message that passes through the system. We need to ask ourselves whether the ability to identify a few miscreants is worth stripping over 500 million Indian users of their constitutionally guaranteed protections.

### Old Wine. New Bottle.

This is not the first time the government has tried to do something like this. When Aadhaar was required to be mandatorily linked to bank accounts, the government argued that this was necessary to meet the legitimate state aim of curbing money-laundering and black money. This approach was challenged at the Supreme Court, which said that “[u]nder the garb of prevention of money laundering or black money, there cannot be such a sweeping provision which targets every resident of the country as a suspicious person. Presumption of criminality is treated as disproportionate and arbitrary.”

The Intermediary Guidelines decants this old wine into new bottles. By asking message originators to be identified, it requires every single message to be tracked. In trying to identify a few criminals, it makes criminals of us all.

The last time the government tried something like this, the Supreme Court made short shrift of its arguments.

I have no doubt it will do so again.
