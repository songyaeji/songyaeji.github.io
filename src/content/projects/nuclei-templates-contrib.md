---
title: Nuclei Templates — OSS Contribution
summary: projectdiscovery/nuclei-templates에 보안 점검 템플릿 기여 — merged PR 18건. Kubernetes API 서버 하드닝, SMTP/DNS 보안 체크, CVE 탐지 템플릿.
stack: [YAML, Nuclei, Kubernetes Security]
year: 2025
status: done
repo: https://github.com/projectdiscovery/nuclei-templates/pulls?q=author%3Asongyaeji+is%3Amerged
featured: true
order: 2
role: 개인 기여 — 템플릿 작성부터 리뷰 대응·머지까지
highlights:
  - 커뮤니티 표준 취약점 스캐너 nuclei의 공식 템플릿 저장소에 merged PR 18건 (링크에서 전체 확인 가능)
  - Kubernetes API 서버 하드닝 체크(익명 접근, 토큰 인증 파일, bind address 등) 시리즈 작성
  - SMTP/DNS 보안 설정 점검, Linux EOL 커널 탐지, CVE 탐지 템플릿 기여
---

nuclei는 커뮤니티 템플릿 기반으로 동작하는 오픈소스 취약점 스캐너로, 템플릿 저장소는
전 세계 보안 엔지니어가 리뷰하는 공개 기여 공간이다. 실제 점검 수요가 있는 항목
(K8s API 서버 설정, 메일·DNS 인프라 하드닝)을 골라 템플릿을 작성했고, 메인테이너
리뷰를 거쳐 병합됐다 — 저장소에서 기여 이력 전체를 검증할 수 있다.
