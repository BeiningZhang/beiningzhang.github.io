---
layout: archive
title: "Experience"
permalink: /experience/
author_profile: false
excerpt: "Roles and impact across applied AI, LLM systems, and research."
summary: "Selected roles as cards — each with the problem, the system, and measurable outcomes."
mindset_label: "How I work"
mindset_cards:
  - icon: "◎"
    icon_bg: "var(--purple-bg)"
    icon_text: "var(--purple-text)"
    title: "Grounded by default"
    body: "Claim-first retrieval and citations when stakes are high."
  - icon: "▦"
    icon_bg: "var(--teal-bg)"
    icon_text: "var(--teal-text)"
    title: "Measure reliability"
    body: "Evaluation harnesses, monitoring, and failure-driven iteration."
  - icon: "◇"
    icon_bg: "var(--amber-bg)"
    icon_text: "var(--amber-text)"
    title: "Ship pragmatically"
    body: "Modular systems, clear interfaces, and rollout plans."
---

{% include base_path %}

<div class="principles">
  <article class="principle">
    <div class="principle-num">Experience 01</div>
    <div class="principle-title">AI/ML Engineer · Savantiq <span class="pill">Jan 2026 – Present</span></div>
    <p class="principle-body">Building the AI core of an investment intelligence platform (high-level public summary only).</p>
    <div class="example-block example-block--good">
      <div class="example-label">Highlights</div>
      <ul class="callout-list">
        <li>Architected a unified RAG pipeline (Python/Django) powering chat, memo generation, AI summaries, and research pages — replacing fragmented LLM calls with a modular system covering query optimisation, claim-based retrieval, and grounded answer synthesis with inline citation.</li>
        <li>Designed a claim-first retrieval architecture to eliminate context contamination, integrating AWS Bedrock via a new multi-provider AI client (Azure OpenAI + Bedrock), improving answer consistency and reducing hallucination.</li>
        <li>Led migration of a legacy chat entrypoint to a modular SmartRouter → ChatPipeline architecture, eliminating a dual-entrypoint system with a full test and rollout plan.</li>
        <li>Built an LLM evaluation framework capturing router decisions, retrieved context, and user feedback — enabling proactive quality monitoring rather than reactive incident response.</li>
      </ul>
    </div>
  </article>

  <article class="principle">
    <div class="principle-num">Experience 02</div>
    <div class="principle-title">Research Collaborator · Harvard Health System Innovation Lab <span class="pill">Nov 2024 – Present</span></div>
    <p class="principle-body">Automated medical research classification at scale.</p>
    <div class="example-block example-block--good">
      <div class="example-label">Highlights</div>
      <ul class="callout-list">
        <li>Built a few-shot LLM classifier (GPT-4o-mini + RF ensemble) that automated classification of a 200,000-record cancer research dataset with 93% human-machine agreement — reducing manual labelling effort by over 80%.</li>
        <li>Designed a precision-first abstention mechanism that eliminated human verification of positive decisions, enabling clinical experts to focus on genuinely ambiguous cases.</li>
        <li>Co-authored: <em>Public and philanthropic research funding, publications, and research networks for cancer in the Commonwealth and globally between 2016 and 2023: a comparative analysis</em>, The Lancet Oncology 26(9), e466–e476, 2025.</li>
        <li>Invited to the Lancet Commissioners meeting to advise on AI's role in global cancer control and research equity.</li>
      </ul>
    </div>
  </article>

  <article class="principle">
    <div class="principle-num">Experience 03</div>
    <div class="principle-title">Research Assistant · University of Southampton <span class="pill">Jun 2024 – Present</span></div>
    <p class="principle-body">AI agent evaluation, governance, and participatory design.</p>
    <div class="example-block example-block--good">
      <div class="example-label">Highlights</div>
      <ul class="callout-list">
        <li>Achieved top ranking at the Concordia Contest 2024 with a novel LLM agent architecture for cooperative multi-agent interaction — published at NeurIPS Datasets and Benchmarks Track 2025.</li>
        <li>Researching AI governance, explainability, and public engagement in participatory agentic system design — paper under review at ACM CHI.</li>
        <li>Selected for the Cooperative AI Summer School 2025; developed evaluation metrics for exploitability in multi-agent systems.</li>
      </ul>
    </div>
  </article>

  <article class="principle">
    <div class="principle-num">Experience 04</div>
    <div class="principle-title">Data Science Intern · Stellar Fusion <span class="pill">Aug 2023 – Oct 2023</span></div>
    <p class="principle-body">Financial metrics analysis from SEC filings.</p>
    <div class="example-block example-block--good">
      <div class="example-label">Highlights</div>
      <ul class="callout-list">
        <li>Built a Python/SQL pipeline to ingest, clean, and structure financial metrics from SEC filings and MongoDB company data across 500+ company records.</li>
        <li>Automated cross-sector metric comparisons using K-means clustering and TF-IDF NLP — presented as a proof of concept to senior stakeholders.</li>
      </ul>
    </div>
  </article>

  <article class="principle">
    <div class="principle-num">Experience 05</div>
    <div class="principle-title">Data Science Consultant · LSEG <span class="pill">May 2022 – Jul 2023</span></div>
    <p class="principle-body">Real-time market monitoring at infrastructure scale.</p>
    <div class="example-block example-block--good">
      <div class="example-label">Highlights</div>
      <ul class="callout-list">
        <li>Led the Operational Readiness Centre project — reduced critical incident detection time by 80% through automated, real-time market health monitoring pipelines (AWS S3, Glue, SageMaker, ElasticSearch, Snowflake, ServiceNow).</li>
        <li>Built end-to-end data pipelines across 5+ source systems, delivering operational insights via PowerBI and Kibana to Capital Markets stakeholders.</li>
        <li>Prototyped a predictive delay-detection model using AWS SageMaker, extending the system from reactive monitoring to proactive incident prevention.</li>
        <li>Developed an LSTM-based email classifier (85% accuracy) reducing mean client response time by 25%.</li>
      </ul>
    </div>
  </article>
</div>

