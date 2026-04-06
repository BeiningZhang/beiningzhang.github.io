---
layout: archive
title: "CV"
permalink: /cv/
author_profile: false
redirect_from:
  - /resume
header:
  overlay_image: "hero-gradient.svg"
  overlay_filter: "rgba(17, 24, 39, 0.55)"
  overlay_color: "#111827"
excerpt: "AI/ML Engineer + Researcher focused on grounded LLM systems in high-stakes domains."
---

{% include base_path %}

<div class="cv-header">
  <div class="cv-header__name">Beining Zhang</div>
  <div class="cv-header__links">
    <a href="mailto:beiningzhang001@gmail.com">beiningzhang001@gmail.com</a> ·
    <a href="https://www.linkedin.com/in/beiningzhang">LinkedIn</a> ·
    <a href="https://scholar.google.com/citations?user=0Ze6XHYAAAAJ&hl=en">Google Scholar</a>
  </div>
</div>

## Professional Experience

<div class="cv-entry">
  <div class="cv-entry__header">
    <div><span class="cv-entry__role">AI/ML Engineer</span> <span class="cv-entry__org">· Savantiq</span></div>
    <div class="cv-entry__dates">Jan 2026 – Present</div>
  </div>
  <div class="cv-entry__tagline">Building the AI core of an investment intelligence platform (high-level public summary only).</div>
  <ul>
    <li>Architected a unified RAG pipeline (Python/Django) powering chat, memo generation, AI summaries, and research pages — replacing fragmented LLM calls with a modular system covering query optimisation, claim-based retrieval, and grounded answer synthesis with inline citation.</li>
    <li>Designed a claim-first retrieval architecture to eliminate context contamination, integrating AWS Bedrock via a new multi-provider AI client (Azure OpenAI + Bedrock), improving answer consistency and reducing hallucination.</li>
    <li>Led migration of legacy chat entrypoint to a modular SmartRouter → ChatPipeline architecture, eliminating a dual-entrypoint system with a full test and rollout plan.</li>
    <li>Built an LLM evaluation framework capturing router decisions, retrieved context, and user feedback — enabling proactive quality monitoring rather than reactive incident response.</li>
  </ul>
</div>

<div class="cv-entry">
  <div class="cv-entry__header">
    <div><span class="cv-entry__role">Research Collaborator</span> <span class="cv-entry__org">· Harvard Health System Innovation Lab</span></div>
    <div class="cv-entry__dates">Nov 2024 – Present</div>
  </div>
  <div class="cv-entry__tagline">Automated medical research classification at scale.</div>
  <ul>
    <li>Built a few-shot LLM classifier (GPT-4o-mini + RF ensemble) that automated classification of a 200,000-record cancer research dataset with 93% human-machine agreement — reducing manual labelling effort by over 80%.</li>
    <li>Designed a precision-first abstention mechanism that eliminated human verification of positive decisions, enabling clinical experts to focus on genuinely ambiguous cases.</li>
    <li>Co-authored: <em>Public and philanthropic research funding, publications, and research networks for cancer in the Commonwealth and globally between 2016 and 2023: a comparative analysis</em>, The Lancet Oncology 26(9), e466–e476, 2025.</li>
    <li>Invited to the Lancet Commissioners meeting to advise on AI's role in global cancer control and research equity.</li>
  </ul>
</div>

<div class="cv-entry">
  <div class="cv-entry__header">
    <div><span class="cv-entry__role">Research Assistant</span> <span class="cv-entry__org">· University of Southampton</span></div>
    <div class="cv-entry__dates">Jun 2024 – Present</div>
  </div>
  <div class="cv-entry__tagline">AI agent evaluation, governance, and participatory design.</div>
  <ul>
    <li>Achieved top ranking at the Concordia Contest 2024 with a novel LLM agent architecture for cooperative multi-agent interaction — published at NeurIPS Datasets and Benchmarks Track 2025.</li>
    <li>Researching AI governance, explainability, and public engagement in participatory agentic system design — paper under review at ACM CHI.</li>
    <li>Selected for the Cooperative AI Summer School 2025; developed evaluation metrics for exploitability in multi-agent systems.</li>
  </ul>
</div>

<div class="cv-entry">
  <div class="cv-entry__header">
    <div><span class="cv-entry__role">Data Science Intern</span> <span class="cv-entry__org">· Stellar Fusion</span></div>
    <div class="cv-entry__dates">Aug 2023 – Oct 2023</div>
  </div>
  <div class="cv-entry__tagline">Financial metrics analysis from SEC filings.</div>
  <ul>
    <li>Built a Python/SQL pipeline to ingest, clean, and structure financial metrics from SEC filings and MongoDB company data across 500+ company records.</li>
    <li>Automated cross-sector metric comparisons using K-means clustering and TF-IDF NLP — presented as a proof of concept to senior stakeholders.</li>
  </ul>
</div>

<div class="cv-entry">
  <div class="cv-entry__header">
    <div><span class="cv-entry__role">Data Science Consultant</span> <span class="cv-entry__org">· LSEG</span></div>
    <div class="cv-entry__dates">May 2022 – Jul 2023</div>
  </div>
  <div class="cv-entry__tagline">Real-time market monitoring at infrastructure scale.</div>
  <ul>
    <li>Led the Operational Readiness Centre project — reduced critical incident detection time by 80% through automated, real-time market health monitoring pipelines (AWS S3, Glue, SageMaker, ElasticSearch, Snowflake, ServiceNow).</li>
    <li>Built end-to-end data pipelines across 5+ source systems, delivering operational insights via PowerBI and Kibana to Capital Markets stakeholders.</li>
    <li>Prototyped a predictive delay-detection model using AWS SageMaker, extending the system from reactive monitoring to proactive incident prevention.</li>
    <li>Developed an LSTM-based email classifier (85% accuracy) reducing mean client response time by 25%.</li>
  </ul>
</div>

## Education

<div class="cv-entry">
  <div class="cv-entry__header">
    <div><span class="cv-entry__role">Integrated Master’s Degree with Honours (2:1)</span> <span class="cv-entry__org">· University of Warwick</span></div>
    <div class="cv-entry__dates">Oct 2017 – Jul 2021</div>
  </div>
  <ul>
    <li><strong>Course:</strong> Master of Mathematics, Operational Research, Statistics, and Economics (MMORSE) (Actuarial and Financial Mathematics Stream)</li>
    <li><strong>Dissertation:</strong> <em>Modeling of Systemic Risk</em> (72%) — analysed the role of financial networks in systemic stability and shock propagation.</li>
  </ul>
</div>

<div class="cv-entry">
  <div class="cv-entry__header">
    <div><span class="cv-entry__role">Cooperative AI Summer School</span> <span class="cv-entry__org">· Cooperative AI Foundation</span></div>
    <div class="cv-entry__dates">Jul 2025</div>
  </div>
  <ul>
    <li>Selected for the program on AI safety and multi-agent systems; developed metrics for evaluating exploitability in multi-agent systems.</li>
  </ul>
</div>

## Skills

<div class="cv-entry">
  <div class="cv-entry__header">
    <div><span class="cv-entry__role">Core</span></div>
  </div>
  <p><span class="pub-chip">Python</span><span class="pub-chip">SQL</span><span class="pub-chip">Django</span><span class="pub-chip">AWS</span><span class="pub-chip">LLMs</span><span class="pub-chip">RAG</span><span class="pub-chip">Evaluation</span><span class="pub-chip">Multi-agent</span></p>
  <p><span class="pub-chip">S3</span><span class="pub-chip">Glue</span><span class="pub-chip">SageMaker</span><span class="pub-chip">ElasticSearch</span><span class="pub-chip">Snowflake</span><span class="pub-chip">MongoDB</span><span class="pub-chip">PowerBI</span><span class="pub-chip">Kibana</span></p>
</div>

## Publications

For the full list (and links), see the <a href="/publications/">Publications</a> page. Selected items:

- *Public and philanthropic research funding, publications, and research networks for cancer in the Commonwealth and globally between 2016 and 2023: a comparative analysis*, The Lancet Oncology 26(9), e466–e476, 2025
- *Evaluating generalization capabilities of LLM-based agents in mixed-motive scenarios using Concordia*, NeurIPS 2025 Datasets and Benchmarks Track, 2025
- *Three Lessons from Citizen-Centric Participatory AI Design*, PARTICIPATE-AI (IUI ’26 Workshop), 2026


<!-- Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Service and leadership
======
* Currently signed in to 43 different slack teams -->
