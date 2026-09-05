---
title: "Resilient AI deal-preparation orchestration"
excerpt: "Production-grade asynchronous research workflows with safe retries, cross-service failure visibility, and mandate-specific context."
collection: portfolio
---

High-level overview of production work (no proprietary details):

- Productionised an AI meeting-preparation workflow across orchestration, request handling, asynchronous workers, persistence, and delivery, with durable correlation and explicit lifecycle state.
- Made launches and reruns retry-safe through idempotency keys, conditional state transitions, deadline-aware acknowledgement, and recovery of uncertain task starts.
- Added structured, redacted failure alerts across orchestration and application boundaries without allowing monitoring outages to mask the original failure.
- Preserved seller-specific research and buyer context through each workflow hand-off, while isolating optional analysis so partial failures remain visible and recoverable.
- Used bounded concurrency and outcome telemetry to make external-model fan-out faster without turning it into an opaque reliability risk.

**Skills showcased:** Python, AWS, ECS Fargate, asynchronous jobs, job orchestration, distributed workflows, idempotency, retry design, async state reconciliation, bounded concurrency, failure isolation, failure alerting, structured logging, n8n, Slack, data reconciliation, safe production rollouts.
