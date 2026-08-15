---
title: "Auditable transaction monitoring platform"
excerpt: "Turning web-based transaction monitoring into a resilient, evidence-backed data product for buyer research."
collection: portfolio
---

High-level overview of production work (no proprietary details):

- Defined a transaction-monitoring data model spanning sources, crawl runs, pages, transactions, and supporting evidence.
- Migrated legacy records into an auditable RDS foundation while retaining immutable raw evidence in S3.
- Designed resilient crawling for pagination, rendering, retries, and source-level outcomes rather than opaque batch success/failure.
- Shaped the production path from notebook execution to durable asynchronous jobs using EventBridge, Lambda, and ECS Fargate.

**Skills showcased:** web crawling, Apify, PostgreSQL/RDS, AWS S3, DynamoDB, database migration, data lineage, provenance, asynchronous jobs, AWS EventBridge, AWS Lambda, ECS Fargate, monitoring.
