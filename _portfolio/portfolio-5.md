---
title: "Versioned, thesis-led buyer decision support"
excerpt: "Turning buyer discovery and AI-generated recommendations into a reproducible, evidence-grounded workflow for advisers."
collection: portfolio
---

High-level overview of production work (no proprietary details):

- Built an adviser workflow for reviewing AI-generated buyer recommendations, preserving generated scores while recording attributable human overrides, recommendations, and reasons.
- Designed buyer-type-specific discovery: seller-relative financial and sector criteria for local competitors; transaction activity and product fit for consolidators; and explicit niche definitions, inclusion/exclusion rules, search paths, and stopping criteria for niche operators.
- Introduced a source-grounded buyer thesis that carries seller context, evidence, and selection logic consistently through candidate generation and assessment, with explicit boundaries around credit-consuming external-provider actions.
- Anchored generated candidates, reviewer feedback, and manual additions to canonical company identity, with durable company data, provenance, and duplicate handling that avoid unsafe automatic matches.
- Modelled generation runs as versioned attempts with input snapshots, lifecycle state, durable checkpoints, degraded enrichment, and explicit rerun behaviour so incomplete attempts remain auditable without hiding usable results.

**Skills showcased:** Python, Django, PostgreSQL/RDS, REST APIs, source-grounded generation, buyer research, LLM evaluation, data modelling, workflow versioning, durable checkpoints, degraded-mode design, entity resolution, canonical identity, evidence provenance, idempotency, transactional writes, conflict handling, human-in-the-loop review.
