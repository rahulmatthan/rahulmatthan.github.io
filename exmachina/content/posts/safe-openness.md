---
title: "Safe Openness"
date: "2025-10-29"
tags: ["artificial intelligence"]
widgets: 
- "categories"
---

{{< figure src="/images/safe-openness.jpg" width="auto" >}}

_To ensure their safety, open-weight models are being released further and further behind the current state of the art. What does this mean for Indian AI developers who have traditionally preferred open-weight models for the flexibility they offer?_

<!--more-->
_This is a link-enhanced version of an article that first appeared in the Mint. You can read the original [here](https://www.livemint.com/opinion/online-views/openweight-ai-models-india-api-access-geopolitics-developer-ecosystem-frontier-artificial-intelligence-chatgpt-tech-11761568934178.html). If you would like to receive these articles in your inbox every week please consider subscribing by clicking on this [link](https://paragraph.xyz/@exmachina)._

---

Most AI developers prefer to use open-weight models to build their solutions because they can be fine-tuned to suit specific requirements. Take, for example, [DeepSeek](https://www.deepseek.com/en), the open-weight Chinese AI model. [Perplexity was able to fine-tune it](https://www.eweek.com/news/perplexity-ai-deepseek-r1-post-training/) to remove all China-specific bias, as a result of which its users were able to get honest answers to questions about the 1989 protests at Tiananmen Square. This is not possible when the same questions are asked [of the DeepSeek API](https://en.wikipedia.org/wiki/DeepSeek_(chatbot)).

Perhaps more importantly, [open-weight models](https://huggingface.co/) (these are not ‘open-source’ as traditionally understood, but allow some amount of adjustment) can be downloaded and deployed in their own compute environment, ensuring that developers are not dependent on big AI labs for continued access to the models they need. This gives companies developing retail applications a level of freedom they otherwise lack.

### Safe Openness

I used to believe that open-weight models were the way to go until I read the documentation accompanying [GPT-OSS](https://openai.com/index/introducing-gpt-oss/), OpenAI’s first open-weight model since GPT-2. In the safety paper it released, OpenAI stated that it had intentionally kept the model’s capabilities below the current frontier, as that was the only way to ensure that bad actors would not be able to use it for nefarious purposes. While I am all for ensuring that AI models are safe, I worry that if there is no other way to guarantee model safety, the long-term implications for Indian developers will be grim.

Among the many concerns raised about open-weight models, foremost is the risk of [malicious fine-tuning](https://arxiv.org/html/2508.03153v1). In much the same way that Perplexity removed Chinese bias from DeepSeek, malicious actors could circumvent safeguards that block access to the potentially harmful information in these models. If that happens, the ‘knowledge uplift’ will make it far easier for those so inclined to carry out dangerous cyberattacks, develop deadly weapons, or synthesize harmful biological substances.

While all AI models contain this sort of information, when users can only access a model through an API that is under the deployer’s control, requests for dangerous information can be denied or side-stepped with a benign response. This, however, is not possible in the case of open-weight models, given that they can not only be downloaded and used within their own compute environment, but their weights can be modified to remove constraints designed to guard against precisely this sort of behaviour.

It seems that OpenAI has come to the conclusion that the only way to ensure this does not happen is to make sure that its models are far less capable than those at the frontier. If ‘safe openness’ becomes a function of [how far behind the state-of-the-art](https://epoch.ai/data-insights/open-weights-vs-closed-weights-models) a model has to be in order to ensure that it cannot be misused, those who build applications using open-weight models will find that what they are capable of building will steadily drift further away from the cutting edge of what is possible.

### Open-Weight and SOTA

Now, one might argue that we do not require all the capabilities of frontier models to solve the sorts of problems that we are relying on AI to address in India. That being the case, does it really matter how far the models are from the cutting edge?

While I agree that there is much we can do with even the more basic models (and that, as a result, none of this should be an immediate concern), I worry that, in time, the capabilities we really need may no longer be available in the models being released with open weights. When that happens, India’s AI developer ecosystem will have no choice but to use APIs to access the AI features we need.

This, however, would place us at the mercy of large AI labs. They will, should they choose, be able to simply turn off access to the API or throttle our use. And, since most frontier AI labs are located in the US, API access could become yet another geopolitical tool, wielded in much the same way as export restrictions and sanctions are today.

If this is an eventuality we are likely to face, it would be in our interests to secure API access to cutting-edge models on the most favourable terms that we can manage. One way to do this might be to require AI labs to appropriately localize their weights so that Indian developers do not lose access to the most recent versions, notwithstanding the [pushes and pulls of geopolitics](https://ai-frontiers.org/articles/in-the-race-for-ai-supremacy-can-countries-stay-neutral). For this, we should negotiate model escrow arrangements and ensure that inference endpoints reside in our own sovereign cloud environments. This way, the AI we need would be functionally local, even if frontier development continues to take place in the US.

### The India Advantage

What interest would big AI labs have in acceding to this request?

First, India is one of the world’s largest markets for AI outside the US. All the big AI labs have an interest in being able to benefit from the vast retail opportunity that a country of India’s size presents. But beyond the mere commercial motive of adding new subscribers, AI labs will benefit from understanding exactly how we use AI. India has one of the most diverse AI user bases in the world, offering these companies a rich test-bed they can use to improve how their models work and the services they can offer.

India should leverage this to its advantage to help secure favourable API access for our developers. And we should do so soon, before the open-weight models we currently rely on fall so far behind the state of the art that they are no longer useful. 