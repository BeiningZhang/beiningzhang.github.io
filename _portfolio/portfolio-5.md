---
title: "Versioned, thesis-led buyer decision support"
excerpt: "Turning AI-generated buyer recommendations into a recoverable, evidence-grounded workflow for advisers."
collection: portfolio
---

High-level overview of production work (no proprietary details):

- Built an adviser workflow for reviewing AI-generated buyer recommendations, preserving the generated score while recording attributable human overrides, recommendations, and reasons.
- Introduced a source-grounded buyer thesis that carries seller context, evidence, and selection logic consistently through candidate generation and assessment.
- Modelled each generation run as a versioned attempt with input snapshots, lifecycle state, and durable checkpoints, so failed or in-progress reruns never hide the latest completed result.
- Anchored generated candidates, reviewer feedback, and manual additions to canonical company identity, with provenance and duplicate handling that avoid unsafe automatic matches.
- Isolated optional enrichment from the critical path and added explicit rerun behaviour, preserving usable outputs while keeping incomplete attempts auditable.

**Skills showcased:** Python, Django, PostgreSQL/RDS, REST APIs, source-grounded generation, data modelling, workflow versioning, durable checkpoints, degraded-mode design, entity resolution, canonical identity, idempotency, transactional writes, conflict handling, human-in-the-loop review.
