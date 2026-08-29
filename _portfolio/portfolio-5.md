---
title: "Auditable buyer decision-support workflow"
excerpt: "Turning AI-generated buyer recommendations into a reviewable, identity-aware workflow for advisers."
collection: portfolio
---

High-level overview of production work (no proprietary details):

- Built an adviser workflow for reviewing AI-generated buyer recommendations, preserving the generated score while recording attributable human overrides, recommendations, and reasons.
- Anchored generated candidates, reviewer feedback, and manual additions to canonical company identity, with ambiguity and duplicate handling that avoids unsafe automatic matches.
- Consolidated separate workflow-stage lists into one project-scoped buyer universe with provenance, deterministic presentation, and durable unresolved candidates.
- Kept cross-service mutations reliable through one authoritative write owner, transactional persistence, typed conflicts, and idempotent retry behaviour.
- Added a single find-or-create flow so advisers can extend incomplete company data without leaving the decision workflow or losing auditability.

**Skills showcased:** Python, Django, PostgreSQL/RDS, REST APIs, data modelling, entity resolution, canonical identity, idempotency, transactional writes, conflict handling, human-in-the-loop review.
