---
title: "Controlling AI Export"
date: "2024-05-22"
tags: ["artificial intelligence"]
widgets: ["categories"]
---

{{< figure src="/images/controlling-ai-export.jpg" width="auto" >}}

_There has been growing concerns around the risks of open source AI. In the recent past these have begun to manifest themselves in the form of export restrictions on open source AI models - that could have a deleterious effect on India's AI strategy._

<!--more-->

_This article was first published in The Mint. You can read the original at [_this link_](https://www.livemint.com/opinion/online-views/placing-policy-restrictions-on-open-source-ai-models-will-not-help-anyone-11716211498831.html). If you would like to receive these articles in your inbox every week please consider subscribing by clicking on this [link](https://paragraph.xyz/@exmachina)._

---

In the late 1980s, concerns began to arise about the privacy of email communication. Though not yet as ubiquitous as it was destined to become, email had already become a common enough means of exchanging messages that people had begun to worry about what would happen if they were intercepted. It was this anxiety that [Phil Zimmermann](https://philzimmermann.com/EN/background/index.html) set out to address when he created [Pretty Good Privacy](https://en.wikipedia.org/wiki/Pretty_Good_Privacy) (PGP), a software program designed to make online communications more secure. 

Initially, PGP was just a command-line program to encrypt messages. As it gained popularity, it was adapted to integrate with various email clients. I remember installing PGP on [Thunderbird](https://www.thunderbird.net/en-US/), even though at the time it seemed like a futile exercise, since none of the people I communicated with had it installed on their computers.

### Export Restrictions on Encryption

Almost from the moment PGP emerged, it faced a spate of [legal challenges](https://www.wired.com/1993/06/just-when-you-thought-it-was-safe-to-encrypt-again/). Governments have long been uneasy about encryption technology getting into the wrong hands, fearing that if it ends up with a hostile adversary, national security would be jeopardized. This is why US export control regulations have always prohibited the export of encryption technologies. Since PGP could be downloaded anywhere from the internet, export curbs designed for physical products were powerless in keeping it within US borders. And so the US Department of Justice launched an investigation into PGP. 

While concerns about encryption may have been reasonable in earlier technological contexts, since PGP was built on the [RSA algorithm](https://en.wikipedia.org/wiki/RSA_(cryptosystem)), messages remained confidential as long as the private keys of participants stayed secret. It made no difference that the underlying technology was publicly known. This distinction was lost on the US government, which argued that PGP should be treated as a “munition" under the rules, as it could be used to encrypt sensitive military information. Though the case was [eventually withdrawn](https://www.cnet.com/tech/services-and-software/feds-drop-charges-in-encryption-case/), and over time there has been a significant relaxation in the US government’s stance on encryption regulation, we’ll never know the cost the world has paid on account of this delay. 

### AI Revolution

Today, we stand at the threshold of an epochal technology revolution. Artificial intelligence (AI) is poised to disrupt every aspect of human knowledge and become the world’s first general-purpose technology since the commercialization of electricity. Today, it is the [large language models](https://en.wikipedia.org/wiki/Large_language_model) (LLMs) of US Big Tech companies that are the visible face of the AI revolution. 

These systems can be accessed in a variety of user-friendly ways, such as through chat interfaces and application program interfaces (API), or directly be integrated into other services that we regularly use. While this is ideal for lay users without technical expertise, developers building AI use-cases prefer working with open-source alternatives. Not only are these models free to use, they are almost always accompanied by model weights and documentation, giving developers the flexibility they need to get things done. 

### Concerns Around Open Source AI

Over the past few months, however, voices of opposition have begun to be raised in the US against the very idea of open-source AI. One of the concerns seems to be in relation to safety. Opponents of open-source AI models argue that it is impossible to place guard-rails on models if they are released as open source, which would make them fundamentally unsafe.

Then there are geopolitical concerns. If future wars will be won by powers that have AI superiority, distributing AI models as open source might erode the hard-won competitive advantage of the US. While this is largely a function of the [extreme Sinophobia](https://epaper.chinadaily.com.cn/a/202403/29/WS6606029ca310df4030f507be.html) that has gripped the US, draft legislation is already underway to make it easy for the US administration to [impose export controls on AI models](https://indianexpress.com/article/technology/artificial-intelligence/us-lawmakers-unveil-bill-to-make-it-easier-to-restrict-exports-of-ai-models-9320196/#:~:text=A%20bipartisan%20group%20of%20lawmakers,technology%20against%20foreign%20bad%20actors). 

In my view, both these fears are overblown. LLMs today are so small that they can be copied on a USB drive and run on an ordinary laptop (all the research for this article and some part of the text was generated on the 8-billion-parameter version of [Llama3](https://llama.meta.com/llama3/) that I am running locally on my 2021 MacBook Pro). Given that models are so small that they can be smuggled out in thumb-sized storage devices, attempting to impose export restrictions would amount to bolting the stable door after the horse has bolted.

As for model safety, this, in many instances, is a case of the pot calling the kettle black. Proprietary models, despite all the reinforcement learning and constraint training they have been subject to, hardly have an [unblemished track record of safety](https://www.theregister.com/2023/05/29/ai_in_brief/). On the other hand, since open-source models come with weights and the documentation, any bugs that surface can be dealt with by the community—and that too, often quicker and more efficiently than would be possible in large slow-moving corporations. 

### India's AI Risk

The US proposal to impose restrictions on the export of open-source AI is reminiscent of its restrictions on PGP. While this might be a reaction to the Chinese geopolitical threat, its effects, like in the case of PGP, will be felt by countries that depend on these base models to develop their own bespoke AI solutions. 

I am especially concerned for India. Much of our AI strategy is based on pre-training and fine-tuning open-source AI models to produce solutions that can address the diverse needs of this country. If we are suddenly denied access to them, it will put our ambitions of being the AI use-case capital of the world in serious jeopardy.