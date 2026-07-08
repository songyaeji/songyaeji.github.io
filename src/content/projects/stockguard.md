---
title: StockGuard for YouTube
summary: 불법 주식 리딩방 의심 YouTube 채널을 행동·구조 패턴으로 가려내는 데이터 분석. 규제어 매칭과 Random Forest 점수를 결합한 2단계 리스트 산출.
stack: [Python, scikit-learn, YouTube API]
year: 2026
status: done
repo: https://github.com/songyaeji/StockGuard_for_YouTube
order: 7
role: 경희대 응용데이터분석 텀프로젝트
highlights:
  - 검색어 30개로 채널 수집(YouTube Data API) → EDA → 가설검정 3건(H1/H2/H3) → 모델링 파이프라인
  - 차단 리스트는 규제어 매칭 AND 모델 운영점(precision ≥ 0.9), 의심 리스트는 운영점(precision ≥ 0.7) — 목적별 임계 분리
  - 산출 리스트에 근거 컬럼(매칭 규제어·점수) 동봉, 금감원 제보용 수동 검증 리스트 별도 관리
---

키워드 차단만으로는 회피형 리딩방을 못 잡는다는 문제의식에서 출발했다. 구독-조회
비율, 채널 나이, 연락처 노출 같은 행동·구조 피처로 의심 점수를 만들고, 법적 근거가
되는 금융위·금감원 규제어 매칭과 결합해 "확실한 것만 차단, 회피형은 검토 큐"라는
2단계 운영 정책으로 설계했다. 차단·의심 판단은 분석 기반 의심 정보이며 최종 판단은
금융당국 몫이라는 한계를 산출물에 명시했다.
