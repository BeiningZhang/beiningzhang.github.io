---
permalink: /
title: "Home"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
layout: splash
header:
  overlay_image: "hero-gradient.svg"
  overlay_filter: "rgba(17, 24, 39, 0.55)"
  overlay_color: "#111827"
  hero_avatar: "profile.png"
  ctas:
    - label: "Email"
      url: "mailto:beiningzhang001@gmail.com"
      class: "btn--light-outline"
    - label: "LinkedIn"
      url: "https://www.linkedin.com/in/beiningzhang"
      class: "btn--light-outline"
excerpt: "Quick links to CV, publications, and selected projects."
section_title: "Overview"
section_desc: "AI/ML engineer & researcher building trustworthy LLM systems (evaluation, grounded generation, and participatory design)."
summary: "I build reliable LLM systems: claim-first retrieval, measurable evaluation, and human-centered agent design."
mindset_label: "Focus"
mindset_cards:
  - icon: "◎"
    icon_bg: "var(--purple-bg)"
    icon_text: "var(--purple-text)"
    title: "Trustworthy agents"
    body: "Evaluation in mixed-motive settings, safety constraints, and failure analysis to keep agents reliable."
  - icon: "▦"
    icon_bg: "var(--teal-bg)"
    icon_text: "var(--teal-text)"
    title: "Grounded RAG"
    body: "Claim-first retrieval with citations and calibrated uncertainty for high-stakes domains."
  - icon: "◇"
    icon_bg: "var(--amber-bg)"
    icon_text: "var(--amber-text)"
    title: "Participatory AI"
    body: "Citizen-centric design practices that align AI systems with the people affected by them."

feature_row:
  - title: "Grounded RAG systems in high-stakes domains"
    excerpt: "Production LLM pipelines with claim-first retrieval, inline citations, and measurable quality improvements."
    url: "/cv/"
    btn_label: "See experience"
    btn_class: "btn--primary"
  - title: "LLM evaluation & monitoring"
    excerpt: "Evaluation frameworks, router audits, and feedback loops to keep agentic systems reliable over time."
    url: "/publications/"
    btn_label: "See publications"
    btn_class: "btn--primary"
  - title: "Medical research classification at scale"
    excerpt: "High-agreement classification at 200k-record scale with precision-first abstention to focus experts on ambiguity."
    url: "/cv/"
    btn_label: "See details"
    btn_class: "btn--primary"
---

<div class="metrics-strip" aria-label="Key highlights">
  <span class="metric-chip">200k records</span>
  <span class="metric-chip">93% agreement</span>
  <span class="metric-chip">80% faster detection</span>
</div>

## Selected Projects / Case Studies

{% include feature_row %}

## Research Focus

- LLM agent evaluation in mixed-motive and cooperative settings
- Governance, explainability, and participatory design for agentic systems
- Grounded generation: claim-first retrieval, citation, and uncertainty handling
- Quality monitoring: feedback loops, evaluation harnesses, and failure analysis

## Contact

Open to: research collaborations on trustworthy AI, and speaking on LLM systems in high-stakes domains.
