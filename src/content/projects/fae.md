---
title: FAE — File Analysis Exiftool
summary: 파일 헤더·메타데이터 구조를 분석해 확장자 조작을 탐지하는 GUI 도구. 1인 개발.
stack: [Python, Digital Forensics]
year: 2025
status: done
repo: https://github.com/songyaeji/FAE_fileAnalysisExiftool
order: 7
role: 1인 프로젝트 — 설계·구현 전부
highlights:
  - Hex 헤더(Magic Number) 분석으로 실제 파일 포맷 자동 감지, 확장자 불일치 시 경고
  - VirusTotal 연동 — 파일 해시 기반 악성 여부 조회
---

다양한 파일 포맷의 헤더와 메타데이터 구조를 분석해 조작 여부를 식별하는 GUI 도구.
파일의 Hex 헤더를 분석해 실제 포맷을 자동으로 감지하고, 확장자와 불일치하면 경고를
출력한다. VirusTotal 연결 버튼으로 해당 파일의 해시 기반 악성 여부도 확인할 수 있다.
파일 포맷별 Magic Number와 메타데이터 구조를 직접 다루며 포렌식 기초를 다진
학습 겸 실용 프로젝트.
