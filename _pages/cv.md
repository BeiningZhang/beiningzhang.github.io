---
layout: archive
title: ""
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

## Professional Experience

---

**AI/ML Engineer — Building the AI core of an investment intelligence platform**
Savantiq | Jan 2026 – Present

- Architected a unified RAG pipeline (Python/Django) powering chat, memo generation, AI summaries, and research pages — replacing fragmented LLM calls with a modular system covering query optimisation, claim-based retrieval, and grounded answer synthesis with inline citation.
- Designed a claim-first retrieval architecture to eliminate context contamination, integrating AWS Bedrock via a new multi-provider AI client (Azure OpenAI + Bedrock), improving answer consistency and reducing hallucination.
- Led migration of legacy chat entrypoint to a modular SmartRouter → ChatPipeline architecture, eliminating a dual-entrypoint system with a full test and rollout plan.
- Built an LLM evaluation framework capturing router decisions, retrieved context, and user feedback — enabling proactive quality monitoring rather than reactive incident response.

**Research Collaborator — Automated medical research classification at scale**
Harvard Health System Innovation Lab | Nov 2024 – Present

- Built a few-shot LLM classifier (GPT-4o-mini + RF ensemble) that automated classification of a 200,000-record cancer research dataset with 93% human-machine agreement — reducing manual labelling effort by over 80%.
- Designed a precision-first abstention mechanism that eliminated human verification of positive decisions, enabling clinical experts to focus on genuinely ambiguous cases.
- Co-authored: *Public and philanthropic research funding for cancer in the Commonwealth*, The Lancet Oncology 26(9), 2025. **[1]**
- Invited to the Lancet Commissioners meeting to advise on AI's role in global cancer control and research equity.

**Research Assistant — AI agent evaluation and governance research**
University of Southampton | Jun 2024 – Present

- Achieved top ranking at the Concordia Contest 2024 with a novel LLM agent architecture for cooperative multi-agent interaction — published at NeurIPS Datasets and Benchmarks Track 2025. **[2]**
- Researching AI governance, explainability, and public engagement in participatory agentic system design — paper under review at ACM CHI. **[3]**
- Selected for the Cooperative AI Summer School 2025; developed evaluation metrics for exploitability in multi-agent systems.

**Data Science Intern — Financial metrics analysis from SEC filings**
Stellar Fusion | Aug 2023 – Oct 2023

- Built a Python/SQL pipeline to ingest, clean, and structure financial metrics from SEC filings and MongoDB company data across 500+ company records.
- Automated cross-sector metric comparisons using K-means clustering and TF-IDF NLP — presented as a proof of concept to senior stakeholders.

**Data Science Consultant — Real-time market monitoring at infrastructure scale**
LSEG | May 2022 – Jul 2023

- Led the Operational Readiness Centre project — reduced critical incident detection time by 80% through automated, real-time market health monitoring pipelines (AWS S3, Glue, SageMaker, ElasticSearch, Snowflake, ServiceNow).
- Built end-to-end data pipelines across 5+ source systems, delivering operational insights via PowerBI and Kibana to Capital Markets stakeholders.
- Prototyped a predictive delay-detection model using AWS SageMaker, extending the system from reactive monitoring to proactive incident prevention.
- Developed an LSTM-based email classifier (85% accuracy) reducing mean client response time by 25%.

## Education

---

**Integrated Master’s Degree with Honours (2:1)**
University of Warwick | Coventry, UK | Oct 2017 - Jul 2021

- **Course:** Master of Mathematics, Operational Research, Statistics, and Economics (MMORSE) (Actuarial and Financial Mathematics Stream)
- **Modules:** Mathematical Statistics, Programming for Data Science, Topics in Data Science, Statistical Learning and Big Data, Designed Experiments with Advanced Topics, Finance & Financial Reporting, Quantitative Economics
- **Dissertation:** *Modeling of Systemic Risk* (72%)*,* Analysed the role of financial networks in systemic stability and shock propagation.

**Cooperative AI Summer School 2025**
Cooperative AI Foundation | Marlow, UK | Jul 2025

- Selected for this intensive program on AI safety and multi-agent systems (MAS). Developed key metrics and novel methods for evaluating the exploitability of AI agents.

## Skills

---

**Programming:** SQL, Python, R • **Database:** ElasticSearch, MongoDB, Snowflake, ServiceNow • **Cloud Computing:** Amazon Web Services (AWS), S3, Glue, SageMaker •  **Data Visualisation:** PowerBI, Kibana, Tableau, QuickSight • **Machine Learning (ML):** scikit-learn, TensorFlow, PyTorch • **Natural Language Processing (NLP)** • **Large Language Models (LLMs):** OpenAI API, HuggingFace, open-source models, model fine-tuning • **Multi-Agent Systems (MAS):** retrieval-augmented generation (RAG), LangChain • **Version Control:** Git, Bitbucket • **Project Management:** Jira, Confluence, Notion • **A/B Test**

## Publications

---

**[1]** *Public and philanthropic research funding, publications, and research networks for cancer in the Commonwealth and globally between 2016 and 2023: a comparative analysis*, The Lancet Oncology 26(9), e466–e476, 2025
**[2]** *Evaluating generalization capabilities of LLM-based agents in mixed-motive scenarios using Concordia*, arXiv preprint arXiv:2512.03318, 2025
**[3]** *Three Lessons from Citizen-Centric Participatory AI Design*, arXiv preprint arXiv:2602.08554, 2026
**[4]** *Multiagent systems based on large language models: a citizen-centric perspective*, 2025


💡 **I have right to work in the UK. I will not require sponsorship for employment visa status now or in the future.**


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
