---
title: Remote MCP Rug-Pull Detection
summary: 원격 MCP 서버의 도구 정의 변조(rug-pull)를 탐지하는 공급망 보안 연구.
year: 2026
category: research
status: research
private: true
featured: true
order: 1
role: SIFT Lab(경희대) 학부연구생 연구 — 위협 모델링과 탐지 도구 구현
tags: [MCP, LLM, Supply Chain]
highlights:
  - 원격 MCP 서버가 승인 후 도구 정의(이름·설명·스키마)를 몰래 바꾸는 rug-pull을 시계열 관점에서 탐지
  - 선행 연구로 MCP 서버 메타데이터 기반 공급망 위협 탐지 연구를 [KCC 2026에서 발표](/publications/)
  - "연구 데이터 시각화 대시보드 공개: [MCP Dashboard](https://songyaeji.github.io/mcp-dashboard/)"
---

MCP(Model Context Protocol) 서버는 클라이언트가 한 번 승인한 뒤에도 서버 쪽에서
도구 정의를 바꿀 수 있다 — 승인 시점과 실행 시점의 도구가 다를 수 있는 **rug-pull**
공급망 위협이다.

SIFT Lab(경희대)에서 진행 중인 연구로, 승인 이후의 도구 정의 변조를 시계열 관점에서
감시·탐지하는 방법을 설계·구현하고 있다. 구체적인 방법론·결과는 아직 비공개이며
공개 가능한 시점에 갱신한다.
