---
title: In-Built Bias
date: '2023-05-24'
tags: ["Artificial Intelligence", "Health"]
widgets: 
- "categories"
---

{{< figure src="/images/in-built-bias.png" width="auto" >}}

*When healthcare is powered by artificial intelligence and smart devices, we must ensure that all of humanity stands to benefit. We need open, transparent and customisable algorithms in our hardware.*

<!--more-->
*This article was first published in The Mint. You can read the original at [this link](https://www.livemint.com/opinion/columns/the-hidden-biases-in-medical-devices-how-algorithms-are-failing-marginalized-communities-and-putting-lives-at-risk-11684867946965.html).*

---

The more we rely on medical devices for treatment, the greater the risk of small flaws in their underlying algorithms resulting in misdiagnosis, or worse. Most of these algorithms are trained on insufficiently representative patient data and thus incapable of addressing normal differences in physiological traits across a diverse sample of the patient population. As a result, the diagnoses they generate are sometimes ineffective and potentially harmful.

These biases—often hidden deep inside the complex layers of machine learning and biometric processing that are central to these devices—can be fatal particularly in under-represented demographics.

### Built-in Bias

Take pulse oximeters, for example. During the covid pandemic, they became a common household appliance thanks to their ability to easily measure oxygen saturation—a critical early-warning indicator of the silent onset of the disease. According to a [recent study](https://www.nejm.org/doi/full/10.1056/NEJMc2029240), it turns out that these devices are less accurate in patients with darker skin pigments—to the extent that they are three times less likely to detect hypoxemia in African-American patients when compared to Caucasians. It is hard to measure how this impacted mortality during the pandemic.

The fact is that these devices have largely been tested on lighter-skinned people, their algorithms tuned to the light absorption and reflection characteristics of paler skin. As a result, they perform poorly on darker complexions. The same was found to be the case with [melanoma detection algorithms](https://link.springer.com/article/10.1007/s44196-023-00246-1), which also perform poorly on darker skin for much the same reason, resulting in significantly delayed detection or, in some instances, the complete failure to spot the carcinoma.

Then there is the electrocardiogram (ECG) machine, an indispensable part of all modern healthcare facilities. While it might seem that all they really do is transpose the human heartbeat into a line on a graph, in actual fact, they use fairly complex algorithms to interpret a range of physiological signals to produce their output.

There is a growing body of evidence that suggests that these ECG algorithms are significantly less effective on obese patients, generating inaccurate readings and leading to misdiagnoses as well as ineffective treatment. Since obese people are naturally inclined towards heart disease, the delayed treatment that this results in can, in many instances, be fatal.

### Gender Bias

Similar biases exist on account of gender differences. It is a fact that women experience heart disease differently from men, and so their symptoms are often mis-attributed to non-cardiac causes. This results in incorrect treatment and a unduly delayed diagnosis of the cardiac condition—a problem often exacerbated by medical algorithms trained primarily on male data. Gender misrepresentation during preclinical stages of drug development regularly fails to capture exactly how women react to these new drugs, resulting in incorrect assumptions as to their side-effects on women as well as their overall effectiveness. The implications of this sort of bias are truly far-reaching—potentially extending to half the human population.

These examples are just the tip of the iceberg. While most of the problems discussed here are on account of historical circumstances—a genuine lack of demographically disaggregated training data at the time when they were developed—it is exacerbated by the proprietary nature of medical devices and their underlying algorithms. This lack of transparency—both as to how these algorithms work and the data they were originally trained on—hinders our ability to do a root cause analysis of the problem that would allow us to rectify them. As a result, even if they wanted to, physicians and medical practitioners simply don’t know how to compensate for what their devices are telling them.

### Transparency

An obvious solution would be to make these algorithms more transparent so that device manufacturers can better understand the machines they are building and appropriately modify them to cover the diverse demographics they are supposed to address. Wherever possible, this should include releasing the underlying algorithms as open source so that researchers, software engineers and medical practitioners alike can analyse them, detecting any bias that may exist and, where possible, modifying them to better suit the patient populations they are being used on. Not only would this foster deeper collaboration between the different disciplines necessary for the development of these devices, but also promote innovation by providing broader access to the tools required to build better, more inclusive medical devices.

But this is easier said than done. Proprietary algorithms are often the result of significant investments in research and development—money that companies can ill-afford not to monetise. As a result, any attempt to make these algorithms more accessible will need to balance the legitimate need for a wider community of research with the need to protect the intellectual property implicit in their creation.

We stand at the dawn of a new era in healthcare—one that will be powered by artificial intelligence and smart devices. We have to ensure that all of humanity stands to benefit from these new technologies. To do this, we need to balance competing interests to make sure everyone benefits—regardless of skin colour, gender or geographical location. The choices we make today will determine the care we receive tomorrow.

