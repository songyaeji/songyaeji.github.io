export const profile = {
  name: 'Yaeji Song',
  nameKo: '송예지',
  handle: 'songyaeji',
  tagline: 'AI Security Researcher',
  affiliation: 'BoB 15th — AI Enterprise Security Track',
  school: 'Software Convergence, Kyung Hee University',
  // "지금 뭐 하나" — 홈 Currently 패널에 굵은 라벨로 표시
  now: [
    { label: 'BoB 15th', detail: 'AI Enterprise Security Track' },
    { label: 'SIFT Lab', detail: 'Undergraduate Researcher' },
  ],
  interests: [
    'AI / LLM Security',
    'Supply Chain Security',
    'Vulnerability Analysis',
  ],
  // GitHub 아바타 URL 직결이면 프로필 사진 변경 시 사이트도 예고 없이 바뀜 — 정적 고정
  avatar: '/avatar.jpg',
  bio: [
    'AI·LLM 공급망 보안을 연구하고 취약점 분석을 합니다. 현재 BoB(Best of the Best) 15기 AI기업보안 트랙에서 훈련 중이며, SIFT Lab(경희대)에서 MCP(Model Context Protocol) 생태계의 공급망 위협 탐지를 연구하고 있습니다.',
    '보안 동향 수집·채용 공고 알림 같은 개인 인프라를 직접 만들어 운영하는 것을 좋아합니다. 목표는 금융권 AI 보안 담당자입니다.',
  ],
  // 홈 statement 아래 보조 문구 — 지원서 진로계획에서 발췌한 보안 철학
  philosophy: '보안은 +를 만드는 일이 아닌 −를 막아 0을 지키는 일입니다.',
  contact: {
    github: 'https://github.com/songyaeji',
    linkedin: 'https://www.linkedin.com/in/yaeji-song-angma/',
    email: 'skaehdlf0318@gmail.com',
    lab: 'https://sites.google.com/view/siftlab/home',
  },
  // type: 'school'(경희대 소속 활동) vs 'external'(대외 교육·훈련 프로그램) — 홈에서 구분 표시
  // 시작일 내림차순(최신 먼저) — 홈 Education 타임라인이 이 순서 그대로 렌더된다
  education: [
    {
      school: 'AI Enterprise Security Track — KISA',
      degree: 'BoB 15th',
      period: '2026 — present',
      type: 'external',
    },
    {
      school: 'SIFT Lab, Kyung Hee University',
      degree: 'Undergraduate Researcher',
      period: '2025.06 — present',
      type: 'school',
    },
    {
      school: 'KITRI',
      degree: 'Whitehat School 1st',
      period: '2023.09 — 2024.03',
      type: 'external',
    },
    {
      school: 'Kyung Hee University',
      degree: 'B.S. Software Convergence',
      period: '2022 — present',
      type: 'school',
    },
  ],
  // 수상 — Activities 페이지 Awards 섹션에 표시
  awards: [
    {
      title: '정보통신산업진흥원장상',
      by: '2025 오픈소스 컨트리뷰션 아카데미(OSSCA) — Project Discovery 리드멘티',
      date: '2025.12',
    },
    {
      title: 'BDA 연합 데이터 분석/활용 공모전 최우수상',
      by: '사단법인 한국빅데이터학회',
      date: '2023.06',
    },
  ],
  // 프로젝트·기여로 근거를 댈 수 있는 것만 나열 (면접 검증 대비)
  timeline: [
    {
      period: '2026 — present',
      title: 'Best of the Best (BoB) 15th',
      detail: 'AI Enterprise Security Track — KISA. AI 기업보안 교육·연구 과정.',
      current: true,
    },
    {
      period: '2026 — present',
      title: 'MCP Supply-Chain Security Research',
      detail: 'Remote MCP server rug-pull 탐지 연구 — SIFT Lab @ Kyung Hee Univ.',
      current: true,
    },
    {
      period: '2025.06 — present',
      title: 'Undergraduate Researcher — SIFT Lab',
      detail: 'Security & Incident Forensic Technology Lab @ Kyung Hee Univ. (Prof. Jeman Park)',
      current: true,
    },
    {
      period: '2026.06',
      title: 'KCC 2026 논문 발표',
      detail:
        '"MCP 서버 메타데이터 기반 공급망 위협 탐지 연구 — Smithery Marketplace를 중심으로" — 한국컴퓨터종합학술대회(KCC 2026), 여수.',
      current: false,
    },
    {
      period: '2026.04 — 2026.05',
      title: 'KISA Security-Gym 수료',
      detail:
        '실전형 사이버훈련장 2개 과정 — 사이버공격과 위협의 이해(킬 체인·CTI), 버그헌팅실습훈련 초급(OWASP Top 10·CVE 사례).',
      current: false,
    },
    {
      period: '2025.12',
      title: 'KSC 2025 논문 발표',
      detail:
        '"대한민국 국가 도메인(.kr) 사칭 피싱 도메인 분석" — 한국소프트웨어종합학술대회(KSC 2025), 제주.',
      current: false,
    },
    {
      period: '2025.08 — 2025.11',
      title: 'OSSCA 2025 — Project Discovery 리드멘티',
      detail:
        '오픈소스 컨트리뷰션 아카데미. nuclei-templates merged PR 18건, KISA 가이드 기반 Linux 점검 템플릿 37개 작성 — 정보통신산업진흥원장상 수상.',
      current: false,
    },
    {
      period: '2025 — 2026',
      title: 'Translation-Proxy Abuse Research — IEEE Access',
      detail:
        '"A Large-Scale Investigation of URLs Abusing Translation Proxies" 게재 (IEEE Access, vol. 14, 2026) — SIFT Lab 공동 연구.',
      current: false,
    },
    {
      period: '2023.09 — 2024.03',
      title: 'Whitehat School 1st — KITRI',
      detail:
        '화이트해커 기초 역량 교육(네트워크·OSINT·리버싱·Linux). 수료 프로젝트로 게임 핵 분석·안티치트 개발(팀 7인) 수행.',
      current: false,
    },
    {
      period: '2023.06',
      title: 'BDA 연합 데이터 분석/활용 공모전 최우수상',
      detail: '사단법인 한국빅데이터학회 주최 — 데이터 분석 공모전 최우수상.',
      current: false,
    },
    {
      period: '2022 — present',
      title: 'Kyung Hee University',
      detail: 'B.S. Software Convergence (재학).',
      current: false,
    },
  ],
};
