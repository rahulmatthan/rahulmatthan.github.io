---
title: "Contract as Code"
date: "2020-11-10"
tags: ["Data Governance"]
widgets: 
- "categories"
---

*Lawrence Lessig was the first person to come up wtih the idea of regulating the Internet through code, suggesting that restrictions on digital platforms could be implemented through code. This approach, that could streamline complex, multi-party transactions, make them scalable and reduce the risk of non-performance is an idea whose time has come.*
<!--more-->
*This article was first published in The Mint. You can read the original at [this link](https://www.livemint.com/opinion/columns/code-as-contract-the-future-of-covenants-in-cyberspace-11605020727542.html).*

---

Over 20 years ago, Lawrence Lessig published a book called Code and Other Laws of Cyberspace. At the time, it was one of the very few books that dealt with the challenge of regulating the internet arguing that we should not apply online, the rules that we use to regulate the offline world. It warned, presciently, that if the governments of the world did not shape the architecture of the Internet, tech companies would do so - to their exclusive benefit.

### Governing the Internet through Code

We tend to think of regulation as a mixture of written laws, judicial precedents and human enforcement. But that is not the only way to regulate human behaviour. It was Lessig's belief that it would be far more efficient to regulate the Internet through the code that defines it - by embedding the rules we want to govern its use directly into its architecture.

This notion, that the architecture of digital platforms is malleable and capable of being designed so that it defines user behaviour, is a powerful one. It suggests that rather than regulating actions and outcomes, what we really need to do is design the architecture of the internet so that it can achieve the intended regulatory outcomes. For instance, if there is a regulatory intent to enforce copyright law, anti-circumvention technology could be built right into the architecture of the internet making it impossible for anyone to willy-nilly re-use copyrighted works. Granted that this would also make it impossible to invoke fair use - an equally essential component of modern copyright law - but provided that regulators are able to find a way to balance these competing objectives, the fact that the architecture of the internet is built from code makes it possible to embed regulation directly into it.

This was a concept way ahead of its time. Not only were governments unable to make anything of it since - to the contrary, just as Lessig feared, big tech capitalised on this regulatory inaction and went ahead and built for themselves an architecture of their choosing.

### Multi-Party Platforms

For the next 20 years, I had little occasion to think about this framework.

And then earlier this year, as I was mulling over the appropriate legal framework for a digital vendor financing platform I was advising on, it occurred to me that if we borrowed a few pages from Lessig's book, we might be able to construct an innovative alternate model to govern the various obligations and responsibilities of participants on multi-party platforms.

The contractual frameworks we currently apply to digital platforms are hopelessly archaic. They are, for the most part, dense legal documents that everyone assents to - but no-one actually reads. They tend to apply traditional concepts of obligation and liability to digital services even though the services themselves function in ways that render many of these obligations utterly meaningless. As incongruous as these frameworks are in the context of users on simple e-commerce websites, they become wholly unworkable when used to describe the roles, responsibilities and obligations of the many participants operating on the larger and more complex multi-party platforms.

If we want to make digital platforms truly effective at scale we need to fundamentally re-think the way in which we design the contractual frameworks we use to govern them. In order to do that, we need to start to think of contract as code.

### Platform Contracts

If one were to design a multi-party platform governance in the traditional way it would have called for a series of interlocking framework agreements that every participant on the platform would have had to sign with every other party so that everyone was legally bound to everyone else by all these different contracts. It would have required consequences of non-performance to be specified along with appropriate consequences and remedies. However, in the context of large scale platforms that we hope to one day scale to hundreds of thousands of participants, this approach rapidly becomes infeasible.

Luckily there are other ways to think about this problem.

Digital services are algorithms that describe a sequence of actions which, when properly performed, inevitably produce a given result. In a more general sense, contracts are also algorithms that describe the manner in which the obligations of various parties interplay with each other and specify the sequence in which they are to be performed. However, unlike contracts in the non-digital context, there is no need to prescribe consequences for a failure to perform a digital contract since it can be designed to automatically carry out the obligations of multiple different parties in the sequence of steps prescribed in the algorithm.

Since both the contract and the services they seek to regulate are algorithms, it is actually relatively trivial to design a construct in which the obligations described by the one could be embedded into the sequence of actions performed by the other. In other words - in the context of a digital platform we can easily describe contractual obligations in terms of code so that performance can hard-wired into the platform itself.

### How Would You Do This

Let's take the example of a platform for invoice-backed unsecured lending. While the entire platform revolves around the loan that the borrower takes from the lender, several other parties will be involved in each transaction that takes place on the platform. This could include the buyer of services whose payment was going to be used to repay the loan; the escrow agent to whom the payment received from the buyer is transferred so that it can either be transferred to the lender or, once the loan is repaid in full, to the borrower; and an app tech provider that actually operates the platform. Each of these parties will have duties and obligations to each other and the legal framework needs to both bind them legally to one another - and at the same time be capable of scaling exponentially.

If we borrow Lessig's notion - that regulation can be expressed as code - and adapt that in the context of a digital contract should it not be possible to simply incorporate the legal obligations of the parties into the code of the platform we were building? If the obligation of the escrow agent was merely to ensure that once it received any amount from the seller, an appropriate amount was transferred to either the lender or the borrower in accordance with the objective terms of the contract, could we not reduce these calculations into code so that the moment a payment hits the escrow account the transfer takes place automatically?

It should be possible to work through each of the obligations between the parties in this manner, creating flowcharts for all the different ways in which they could be performed and then co-relating them with the decision trees built into the code. Where the performance of these obligations could be captured in code, the corresponding terms can be removed from the contract and reflected in the algorithm so that they execute automatically as part of the workflow.

All of this is only possible if every party to the transaction is interacting with every other over a digital platform. Under those circumstances, virtually every obligation of the parties is performed digitally. This means that much of the risk of non-performance can be eliminated since, once it was set in motion, the code will inevitably execute all the obligations of the respective parties. It is only those few obligations that remain - primarily dependencies that relate to actions that have to be performed by parties not on the platform, that will need to be reduced to writing.

### Contract as Code

Code facilitates the performance of obligations and, once set in motion, executes them impartially in accordance with the terms programmed into its design. Describing contracts in code allows us to minimise the conditions reduced to writing and can be used to create the sorts of complex, highly-scalable multi-party transactions that would have otherwise been impossible.

This might not be good news for lawyers - but its the inevitable future of contracting.
