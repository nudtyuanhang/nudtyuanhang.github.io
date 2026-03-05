---
layout: post
title: "DeepMind's Mind Evolution: Scaling LLM Inference with Evolutionary Search"
date: 2025-01-22 10:00:00
inline: false
related_posts: false
tags: [LLM, Inference, DeepMind, Research]
categories: [AI Research]
---

Google DeepMind在2025年1月发布了一项重要的研究——**Mind Evolution**，这是一种利用进化搜索策略来扩展LLM推理时间计算的新方法。该研究发表在arXiv上，为大型语言模型的推理优化开辟了新的方向。

## 核心创新

Mind Evolution的核心思想是将遗传算法框架应用于LLM推理过程，主要包含两个关键组件：

1. **搜索算法**：允许模型生成多个候选响应，而非一次性生成最终答案
2. **遗传算法**：对候选响应进行交叉、变异和选择，逐步优化结果

## 主要成果

在自然语言规划任务上，Mind Evolution取得了显著成果：

- **TravelPlanner基准**：解决率超过98%
- **Natural Plan基准**：同样达到98%以上的成功率
- 显著优于Best-of-N和Sequential Revision等基线方法

## 技术特点

- **无需形式化问题**：只要有解决方案评估器即可使用
- **易于并行化**：作为进化方法，可以通过并行计算轻松扩展
- **推理时间计算扩展**：性能随推理时间计算预算增加而持续提升

这项工作代表了推理时间扩展（Inference-time Scaling）领域的重要突破，为复杂推理任务提供了新的解决思路。

**论文链接**: [Evolving Deeper LLM Thinking (arXiv:2501.09891)](https://arxiv.org/abs/2501.09891)
