---
title: Trend of Security — Discord Feed Bot
summary: 보안 뉴스·연구·취약점 피드 20여 종을 수집해 매일 아침 카드뉴스로 브리핑하는 자동화 봇. 보안 동향 추적을 루틴으로 만든 개인 인프라.
stack: [Python, Discord API, GitHub Actions, LLM]
year: 2026
status: active
repo: https://github.com/songyaeji/sec-feed-bot
featured: true
order: 3
role: 개인 프로젝트 — 설계·구현·운영 전부
highlights:
  - CISA KEV·NVD·KISA 보호나라·보안 블로그·탑티어 학회 등 소스 20여 종 수집 (config.yaml에 전체 목록)
  - 대형 사건은 LLM 판정으로 즉시 알림, 나머지는 매일 07:00 KST 카드뉴스 다이제스트로 발행하는 하이브리드 구조
  - 발송 직전 결정적 preflight 게이트(첨부 상한·카드-링크 대응·웹훅 유출 차단) + 실패 시 텍스트 폴백
  - GitHub Actions cron으로 무인 운영, 수집 이력·위키를 저장소에 자동 커밋
---

보안 동향을 매일 따라가는 일을 사람 손이 아니라 파이프라인에 맡긴 프로젝트.
RSS가 없는 금융보안원·금융감독원 게시판은 크롤러를 직접 작성했고, 교차 소스 중복은
CVE ID와 제목 유사도로 제거한다.

수집된 항목은 LLM "사서"가 중요도를 판정해 위키(사건별 타임라인)에 적립하고, 상위
항목만 카드뉴스에 실린다. 카드는 HTML 템플릿을 Playwright로 렌더한 PNG이며, 이
사이트의 [Trend 탭](/trend/)에도 매일 자동 게시된다.
