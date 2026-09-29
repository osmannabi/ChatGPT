# Figma Weave (Weavy.ai) vs ComfyUI

Read this only when a brief involves AI workflow setup or pipeline consulting. When a client has
specifically asked for ComfyUI, there is often a genuine case for proposing Weave instead; this
section covers both the platform facts and how to frame the alternative honestly.

When a client brief involves AI workflow setup; especially for character consistency, fashion model generation, or any multi-model image pipeline; Figma Weave is a legitimate and often superior alternative to ComfyUI. Use this section to guide both the proposal positioning and any comparison if the client has specifically requested ComfyUI.

### What Figma Weave Is

Figma Weave (formerly Weavy.ai; app at app.weavy.ai, help docs at help.weavy.ai) is a cloud-based, node-based AI creative platform that chains multiple AI models and professional editing tools into reusable workflows. Key facts:

- **12+ integrated AI providers:** FLUX (Black Forest Labs), Runway, Kling, Luma, Google, OpenAI, Recraft, Bria, Lightricks, ByteDance, Wan, Grok
- **Built-in editing nodes:** mask, inpaint, upscale, remap, relighting, outpaint, z-depth extraction, layer compositing, blending modes, painting
- **ControlNet structure referencing:** native, no extensions to install
- **App Mode:** converts any node workflow into a simplified no-code UI; so the client can run it themselves without understanding the nodes underneath
- **Cloud-based:** no GPU, no local installation, runs in the browser
- **Pricing:** Free (150 credits/mo, 5 workflows); Starter $24/mo (1,500 credits, unlimited workflows); Professional $45/mo (4,000 credits, most popular); Team $60/user/mo. Commercial license included on all plans.

### ComfyUI vs. Figma Weave; Comparison Table

Use this when a client has requested ComfyUI specifically and there's a case for proposing Weave instead. Be honest about where ComfyUI still leads.

| | ComfyUI | Figma Weave |
|---|---|---|
| **Setup** | Local; requires Python, CUDA, GPU (8GB+ VRAM), manual model downloads | Cloud-based; browser only, no hardware needed |
| **Learning curve** | Very steep; nodes, custom extensions, frequent breaking updates | Moderate; node-based but cleaner UX, purpose-built |
| **AI models** | Primarily SD ecosystem (SDXL, FLUX via extensions) | 12+ providers in one platform |
| **ControlNet / Pose** | Yes, via extension install and manual config | Yes, native ControlNet structure referencing |
| **Face / Character Consistency** | IP-Adapter nodes (manual setup required) | IP-Adapter and face reference workflows, chain-able across models |
| **Outfit / Style Variation** | Inpaint workflows, prompt-based | Model-agnostic; pipe between generators for outfit control |
| **App Mode for Client** | No; client needs full ComfyUI to run a workflow | Yes; publish workflow as a simple UI the client operates alone |
| **LoRA Training** | Yes, via Kohya / EveryDream (gold standard for custom faces) | Not natively; train externally then use via reference workflows |
| **Cost** | Free (GPU hardware and electricity not zero) | $0–$45/month subscription |
| **Stability** | Updates frequently break custom nodes | Cloud-managed, stable |
| **Collaboration** | Manual JSON export | Built-in workspace sharing |

**When to propose Weave over ComfyUI:**
- Client wants to run the workflow independently after delivery (App Mode makes this dramatically simpler)
- Client has no GPU or no appetite for local software setup and maintenance
- Fashion, character, or multi-outfit workflows that benefit from mixing FLUX + Kling + inpainting across providers
- The deliverable is a repeatable production system, not a one-time render

**When ComfyUI is still the right answer:**
- Client needs custom LoRA training baked into the pipeline (Kohya ecosystem remains the gold standard)
- Client already has ComfyUI set up and just needs workflow design
- Highly technical client who wants granular SD-ecosystem control

### Framing the Weave Alternative in a Proposal

When proposing Weave to a client who asked for ComfyUI, be transparent; don't just swap the name. The proposal should:
1. Acknowledge the client asked for ComfyUI
2. Briefly explain why Weave better serves their stated goal (typically: no GPU needed, easier to hand over via App Mode, access to more current models)
3. Offer to proceed with ComfyUI instead if they prefer; this signals confidence, not a hard sell
4. Address LoRA honestly: IP-Adapter referencing covers face consistency in most fashion use cases without a custom LoRA; if it doesn't, training can happen externally and feed into the Weave workflow

---
