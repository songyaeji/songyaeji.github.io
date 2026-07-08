---
title: Proxy-based Phishing Research
summary: 번역 프록시 악용 URL 59,537건 대규모 조사 — IEEE Access 게재 (2026). 프록시 기반 피싱의 공격 구조 분석.
stack: [Python, Playwright, Web Security]
year: 2026
category: research
status: done
featured: true
order: 4
collaborators: Doyeon Kim · Yaeji Song · Jeman Park — SIFT Lab, Kyung Hee Univ.
role: 2저자 (참여율 50%) — 정기 수집 파이프라인 구축, URL 정규화 알고리즘 설계, 동적 분석·교차 검증, 논문 집필
highlights:
  - "논문 게재: A Large-Scale Investigation of URLs Abusing Translation Proxies — IEEE Access, vol. 14 (2026)"
  - urlscan.io API로 번역 프록시 악용 URL 59,537건 수집, 구글 도메인 변환 규칙을 역추적하는 URL 정규화 알고리즘으로 원본 악성 주소 98.4% 복원
  - Playwright 동적 분석·멀티 샘플링으로 은닉 경로 추적, VirusTotal 90여 개 엔진 교차 검증으로 랜덤 리디렉션 목적지의 40.9% 미탐지 확인
---

리버스 프록시로 실제 사이트를 실시간 중계하는 프록시 기반 피싱, 그중에서도 구글 번역
프록시(translate.goog)를 악용해 악성 도메인을 신뢰 도메인 뒤에 숨기는 공격을 대규모로
조사한 SIFT Lab 공동 연구. 보안 솔루션이 신뢰 도메인의 심층 검사를 생략하는 "신뢰의
전이"를 공격자가 파고드는 구조를 정량적으로 실증했다.

담당한 부분: urlscan.io API 기반 정기 크롤링 파이프라인 제작, one-to-many 유형의
프록시 악용 피싱 URL을 자동 탐색하는 알고리즘 구현, 구글의 도메인 변환 규칙을
역추적하는 URL 정규화 알고리즘 설계(원본 악성 주소 복원 성공률 98.4%), Playwright
동적 분석과 VirusTotal 교차 검증, 논문 집필.

결과는 IEEE Access에 게재되었다 —
[A Large-Scale Investigation of URLs Abusing Translation Proxies](https://doi.org/10.1109/ACCESS.2026.3701713)
(vol. 14, pp. 95791–95803, 2026). 본문 수치의 출처는 게재 논문이다.
