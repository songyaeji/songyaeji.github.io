---
title: Security Job Feed Bot
summary: 관심 기업 65곳(8그룹)의 정보보안 직무 채용을 매일 아침 브리핑하는 봇. 오픈API 수집·중복 제거·마감 리마인더 파이프라인.
stack: [Python, Open API, Discord API]
year: 2026
status: active
repo: https://github.com/songyaeji/job-feed-bot
order: 6
role: 개인 프로젝트 — 설계·구현·운영 전부
highlights:
  - 잡알리오·사람인·고용24 오픈API + 구글뉴스 RSS를 결합해 기업 65곳(8그룹) 공고 추적 (README에 구성 명세)
  - 공고 마감일을 추적해 D-3·D-day 리마인더 자동 발송
  - 주 1회 LLM 큐레이션으로 직무별 준비 자료 브리핑
---

보안 직군 취업 준비를 자동화한 개인 인프라. 기업 그룹·직무 키워드는 config.yaml에서
선언적으로 관리하고, API 키가 없는 소스는 해당 축만 건너뛰는 fail-open 구조라
부분 장애에도 매일 아침 브리핑이 끊기지 않는다.
