// AI 도구 추천(Picks) 탭 데이터 — 항목·추천 이유는 직접 작성해 채운다.
// reason은 본인 경험 기반 주관 평가라 코드가 아닌 데이터로 분리해
// 수정 부담을 없앤다.

export type PickCategory = 'skill' | 'mcp' | 'harness' | 'tool' | 'article';

export interface Pick {
  name: string;
  category: PickCategory;
  link?: string;
  /** 한 줄 요약 — 이름 아래 상시 노출 */
  tagline: string;
  /** 추천 이유 — 직접 써보고 느낀 근거 위주로 작성 */
  reason: string;
}

export const pickSections: { key: PickCategory; cmd: string }[] = [
  { key: 'skill', cmd: 'ls picks/skills/' },
  { key: 'mcp', cmd: 'ls picks/mcp/' },
  { key: 'tool', cmd: 'ls picks/tools/' },
  { key: 'article', cmd: 'ls picks/articles/' },
];

export const picks: Pick[] = [
  // ---------- skills ----------
  {
    name: 'caveman',
    category: 'skill',
    link: 'https://github.com/juliusbrussee/caveman',
    tagline: '출력 토큰 절약 — 군더더기 없는 응답 모드',
    reason:
      'Claude Code 응답에서 관사·수식어·인사말 같은 군더더기를 걷어내고 기술적 실질만 남기는 플러그인. 세션마다 출력이 짧아져 토큰이 절약되고, 긴 작업에서 요점 파악이 빨라진다. 코드·커밋 메시지·보안 경고는 정상 문장으로 유지되어 실사용에 지장이 없다.',
  },
  // ---------- mcp ----------
  {
    name: 'Context7',
    category: 'mcp',
    link: 'https://github.com/upstash/context7',
    tagline: '라이브러리 최신 공식 문서를 대화에 주입',
    reason:
      '모델 학습 데이터가 오래됐을 때 생기는 "존재하지 않는 API 호출" 문제를 줄여준다. 프레임워크 버전 전용 문서를 가져와 답하므로 설정·마이그레이션 질문에서 특히 정확도가 올라간다.',
  },
  {
    name: 'Chrome DevTools MCP',
    category: 'mcp',
    link: 'https://github.com/ChromeDevTools/chrome-devtools-mcp',
    tagline: '브라우저를 직접 조작하는 프론트 디버깅·검증',
    reason:
      '스크린샷·콘솔 로그·네트워크 요청·Lighthouse 감사까지 에이전트가 실제 브라우저로 확인한다. "빌드는 되는데 화면이 깨지는" 유형의 문제를 에이전트 스스로 검증하게 만들 수 있다.',
  },
  {
    name: 'GitHub MCP',
    category: 'mcp',
    link: 'https://github.com/github/github-mcp-server',
    tagline: 'PR·이슈·CI를 대화 안에서 처리',
    reason:
      'PR 생성·리뷰 코멘트·이슈 트리아지를 에이전트에 위임할 때 표준 선택지. gh CLI보다 구조화된 응답을 받아 후속 자동화에 잇기 좋다.',
  },
  // ---------- tools ----------
  {
    name: 'ECC (everything-claude-code)',
    category: 'tool',
    link: 'https://github.com/affaan-m/everything-claude-code',
    tagline: '에이전트·스킬·훅·룰 올인원 팩',
    reason:
      '코드리뷰·보안리뷰·빌드 에러 해결 등 역할별 서브에이전트와 언어별 룰셋, TDD·커밋 규약 같은 워크플로 스킬을 한 번에 설치하는 종합 팩. 프로젝트마다 규칙을 새로 쓰는 대신 검증된 기본값 위에서 시작할 수 있다.',
  },
  {
    name: 'Orca',
    category: 'tool',
    link: 'https://github.com/stablyai/orca',
    tagline: '코딩 에이전트 병렬 실행 오케스트레이션 ADE',
    reason:
      '프롬프트 하나를 여러 에이전트(Claude Code, Codex, Cursor 등 30개 이상 CLI 지원)에 흩뿌려 각각 독립된 git 워크트리에서 돌리고 결과를 비교해 고를 수 있는 데스크톱 앱. 원격 SSH 워크트리·모바일 동반 앱까지 지원해 여러 방향 실험이 잦은 작업에서 브랜치 관리 부담을 줄여준다.',
  },
  // ---------- articles ----------
  {
    name: 'The Lethal Trifecta for AI Agents — Simon Willison',
    category: 'article',
    link: 'https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/',
    tagline: '에이전트 프롬프트 인젝션 위험의 3요소 프레임',
    reason:
      '비공개 데이터 접근·신뢰할 수 없는 입력·외부 전송 세 가지가 결합될 때 에이전트가 위험해진다는 프레임. AI 시스템의 공격면을 평가할 때 체크리스트처럼 쓸 수 있어 AI 보안 관점에서 가장 자주 되짚는 글.',
  },
  {
    name: 'Effective Context Engineering for AI Agents — Anthropic',
    category: 'article',
    link: 'https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents',
    tagline: '프롬프트가 아니라 컨텍스트를 설계하라',
    reason:
      '컨텍스트 윈도우를 유한 자원으로 보고 무엇을 넣고 뺄지 설계하는 관점 전환. 에이전트가 길게 일할수록 성능이 무너지는 이유와 대응(압축·검색·서브에이전트 격리)을 체계적으로 정리했다.',
  },
  {
    name: 'Claude Code Best Practices — Anthropic',
    category: 'article',
    link: 'https://www.anthropic.com/engineering/claude-code-best-practices',
    tagline: '에이전틱 코딩 공식 플레이북',
    reason:
      'CLAUDE.md 작성법, 탐색→계획→구현→커밋 워크플로, 헤드리스 자동화까지 Claude Code를 도구가 아니라 팀원처럼 쓰는 방법의 기준점. 새 프로젝트 세팅 때마다 다시 열어본다.',
  },
  {
    name: 'OWASP Top 10 for LLM Applications',
    category: 'article',
    link: 'https://genai.owasp.org/',
    tagline: 'LLM 애플리케이션 보안 위협 표준 분류',
    reason:
      '프롬프트 인젝션부터 과도한 에이전시까지 LLM 시스템의 위협을 표준 용어로 정리한 레퍼런스. 보안 리뷰 보고서를 쓸 때 위협 분류·명명의 공통 언어가 되어준다.',
  },
];
