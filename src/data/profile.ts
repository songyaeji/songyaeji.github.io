export const profile = {
  name: 'Yaeji Song',
  nameKo: '송예지',
  handle: 'songyaeji',
  tagline: 'AI · Enterprise Security Researcher',
  affiliation: 'BoB 15th — AI Enterprise Security Track',
  school: 'Software & Cyber Security, Kyung Hee University',
  location: 'Seoul, KR',
  // "지금 뭐 하나" 한 줄 — 갱신은 이 문자열만 수정
  now: 'Training at Best of the Best 15th (AI Enterprise Security Track), researching MCP supply-chain threats.',
  interests: [
    'Supply Chain Security',
    'AI / LLM Security',
    'Proxy Phishing',
    'Vulnerability Analysis',
    'Privacy',
  ],
  avatar: 'https://avatars.githubusercontent.com/songyaeji',
  bio: [
    'AI·LLM 공급망 보안과 취약점 분석을 연구합니다. 현재 BoB(Best of the Best) 15기 AI기업보안 트랙에서 훈련 중이며, MCP(Model Context Protocol) 생태계의 공급망 위협 탐지를 주제로 연구하고 있습니다.',
    '보안 동향 수집·채용 공고 알림 같은 개인 인프라를 직접 만들어 운영하는 것을 좋아합니다. 목표는 금융권 AI 보안 담당자입니다.',
  ],
  contact: {
    github: 'https://github.com/songyaeji',
    email: 'skaehdlf0318@khu.ac.kr',
    // TODO: LinkedIn 프로필 URL 확보 후 교체
    linkedin: '#',
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
  ],
  skills: {
    Languages: ['Python', 'Go', 'C++', 'TypeScript'],
    'Security / Infra': ['Linux', 'Docker', 'Nginx', 'MySQL'],
    'AI / Data': ['scikit-learn', 'Anomaly Detection', 'LLM Agents / MCP'],
    Tools: ['Git', 'Burp Suite', 'Wireshark', 'Sigma'],
  },
  timeline: [
    {
      period: '2026 — present',
      title: 'Best of the Best (BoB) 15th',
      detail: 'AI Enterprise Security Track — KITRI. AI 기업보안 교육·연구 과정.',
      current: true,
    },
    {
      period: '2026',
      title: 'MCP Supply-Chain Security Research',
      detail: 'Remote MCP server rug-pull 탐지 연구 및 보안 도구 개발.',
      current: false,
    },
    {
      period: '2025',
      title: 'Proxy Phishing Research',
      detail: '프록시 기반 피싱(AitM) 기법·탐지 공동 연구.',
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
