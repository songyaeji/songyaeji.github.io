export const profile = {
  name: 'Yaeji Song',
  nameKo: '송예지',
  handle: 'songyaeji',
  tagline: 'AI Security Researcher',
  affiliation: 'BoB 15th — AI Enterprise Security Track',
  school: 'Software & Cyber Security, Kyung Hee University',
  location: 'Seoul, KR',
  // "지금 뭐 하나" — 홈 Currently 패널에 굵은 라벨로 표시
  now: [
    { label: 'BoB 15th', detail: 'AI Enterprise Security Track — KITRI' },
    { label: 'SIFT Lab', detail: 'Undergraduate Researcher @ Kyung Hee Univ.' },
  ],
  interests: [
    'Supply Chain Security',
    'AI / LLM Security',
    'Proxy Phishing',
    'Vulnerability Analysis',
    'Privacy',
  ],
  // GitHub 아바타 URL 직결이면 프로필 사진 변경 시 사이트도 예고 없이 바뀜 — 정적 고정
  avatar: '/avatar.jpg',
  bio: [
    'AI·LLM 공급망 보안과 취약점 분석을 연구합니다. 현재 BoB(Best of the Best) 15기 AI기업보안 트랙에서 훈련 중이며, SIFT Lab(경희대)에서 MCP(Model Context Protocol) 생태계의 공급망 위협 탐지를 연구하고 있습니다.',
    '보안 동향 수집·채용 공고 알림 같은 개인 인프라를 직접 만들어 운영하는 것을 좋아합니다. 목표는 금융권 AI 보안 담당자입니다.',
  ],
  contact: {
    github: 'https://github.com/songyaeji',
    email: 'skaehdlf0318@khu.ac.kr',
    // TODO: LinkedIn 프로필 URL 확보 시 항목 추가
  },
  education: [
    {
      school: 'Kyung Hee University',
      degree: 'B.S. Software & Cyber Security',
      period: '2021 — present',
    },
    {
      school: 'KITRI Best of the Best 15th',
      degree: 'AI Enterprise Security Track',
      period: '2026 — present',
    },
    {
      school: 'SIFT Lab, Kyung Hee University',
      degree: 'Undergraduate Researcher',
      period: '2025.06 — present',
    },
  ],
  // 프로젝트·기여로 근거를 댈 수 있는 것만 나열 (면접 검증 대비)
  skills: {
    Languages: ['Python', 'Go', 'C++', 'TypeScript'],
    'Security & Infra': ['Linux', 'Docker', 'Git', 'GitHub Actions', 'Nuclei'],
    'AI & Data': ['scikit-learn', 'Anomaly Detection', 'LLM Agents / MCP'],
  },
  timeline: [
    {
      period: '2026 — present',
      title: 'Best of the Best (BoB) 15th',
      detail: 'AI Enterprise Security Track — KITRI. AI 기업보안 교육·연구 과정.',
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
      period: '2025.08 — 2025.11',
      title: 'OSS Contribution — nuclei-templates',
      detail: 'projectdiscovery/nuclei-templates merged PR 18건 (K8s 하드닝·SMTP/DNS·CVE 템플릿).',
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
      period: '2021 — present',
      title: 'Kyung Hee University',
      detail: 'B.S. Software & Cyber Security (재학).',
      current: false,
    },
  ],
};
