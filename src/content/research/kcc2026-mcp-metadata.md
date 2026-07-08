---
title: "MCP 서버 메타데이터 기반 공급망 위협 탐지 연구 — Smithery Marketplace를 중심으로"
venue: "KCC 2026 (한국컴퓨터종합학술대회), 여수"
year: 2026
authors: []
tags: [MCP, Supply Chain, LLM Security, Measurement]
status: published
order: 1
---

MCP(Model Context Protocol) 서버의 공급망 위협을 코드 분석 없이 메타데이터만으로
분석한 연구. Smithery Marketplace에 게시된 MCP 서버 3,806개의 메타데이터를 수집해
데이터셋을 구축하고, tool name conflict·typo-squatting·schema spoofing·preference
manipulation 4가지 위협을 탐지하는 프레임워크를 제안했다. 분석 결과 tool name conflict
1,493건 중 99.1%(1,479건)가 input schema까지 일치하는 schema spoofing으로 확인돼,
미인증 서버가 공식 서버의 인터페이스를 복제하고 있음을 실증했다. 2026년 6월
한국컴퓨터종합학술대회(KCC 2026)에서 발표했으며, 진행 중인 rug-pull 탐지 연구의
선행 연구다. 수집 데이터 현황은 [MCP Dashboard](https://songyaeji.github.io/mcp-dashboard/)에서
확인할 수 있다.
