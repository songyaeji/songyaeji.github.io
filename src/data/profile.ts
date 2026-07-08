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
  contact: {
    github: 'https://github.com/songyaeji',
    email: 'skaehdlf0318@khu.ac.kr',
    // TODO: LinkedIn 프로필 URL 확보 후 교체
    linkedin: '#',
  },
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
