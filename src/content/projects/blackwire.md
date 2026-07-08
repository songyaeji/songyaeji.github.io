---
title: BlackWire — Threat Intelligence Dashboard
summary: 다크웹 유출·랜섬웨어 그룹·보안 뉴스를 수집해 MITRE ATT&CK과 매칭하는 위협 인텔리전스 대시보드. OSINT 수집 파트 담당.
stack: [Python, OSINT, MITRE ATT&CK, Streamlit]
year: 2025
status: done
repo: https://github.com/songyaeji/BlackWire
order: 6
role: 팀 프로젝트 (참여율 33%) — OSINT 기반 위협 데이터 수집 담당
highlights:
  - 다크웹 유출 정보·주요 랜섬웨어 그룹 활동 크롤링으로 분석의 원천 데이터셋 구축
  - Transformer 기반 모델로 보안 뉴스·CVE를 MITRE ATT&CK 기법과 의미 기반 매칭 (팀)
  - Shodan API 노출 서버 정보 수집, Streamlit·PyDeck 대시보드 시각화 (팀)
---

흩어진 사이버 위협 데이터를 자동으로 수집·분석·시각화하는 통합 위협 인텔리전스
대시보드. 유출 정황과 공격 기법을 자동으로 연결해야 신속한 대응과 보안 의사결정이
가능하다는 문제의식에서 출발한 경희대 팀 프로젝트다.

담당한 부분: OSINT 기법으로 다크웹에 올라온 유출 정보와 주요 랜섬웨어 그룹의 활동
내역을 크롤링해, 분석의 기반이 되는 원천 데이터셋을 구축했다. 팀 전체로는 MITRE
ATT&CK 공격 기법 정보를 받아 실제 유출 정황·보안 뉴스와 매칭하고, 결과를
Streamlit·PyDeck 대시보드로 탐색할 수 있게 구현했다.
