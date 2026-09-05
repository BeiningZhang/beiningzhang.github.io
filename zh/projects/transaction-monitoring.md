---
layout: default
title: "可审计交易监控平台"
permalink: /zh/projects/transaction-monitoring/
lang: zh
english_url: /portfolio/portfolio-4/
parent_anchor: projects
parent_title: 项目
---

以下为生产工作高层概述（不含专有细节）：

- 构建由证据支持的监控工作流，将买方公告转换为可供研究和交易准备审查的交易情报，并通过经身份验证的内部门户提供。
- 将重复公告归并为标准交易，同时保留多个支撑来源，供审计与人工核验。
- 在源、爬取与抽取阶段引入范围受控的生产金丝雀、买方级失效隔离、检查点感知重试和有界编排，使批处理可安全扩展而不耗尽共享资源。
- 通过持久化生命周期状态、单项目对账、明确的部分失效结果与阶段感知的结构化日志，使分布式运行更易诊断。
- 使用 EventBridge、Lambda、ECS Fargate、RDS 和 S3，将生产路径从 Notebook 执行演进为异步任务。

**展示技能：** 网络爬取、Apify、PostgreSQL/RDS、AWS S3、DynamoDB、数据库迁移、数据血缘、证据来源、异步任务、任务编排、分布式工作流、幂等性、交易去重、失效隔离、结构化日志、人工参与审查、安全生产上线、AWS EventBridge、AWS Lambda、ECS Fargate、监控。
