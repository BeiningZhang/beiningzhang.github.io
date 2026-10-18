---
title: "Event-driven project knowledge change detection"
excerpt: "Detecting material additions to project knowledge and recording retry-safe, auditable deltas for downstream workflows."
collection: portfolio
---

High-level overview of production work (no proprietary details):

- Built a project-scoped Knowledge Base workflow that evaluates newly ingested files for material information and records either a concise delta or an explicit no-new-information result.
- Persisted one immutable result per source file in PostgreSQL/RDS, using a unique source identifier so duplicate events and retries cannot create duplicate records.
- Kept failure semantics explicit: unsuccessful Knowledge Base analysis writes no result and is retried, while repeated events return the existing outcome.
- Deployed the MVP with AWS Lambda, SQS, CloudFormation, a worker, and database infrastructure, while deliberately excluding downstream refresh automation from this first version.

**Skills showcased:** AWS Lambda, SQS, CloudFormation, PostgreSQL/RDS, event-driven architecture, Knowledge Base integration, material-change detection, immutable persistence, idempotency, retry design.
