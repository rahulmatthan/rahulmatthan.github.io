---
title: "NYT v. the LLMs"
date: "2024-01-03"
tags: ["intellectual property","artificial intelligence"]
widgets: ["categories"]
---

{{< figure src="/images/nyt-v-the-llms.jpg" width="auto" >}}

_In the last week of 2023, the New York Times sued OpenAI and Microsoft for copyright infringement. The allegations in the complaint go to the core of how generative AI works and could shape the manner in which AI works going forward._

<!--more-->

_This article was first published in The Mint. You can read the original at_ [_this link_](https://www.livemint.com/opinion/online-views/the-nyt-s-copyright-lawsuit-against-openai-reveals-a-familiar-but-pointless-fear-11704205094732.html)_._

___

As if there wasn’t a more convenient time in the year to do this, the New York Times chose the last week of 2023 to [sue OpenAI](https://www.nytimes.com/2023/12/27/business/media/new-york-times-open-ai-microsoft-lawsuit.html?smid=nytcore-ios-share) for [copyright infringement](https://storage.courtlistener.com/recap/gov.uscourts.nysd.612697/gov.uscourts.nysd.612697.1.0.pdf). Which is why instead of putting my feet up and relaxing, I had to fire up my computer to figure out whether this was the end of generative AI that so many were saying it was going to be.

One of the arguments in the New York Times’ complaint is that OpenAI’s large language models (LLMs) demonstrate a kind of behaviour called “memorisation,” as a result of which, when supplied with a particular prompt, they repeat verbatim the material they were trained on. This, the complaint argues, allows OpenAI users to bypass the New York Times firewall and access its copyright content without a subscription.

### Testing the Prompt

Never one to take allegations at face value, I decided to see for myself whether any of the prompts listed in the complaint could be used to generate even a part of a New York Times article. So I copied each prompt into my own paid instance of ChatGPT to see what it spat out. 

Each time, I received variations of the same response: “I can’t provide verbatim excerpts from copyrighted material like the New York Times article. However, I can offer a summary or discuss the themes and content of the article... For the full article, you would need to visit the New York Times website or access it through a library or other service that offers full-text articles from the newspaper.”

Nothing I did could get ChatGPT to breach the paywall as the New York Times argued was possible. Either the newspaper has access to a version of ChatGPT that we ordinary users do not have, or it had gone to extraordinary lengths to constrain the model while responding to its prompt so that the outputs came out looking more egregious than they actually were. In either case, all that needs to be done to address this concern, it seems, is to tweak the code to get the app to behave for the New York Times the same way it behaved with me.

### Copying or Reading?

Which brings us to the other allegation in the complaint—the fact that OpenAI’s LLMs, without a licence from or any compensation to the New York Times, are trained on [Common Crawl](https://commoncrawl.org/), a free and open data-set that (allegedly) contains 16 million unique records from the New York Times. Since the process of training involves copying and ingesting this content multiple times, the fact that it did so without the permission of the owner of the content was a violation of copyright law, the newspaper argues, and that amounts to “free-riding” on the investment it had made to gather this content.

The trouble with this line of argument is that it is based both on an incorrect assessment of how LLMs work as well as what exactly it is that copyright is supposed to protect. An LLM trained on a large data-set doesn’t ‘copy’ the content in that data-set as much as it ‘reads’ it. Rather than storing the actual text contained in the training data-set, it parameterises this data into weights in a neural network that define how inputs into the model will be transformed into its output. This is not something copyright law was ever [designed to address](https://www.ben-evans.com/benedictevans/2023/8/27/generative-ai-ad-intellectual-property).

If you stop and think about it, this is exactly what search engines do. They crawl the web, ‘reading’ millions of pages of the internet in order to generate an index of what they contain—so that when presented with a search query, they can throw up the most accurate result. Courts have [long held](https://en.wikipedia.org/wiki/Perfect_10,_Inc._v._Amazon.com,_Inc.) that this sort of activity is permissible under the fair use exception because the act of generating a search index is transformative. The extent of transformation that takes place when Generative AI parameterises content is, if anything, far greater than when a search engine builds an index.

There have been suggestions that the complaint is just a negotiating tactic—that the New York Times has filed a complaint in order to pressure OpenAI to agree to its licensing demands. After all, OpenAI has agreed to [licensing deals](https://www.politico.eu/article/axel-springer-openai-launch-global-partnership/) with other media companies in the past, and it might just be a question of arriving at the right price with the New York-based newspaper.

### Running Scared

I hope this is the case, because I can’t for the life of me figure out what the New York Times is afraid of. Aren’t LLMs just auto-complete on steroids? That incrementally identify the next most appropriate word, sentence or paragraph, making it seem to the uninitiated that they are creating novel content when in fact they are not? Why a respected news organisation is afraid that this technology is an existential threat to the kind of high-quality journalism it is known for is simply beyond me.

We have seen this [cycle repeat](https://exmachina.in/08/02/2023/existential-angst/) itself with every transformative leap in creative technology—from the printing press to recorded music to Napster. Each time, incumbent media organisations have gone inordinate lengths to throw the rule-book at new technologies out of a misbegotten belief that unless they block them, they will have no hope of saving their existing business model. Each time, they failed to appreciate, until it was too late, that change is inevitable—that their only hope of survival is to embrace the inevitable future that these technologies are hinting at.

The New York Times  Company is a great news organisation. It should play to its strengths and focus on producing the sort of news content that generative AI cannot match. Or it could, like Disney, try and [bend copyright law in its favour](https://pluralistic.net/2023/12/15/mouse-liberation-front/#free-mickey). 

But that approach, as we learnt this week, inevitably has an expiry date.