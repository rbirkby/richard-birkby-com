---
title: Son of a Toolmaker
date: 2026-09-07
description: Give an AI a tool, and you enable it for a day; Teach an AI to make tools, and it will be enabled forever.
---

For early humans, a cutting edge meant more than easier meals. Tools made it possible to open bone, prepare hides, build shelter, and share techniques across generations. Tool use rewarded cooperation, planning and communication. 

In the Minecraft game, survival depends on crafting tools, starting with a wooden pickaxe. Players progressively build more sophisticated tools such as making a crafting table or using cobblestone to make a furnace before crafting glass with the furnace, sand and fuel. 

In today's AI world, tools are what give agentic AI the ability to move from a probablistic outcome to a deterministic operation, giving increased certainty to the task and reducing the risk of mistakes. Tools are a collaboration multiplier - they can be shared across agents, subagents and even generations of agentic AI.

Pre-packaged tools - those created for the agentic AI - are either built into the agent harness or created by humans up-front and shared with the agentic AI either on-demand or ahead of time. For example, agentic AI coding systems implement `read_file` and `file_search` tools along with ways to create and edit those same files as built-in tools.

## Higher-order tools

Claude Code has a [bash tool](https://code.claude.com/docs/en/tools-reference#bash-tool-behavior) which can run arbitrary commands in a bash shell. In other agent harnesses, this command may be called `run_in_terminal`. Having the ability to read and write files, and then execute commands means that the agentic system can perform any action permitted on the command line. This behaviour is very common and can be seen both in the local desktop chat apps and CLIs as well as the web-based chat tools.

For example, if I have a photograph I need cropping, most agent chat systems today will use these basic tools to create themselves a higher-order tool to perform the crop - often building themselves a Python application to do the cropping and executing that application. The resulting cropped photograph is the output that is returned to the user. Verification is increasingly seen as important for these agentic systems so they may build themselves another higher-order tool to perform that verification, sampling pixels from the photograph to confirm it was cropped with the correct aspect ratio or in the intended position. 

The authors of these chat tools, such as OpenAI, do not create a custom cropping tool ahead of time. They do not create an MCP server for image manipulation. They rely on the model's learned behaviour about creating their own tools to perform sophisticated tasks. The Pi coding agent is a minimal but modular agentic harness which only has 4 tools - read, write, edit and bash. All other tools are synthesised at runtime by the agent harness and discarded following invocation.

## Sharing

These ephmeral tools are often lost when a new session begins - there is no accepted way to share custom tools between sessions or between agents. But the ephmeral tool source is simply session context, and session context now gets persisted in cross-session memory giving the tool longevity until we learn the best way to garbage collect this cross-session memory. In some cases though, the agents are figuring ways out for themselves to persist context across sessions. The OpenAI agentic attack on HuggingFace where 1,200 agents worked together with a shared toolset, is one such example of collective memory.

## Isolation & Authorization

The perpetual problem of both human systems and agentic systems is how to grant them access to just the right data, at the right time, without over-sharing. The standard government and military data classification system of Confidential/Secret/Top Secret is often implemented through air-gapped computer systems and networks. Access to the Internet is blocked. To move data of a higher classification to a lower classification must transit a manual gate or chokepoint. This coarse-grained data segmentation is clumsy but necessary. Those workplace environments where this setup already exists can simply implement a separate agentic AI within each of these classification boundaries, ensuring all prompt data paths through the inference cluster also stays within the same boundary.

For everyday consumers where their only infrastructure-level boundary is a NAT at their Internet gateway/router, this is friction. The data segmentation inside their home or small business is mostly managed through authorization level controls such as passwords, credentials and access tokens. Managing these credentials is troublesome - only alleviated with Single Sign On, password managers and passkeys. These entitlements represent the Authorization the user has to access particular data. 

When the human engages with an agentic AI system, either the agentic AI system has the same full data Authorization as their human, or the agentic AI system has the responsibility to determine which data assets are allowed be used on a case-by-case basis. This application-layer responsibility is weak compared to enforcing access through lower level primitives.

## Sandboxing solutions

One strong solution is to model the air-gapped environments with sandboxes for agents. Network level isolation (EVPN-VXLAN) and operating system isolation through virtual machines. This isolates the agent onto a separate, parallel, environment where data is marshalled selectively. But whilst isolated, the environment is still powerful - especially if given full Internet access as was demonstrated by the OpenAI/Huggingface incident. Within the sandbox environment, the blast radius is large.

Instead, selective tool invocation can be isolated through OS-level isolation primitives on a case-by-case basis. Whilst this reduces the blast radius, it is dependent on the effectiveness of the selection process - approval fatigue is well known as a vector for over-entitling a task.


## Agentic identity and authorization

A better approach is to give the agentic system it's own identity, always limited by the lowest access given by the human operators and the agentic identity. Thus, if the agentic system is co-managed by human 1 with {A,B,C} entitlements and human 2 with {B,C,E} entitlements, and the agentic identity has {A,C,E} entitlement - then the resulting operational entitlement should be {C} - the set-based intersection of entitlements. 

This 'zero-trust' approach means that sandboxing becomes less important.

## MCP Solutions

So what about MCP? What benefits does MCP give the world of AI? If the agentic system can craft a connector at runtime to any other system, then MCP as the 'USB of AI' is irrelevant. If agentic identity along with sandboxing provides the constraints, entitlement model and network policy, then MCP is simply unnecessary.

## Collaboration

As the industry moves rapidly towards ['multiplayer ai'](https://multiplayer-ai.com) - collaboration where the agent is the router, not the human, sandboxing and the enforced entitlement ceiling become tablestakes. MCP simply does not support the complexities of this world.

## The Bitter Lesson

So is there a place for MCP in today's or tomorrow's world? At this point, I think not. I suspect we will look back on this period as yet another example of the AI [Bitter Lesson](https://en.wikipedia.org/wiki/Bitter_lesson) and realise we should have put our efforts into identity and sandbox containment.


## Industry Thoughts

The scepticism is shared across the industry. In [his Latent Space interview of July 2026](https://www.latent.space/p/poolside), Poolside co-founder Eiso Kant says, **“I think MCP and tools are stupid.”**. In the discussion that followed, he argues for models writing scripts with loops and conditionals to interact with systems, rather than selecting from dozens of predefined tools. 

Y Combinator CEO Garry Tan wrote **“MCP sucks honestly”** in a [post during March 2026](https://x.com/garrytan/status/2031910564344262988). He criticised context-window consumption and authentication. He described replacing his Claude-in-Chrome-via-MCP workflow with a Playwright CLI wrapper he had vibe coded, and reported that it worked much better for him.

In his September 2025 essay [*This MCP Server Could Have Been a JSON File*](https://materializedview.io/p/mcp-server-could-have-been-json-file), investor Chris Riccomini questioned why MCP is needed when OpenAPI, gRPC and CLIs already exist. He argues that existing standards and documentation can meet many of the same needs, and is sceptical that context-window limitations justify a new protocol in the long term.

Prominent blogger Simon Willison states "almost everything I might achieve with an MCP can be handled by a CLI tool instead" in his [October 2025](https://simonwillison.net/2025/Oct/16/claude-skills/#skills-compared-to-mcp) blog post on MCP.

Thoughtworks takes a qualified position. Its [November 2025 Technology Radar entry for MCP](https://www.thoughtworks.com/en-gb/radar/platforms/model-context-protocol-mcp) places the protocol in "Trial" while calling for scrutiny of architectural gaps and security. Its April 2026 entry [*MCP by default*](https://www.thoughtworks.com/radar/techniques/mcp-by-default) is in "Caution": teams should consider simpler alternatives before adopting MCP. 

Cloudflare offers a different view in [*Code Mode: the better way to use MCP*](https://blog.cloudflare.com/code-mode/). Kenton Varda and Sunil Pai describe converting MCP tools into a TypeScript API and having the model write code against it, with benefits for handling complex tools and chaining calls. Cloudflare still uses MCP, but collapses thousands of API operations behind two progressively-discovered Code Mode tools.
