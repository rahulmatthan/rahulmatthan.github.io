---
title: Sufficient Decentralisation
date: '2022-12-07'
tags: ["Blockchain", "Social Media"]
widgets: 
- "categories"
---

{{< figure src="/images/sufficient-decentralisation.jpg" width="auto" >}}

*We need to think about creating "sufficiently decentralized" social networks. While decentralization offers more control to users, it has drawbacks - such as non-unique usernames across the network. If we can use smart contracts to create a decentralized name registry we might be able to balance user control and functionality, and create a more user-empowered internet.*

<!--more-->
*This article was first published in The Mint. You can read the original at [this link](https://www.livemint.com/opinion/columns/web-3-0-smart-contracts-could-empower-internet-users-11670348711480.html).*

---

A few weeks ago, I suggested that the solution to our content moderation problem is federation. Rather than continuing to fight a losing battle to get centralised tech platforms to improve how they moderate online content, we should, I argued, push these decisions to the edge of the network. This way, servers can determine for themselves which other servers to connect to, while still letting their users stay connected to global conversations. Federation was how the internet was originally designed and was also how I believed modern communications could be made to function.

### The Problem with Decentralisation

But even as I made the case for decentralisation, I knew that this would never be a complete solution. As I have said before, decentralised systems suffer from many inconveniences that, paradoxically, can only be solved by centralisation:

> *It is a law of nature that no matter how decentralised a service is to start with, left to itself, things eventually tend towards centralisation. This results in power being concentrated in the hands of a few putting so much pressure on market economics that law and regulation is forced to intervene.*

Which means that unless we take active measures to protect against this happening, the current shift in favour of decentralised solutions will meet the same fate as all the efforts that came before as soon as the pendulum starts to swing back. So, what might these measures look like?

In a recent white paper, Varun Srinivasan makes an argument for finding a balance between the excessive centralised control that characterises our online interactions today and too much federation—which forsakes many of the features that lay users have come to expect in their online interactions. He refers to this Goldilocks Zone as “sufficient decentralisation”.

### Sufficiently Decentralised Social Networks

In a centralised network, the name registry is controlled by the operator of the network. Names are usually assigned based on availability, which is why the “good names” tend to be taken by early adopters. This is how Jack Dorsey, co-founder of Twitter, was able to secure for himself the extremely common @jack username.

The trouble is that a centralised platform operates under the direction of the organisation controlling it, and nothing stops it from denying you access to your username or, worse, assigning it to someone else. Given how closely our social capital is associated with our online presence, this lack of control over our online identity is unacceptable to many.

Federated networks have different problems. While users have more control over their username, they are loose networks of separately established instances and as such have no way of recognising a given username as unique across the entire federated network. What this means is that in a decentralised network, your username is only unique on the server on which it is created. Nothing stops someone else from registering the same username on another server. Which means that no one can have a truly unique username across the entire ‘fediverse’.

For instance, even though I have secured for myself the rather common @rahul username on Mastodon, in order to find me you have to search for @rahul@thinktanki.social, since I registered my username on the thinktanki.social server. This is what distinguishes me from the other Rahul who had the good fortune to register that username on the (way more popular) mastodon.social server.

The solution, according to Varun, is exactly the right amount of decentralisation - not too much and not too little. In order to sufficiently decentralise a social media network, he believes we only need three things to be in place: (i) users must have the ability to claim a unique username; (ii) they must be capable of posting any message under that username; and (iii) they should be able to read that message from any username.

Of these, the first has, so far, been extraordinarily difficult to accomplish.

### Decentralised Name Registries

For usernames to be uniquely identifiable across a federated social network, we need a decentralised name registry. This, until recently, was believed to be impossible at scale. Varun suggests that we can change this by using smart contracts to build a decentralised name registry. Each new username can be added to those before them on the chain, which in turn serves as the common (yet decentralised) registry of names for all applications connected to the protocol. With this, users get exclusive control over their username while still leveraging the benefits of a federated network.

This idea is being built out in a new sufficiently decentralised social network called Farcaster. By keeping the username on-chain and decentralising the storage of posts on Farcaster Hubs, it is possible for users to get a modern social-media experience with full control over their online identity.

### Web 3.0

Farcaster is just one among a number of protocols and solutions that are being built to offer an online experience significantly different from what we are accustomed to. Cumulatively, these platforms are being referred to as Web 3.0 that—unlike the static web (Web 1.0) which only allowed us to read content uploaded to it or the dynamic web (Web 2.0) on which users could create and consume content but not really own it—is being envisaged as a decentralised and self-empowering network that takes control away from platforms and returns it to individual users.

If successful, these new protocols will build an online future very different from what we have come to expect. Once we are able to rely on the blockchain, I can see us extracting, in the paraphrased words of Balaji Srinivasan, the first draft of history from raw facts written directly onto the distributed ledger. Once smart contracts become ubiquitous, our laws will be written directly into code, interpreted by impartial servers and enforced cryptographically.

This is a wholly different version of the internet from what we use today. Whether it’s better or worse remains to be seen.
