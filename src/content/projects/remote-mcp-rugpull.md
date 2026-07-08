---
title: Remote MCP Rug-Pull Detection
summary: 원격 MCP 서버가 승인 이후 도구 정의를 몰래 바꾸는 rug-pull 공격을 탐지하는 연구. 도구 스키마 변조 감시와 공급망 관점의 위협 모델링.
stack: [Python, MCP, LLM Security]
year: 2026
status: research
private: true
featured: true
order: 1
role: SIFT Lab(경희대) 학부연구생 연구 — 위협 모델링과 탐지 도구 구현
---

MCP(Model Context Protocol)는 LLM 에이전트가 외부 도구를 쓰는 사실상의 표준이 되고 있지만,
원격 MCP 서버는 클라이언트가 한 번 승인한 뒤에도 서버 쪽에서 도구 정의(이름·설명·스키마)를
바꿀 수 있다. 승인 시점과 실행 시점의 도구가 다를 수 있다는 것 — 이른바 **rug-pull** — 이
이 연구가 다루는 공급망 위협이다.

승인 이후의 도구 정의 변조를 감시·탐지하는 방법을 설계하고 구현하는 것이 목표이며,
SIFT Lab(경희대)에서 진행 중인 연구라 구체적인 방법론·결과는 아직 비공개다.
공개 가능한 시점에 갱신하며, 연구 과정에서 수집한 MCP 생태계 데이터는
[MCP Dashboard](https://songyaeji.github.io/mcp-dashboard/)에서 확인할 수 있다.
