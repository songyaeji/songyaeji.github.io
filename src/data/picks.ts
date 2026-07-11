// AI 도구 추천(Picks) 탭 데이터 — 항목·추천 이유는 직접 작성해 채운다.
// reason은 본인 경험 기반 주관 평가라 코드가 아닌 데이터로 분리해
// 수정 부담을 없앤다.

export type PickCategory = 'skill' | 'mcp' | 'harness' | 'article';

export interface Pick {
  name: string;
  category: PickCategory;
  link?: string;
  /** 한 줄 요약 — 카드 헤더 옆에 노출 */
  tagline: string;
  /** 추천 이유 — 직접 써보고 느낀 근거 위주로 작성 */
  reason: string;
}

export const pickSections: { key: PickCategory; cmd: string }[] = [
  { key: 'skill', cmd: 'ls picks/skills/' },
  { key: 'mcp', cmd: 'ls picks/mcp/' },
  { key: 'article', cmd: 'ls picks/articles/' },
];

// TODO: 아래는 구조 확인용 예시 — 실제 추천 항목·이유로 교체할 것
export const picks: Pick[] = [
  {
    name: 'caveman',
    category: 'skill',
    link: 'https://github.com/juliusbrussee/caveman',
    tagline: '출력 토큰 절약 — 군더더기 없는 응답 모드',
    reason:
      'Claude Code 응답에서 관사·수식어·인사말 같은 군더더기를 걷어내고 기술적 실질만 남기는 플러그인. 세션마다 출력이 짧아져 토큰이 절약되고, 긴 작업에서 요점 파악이 빨라진다. 코드·커밋 메시지·보안 경고는 정상 문장으로 유지되어 실사용에 지장이 없다.',
  },
  {
    name: '(예시) frontend-design skill',
    category: 'skill',
    link: 'https://github.com/anthropics/skills',
    tagline: '예시 항목 — 교체 필요',
    reason:
      '여기에 직접 써보고 좋았던 이유를 작성. 어떤 상황에서 효과가 있었는지, 무엇이 달라졌는지 경험 기반으로.',
  },
  {
    name: '(예시) Context7 MCP',
    category: 'mcp',
    link: 'https://github.com/upstash/context7',
    tagline: '예시 항목 — 교체 필요',
    reason: '여기에 추천 이유 작성.',
  },
  {
    name: '(예시) Building Effective Agents — Anthropic',
    category: 'article',
    link: 'https://www.anthropic.com/research/building-effective-agents',
    tagline: '예시 항목 — 교체 필요',
    reason: '여기에 읽고 좋았던 이유·핵심 인사이트를 작성.',
  },
];
