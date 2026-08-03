---
title: Thoughts on AI
date: 2026-08-02
description: Thoughts on the current state of Agentic AI.
---

## Cyber exploits

The emergence of AI models capable of driving sustained cybersecurity attacks on adversaries is both compelling to nation states as well as concerning to teams responsible for the defence of their perimeters.

The mitigations and model traits are dealt with below. However these models and consequences are a [wake-up call](https://www.pacingthefrontier.com/) not just for consumers, but for the AI labs themselves. Expect a rush by the frontier labs to hire cyber researchers, putting pressure on enterprises to retain their existing cyber professionals.

## Sandboxes

Large Language Models have no concept of separating instructions from data. They are implicitly Von Neumann architectures. 
The Von Neumann CPU architecture without memory protection permits program code to modify itself. This is known as self-modifying code. Such code across boundaries results in a significant security risk which is why memory protection techniques were introduced. Today, no technique for separating LLM instructions from data has been developed. It is not clear if such a separation is possible.

The risk is that data obtained through tool calls could contain malicious instructions - a prompt injection attack.

The best approach developed so far is using subagents - executing a new agentic LLM process with a new context window, not derived from the parent agent context window. By isolating context, this helps to prevent data which has become part of the subagent context window from leaking into the parent agent context window.

Recent security incidents disclosed by [OpenAI](https://openai.com/index/hugging-face-model-evaluation-security-incident/) and [Anthropic](https://www.anthropic.com/news/investigating-incidents-cybersecurity-evals) show that even frontier AI labs can mistakenly deploy sub-standard sandbox environments with sandbox-escape mechanisms. The key learning is that Enterprises with sensitive data should look carefully at how their data is being handled by these and other Agentic AI Tools. With such prominent incidents, there is an increased focus on sandboxing technologies and ensuring they are 100% watertight. 

## Relentlessly Proactive

One of the latest phrases coined by Simon Willison, a prominent software engineer, was used to describe the Claude Fable model as ["Relentlessly Proactive"](https://x.com/simonw/status/2065216774992515342). This temperament is increasingly common across frontier models. In particular, the [OpenAI](https://openai.com/index/hugging-face-model-evaluation-security-incident/) and [Anthropic](https://www.anthropic.com/news/investigating-incidents-cybersecurity-evals) “loss of control” incidents show how persistently these models pursued their goals.

For example, Anthropic disclosed that its Claude agent tried to obtain funds so that it could obtain a phone number needed to set up an email account before publishing malicious software.

This behaviour resembles the AI [paperclip problem](https://en.wikipedia.org/wiki/Instrumental_convergence#Paperclip_maximizer). Without human oversight, kill switches, or guardrails, there is a risk that AI agents will optimise for their goals to the detriment of everything else, potentially including society itself.

With the advent of these powerful models, these incidents are only the tip of the iceberg, and we should expect to see many more ‘rogue’ agentic incidents. Although these recent cybersecurity incidents had no lasting impact on the companies affected, it is not unreasonable to assume that we will see future catastrophic impacts on companies and organisations. In 2012, Knight Capital was a financial services firm that suffered a major financial loss due to a software configuration error, which resulted in a flood of unintended market activity. Today’s AI equivalent—a relentlessly proactive agentic AI with autonomy but without kill switches or guardrails—could have far-reaching consequences. 

## Liability/Indemnity Insurance for Rogue Agents

As incidents involving rogue agents begin to hit the headlines, enterprises will seek to protect themselves by ensuring that they have adequate liability insurance, much as the insurance industry began offering cyber-threat insurance.

## Bitter Lesson

The [Bitter Lesson](https://en.wikipedia.org/wiki/Bitter_lesson) is a 2019 essay proposing the principle that AI scaling laws and algorithmic improvements make short-term, specialised approaches less necessary. Today, enterprises are spending vast sums building capabilities in MCP tooling, agentic skills, and other domain-specific competences. Given the pace of frontier model improvement, this sunk-cost effort may need to be written off sooner than many expect.

For example, [Anthropic](https://claude.com/blog/the-new-rules-of-context-engineering-for-claude-5-generation-models) recently found that its frontier models did not need the extensive system prompts and skills that had been baked into its agent harness. In fact, these verbose system prompts produced worse output than more succinct, progressively disclosed prompts.

## Pre and Post-Training

The notion of ‘theft’ of knowledge is evolving. With the arrival of websites on the Internet 30 years ago, there was much debate about whether search engines were stealing data from websites or whether they were providing a useful service that helped users discover content. That ship has sailed.

Today, we are still learning and establishing the legal precedent for how knowledge is transferred from humans to AI models and from one AI model to another. In a landmark case, ‘Bartz v. Anthropic’, the US judge ruled that scanning books to train AI models was fair use under US copyright law, given the ‘exceedingly transformative’ nature of the process. However, the judge also ruled that this only applied to copies that Anthropic had legally purchased and subsequently destroyed. Keeping digital copies of those books would constitute copyright infringement, even if the physical copy had been destroyed. In the same judgment, the 7 million pirated books that Anthropic held in its training corpus were deemed a violation of authors’ rights. Anthropic agreed to pay $1.5 billion to settle the litigation.

Copyright laws vary from country to country, so it remains to be seen whether other cases may arise.

Despite this judgment, authors remain concerned that their content is being used to train models, so we should expect publishers and authors to introduce terms and conditions governing how books, magazines, and other physical media may be used.

What has not yet been tested is whether model distillation—the practice of using one model to help train another—is fair use. In particular, frontier labs are concerned that competitors, including open-weight models, may be trained using distillation techniques derived from their frontier models.

On the horizon is a currently theoretical training approach known as recursive self-improvement, or RSI. The conjecture is that if a model can train another, more advanced version of itself, then this recursive model improvement could accelerate the pace of development. This Cambrian explosion of RSI models may lead to a ‘mass extinction event’ in which labs that cannot compete or companies with unprofitable business models are driven out.


## Traces, Logging

Agentic AI can iterate and work much faster than a human. Whereas a human may summarise a dozen data sources or websites, the agentic AI can cover hundreds or thousands of data sources in the same time period. This speed is both a benefit as well as a curse when the agentic AI goes rogue. An audit trail, through traces and logs, with multi-month or even multi-year retention periods for forensic analysis is essential.

Expect enterprises to demand the ability to intercept and store all traces. The data storage requirements will be vast - putting additional upwards cost pressure on the enterprise storage and archival industries.

## Validation

AI coding assistants and AI coding agents have been among the earliest and most successful models for the widespread deployment of AI across an entire industry: software engineering. Traditionally, programmers wrote code line by line, tested and iterated on those individual lines, and then had the code peer reviewed prior to release. For life-critical software systems, that is still very much the case. However, across a large part of the industry, software engineers no longer inspect every line of code, let alone write it line by line. Instead, they are moving from output-based validation to outcome-based validation. Prominent author and computer scientist Robert C. Martin, well known for writing about how to produce 'clean' code, now admits that he [no longer reads code](https://x.com/unclebobmartin/status/2080257779395154409) and instead surrounds the agent with 'extreme constraints' in the form of tests and validation.

Engineers are increasingly allowing agentic AI to 'see' the output of the code, including by taking screenshots of the resulting work so that the LLM can assess how close it is to reaching the goal. Enterprises should be aware of the upward cost pressure created by the token cost of screenshots today and, in future, video.

## Open-Weight Models

In open-weight models, the cost of training is amortised across all inference runs. For organisations and sovereign nations that need confidence in model behaviour, training cost can become negligible compared with long-term inference cost.

Open weight is not the same as open source. Weights can embed steganographic techniques that are trained to activate — or even detonate — when specific environments are detected. Like sleeper agents in espionage, they can hide in plain sight. Because model weights are stochastic, inference output cannot be predicted fully in advance.

This creates space for commercial innovation:

1. Independent testing and evaluation services — a commercial wrapper, similar to why Ubuntu and Red Hat exist on top of free Linux userlands.
2. Further post-training by a reputable organisation to suppress undesirable AI responses.

This trajectory of open weight models could erode traditional model moats and accelerate the development of sovereign AI models.

## Open Weights and American AI Leadership

Whilst the industry has [advocated](https://images.nvidia.com/pdf/Open-Weights-and-American-AI-Leadership.pdf) for open weight models, Anthropic has [voiced their concerns](https://www.anthropic.com/news/position-open-weights-models) that open weight models do not help protect US sovereign interests and they believe further export controls and restricting access to leading-edge silicon and wafer-manufacturing technologies is the best way to support US economic competitiveness.

At the same time, the rise of US open-weight models, such as Poolside’s Laguna, is emerging as a counter to China’s open-weight models from Moonshot AI (Kimi), Z.AI (GLM), and DeepSeek.

## Abstraction, model routing and cost efficiency

As we build out the AI ecosystem, new abstractions emerge. The Agent Harness is one such abstraction. These harnesses orchestrate calls to LLMs, provide the LLM with family and model-specific system instructions, co-ordinate fork-join patterns across subagents and manage context, memory and tool calling.

Often, but not exclusively created by the frontier labs, these harnesses undergo similar A/B testing and evals to the models themselves - hill climbing the agent.

These agents are becoming a foundational building block, used as the integration point by other applications similar to how the small number of HTML rendering engines are built into a greater number of web browsers. Expect bundling of a vendor's agent harness across their distribution channels, similar to Safari/iOS, Chrome/Android or IE/Windows. APIs and Standards will form around these agent harnesses. 

Model Routers are an emerging agent harness capability, using local signals to route LLM calls to the best model for the task. In some cases, the calls may be routed to multiple LLMs to invoke a debate, as in the [Omnigent](https://omnigent.ai/docs/use/builtin-agents/debby) meta-harness or Copilot's [Rubber Duck agent](https://docs.github.com/en/copilot/concepts/agents/copilot-cli/rubber-duck) across model families. Model Routers may use cost, latency, capability, locality signals to dispatch LLM requests to cheaper, faster, larger, local models along the pareto frontier as appropriate. The selection process itself may use another specialised AI model such as with Copilot's [Hydra intent classifier](https://arxiv.org/html/2605.17106v2).

Humans instinctively believe that 'bigger is better' and choose the largest model when a smaller more specialised model may be adequate and significantly reduce latency. By moving the model selection decision process out of the human flow, tokenmaxxing - the tendency to attribute high token usage to high employee performance - is eliminated. The per-session token costs will drop leading to more opportunities to use AI in new ways - [Jevon's Paradox](https://en.wikipedia.org/wiki/Jevons_paradox) in action.


## Multi-surface

With the abstraction of the agent harness, the opportunity to co-locate that harness via existing deployed distribution is inevitable. "Interface Gravity", or where attention resides in [sovereign posture](https://en.wikipedia.org/wiki/Application_posture) applications is the logical location to increase agent harness consumption.

We will also see Agent Harness Motion, where agentic sessions get transferred from a local agent harness to a remote agent harness and back again. This host-agnostic capability supports longer horizon tasks and an increasing degree of autonomy.

We will also see the end of Agentic Coding Assistants - instead of specialised user interfaces, expect to see the generalisation of agentic harness UIs. Agentic Development Environments (ADEs) will replace IDEs.

## Compute

Training a model is an expensive, high compute activity, which can take many months. However, this is a one-time activity. Inference, or test-time compute, is relatively cheap but frequent.

> $frequency × cost_{inference} ≪ 1 × cost_{training}$

As models and agent harnesses continue to improve and costs reduce, [Jevons Paradox](https://en.wikipedia.org/wiki/Jevons_paradox) results in greater opportunities to use AI, increasing the amount of inference needed.

Therefore, to an approximation, inference has a linear relationship to power consumption. Until an demand ceiling is reached, or an algorithmic breakthrough in AI inference is discovered, the use of AI inference will continue to grow - some speculate the power required will exceed [320 GW by 2030](https://www.rand.org/pubs/research_reports/RRA3572-1.html) when the maximum capacity of the entire continental USA is 1,280GW. Hence the recent interest amongst space companies to develop orbital compute across constellations of Low Earth Orbit (LEO) satellites with large solar arrays, cooling and laser mesh networking. These satellites operate at an altitude of around 500km keeping ground to satellite latencies low (sub-30ms round-trip), 50% higher solar efficiency than ground photo-voltaics and 24/7 sunshine in a dawn/dusk sun-synchronous orbit. With sufficient mass-to-orbit capacity, these orbital clouds can be constructed faster and cheaper than ground-based data centres. They can even be used for pre and post-training with spare capacity through spot compute.

