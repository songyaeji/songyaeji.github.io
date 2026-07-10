// AI 도구 추천(Picks) 탭 데이터 — 항목·추천 이유는 직접 작성해 채운다.
// reason은 본인 경험 기반 주관 평가라 코드가 아닌 데이터로 분리해
// 수정 부담을 없앤다.

export type PickCategory = 'skill' | 'mcp' | 'harness';

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
  { key: 'harness', cmd: 'ls picks/harness-engineering/' },
];

// TODO: 아래는 구조 확인용 예시 — 실제 추천 항목·이유로 교체할 것
export const picks: Pick[] = [
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
    name: '(예시) 스크린샷 검증 루프',
    category: 'harness',
    tagline: '예시 항목 — 교체 필요',
    reason: '여기에 추천 이유 작성.',
  },
];
