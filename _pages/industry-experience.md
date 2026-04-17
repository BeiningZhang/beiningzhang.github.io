---
layout: archive
title: "Industry experience"
permalink: /industry-experience/
author_profile: false
excerpt: "Building trustworthy AI systems for finance workflows — grounded generation, evaluation, and monitoring."
summary: "Selected roles — focused on high-stakes finance contexts and measurable reliability."
mindset_label: "Core themes"
mindset_cards:
  - icon: "◎"
    icon_bg: "var(--purple-bg)"
    icon_text: "var(--purple-text)"
    title: "Grounded by default"
    body: "Claim-first retrieval + citations when answers drive decisions."
  - icon: "▦"
    icon_bg: "var(--teal-bg)"
    icon_text: "var(--teal-text)"
    title: "Measured reliability"
    body: "Evaluation harnesses and monitoring loops, not vibes."
  - icon: "◇"
    icon_bg: "var(--amber-bg)"
    icon_text: "var(--amber-text)"
    title: "Workflow-first delivery"
    body: "Design systems around users, decisions, and failure modes."
---

{% include base_path %}

<div class="principles">
  <article class="principle">
    <div class="principle-num">Industry 01</div>
    <div class="principle-title">AI/ML Engineer · Savantiq <span class="pill">Jan 2026 – Present</span></div>
    <p class="principle-body">Building the AI core of an investment intelligence platform (high-level public summary only).</p>
    <div class="example-block">
      <div class="example-label">Focus</div>
      <div class="example-good">
        <ul>
          <li>Unified fragmented LLM usage into a modular RAG platform (Python/Django) powering chat, memo generation, AI summaries, and research pages — with query optimisation, claim-based retrieval, and grounded answer synthesis with inline citation.</li>
          <li>Designed a claim-first retrieval architecture to reduce context contamination, integrating AWS Bedrock via a multi-provider AI client (Azure OpenAI + Bedrock) for more consistent answers.</li>
          <li>Migrated a legacy chat entrypoint into a SmartRouter → ChatPipeline architecture with a test and rollout plan, simplifying production operations.</li>
          <li>Built an evaluation + monitoring loop capturing router decisions, retrieved context, and user feedback to support proactive quality control.</li>
        </ul>
      </div>
    </div>
  </article>

  <article class="principle">
    <div class="principle-num">Industry 02</div>
    <div class="principle-title">Data Science Consultant · LSEG <span class="pill">May 2022 – Jul 2023</span></div>
    <p class="principle-body">Real-time market monitoring at infrastructure scale.</p>
    <div class="example-block">
      <div class="example-label">Outcomes</div>
      <div class="example-good">
        <ul>
          <li>Reduced critical incident detection time by 80% by leading the Operational Readiness Centre project: automated, real-time market health monitoring pipelines (AWS S3, Glue, SageMaker, ElasticSearch, Snowflake, ServiceNow).</li>
          <li>Built end-to-end data pipelines across 5+ source systems, delivering operational insights via PowerBI and Kibana to Capital Markets stakeholders.</li>
          <li>Prototyped a predictive delay-detection model (AWS SageMaker), extending the system from reactive monitoring to proactive incident prevention.</li>
          <li>Built an LSTM-based email classifier (85% accuracy) reducing mean client response time by 25%.</li>
        </ul>
      </div>
    </div>
  </article>

  <article class="principle">
    <div class="principle-num">Industry 03</div>
    <div class="principle-title">Data Science Intern · Stellar Fusion <span class="pill">Aug 2023 – Oct 2023</span></div>
    <p class="principle-body">Financial metrics analysis from SEC filings.</p>
    <div class="example-block">
      <div class="example-label">Delivered</div>
      <div class="example-good">
        <ul>
          <li>Built a Python/SQL pipeline to ingest, clean, and structure financial metrics from SEC filings and MongoDB company data across 500+ company records.</li>
          <li>Automated cross-sector metric comparisons using K-means clustering and TF-IDF NLP — presented as a proof of concept to senior stakeholders.</li>
        </ul>
      </div>
    </div>
  </article>
</div>

