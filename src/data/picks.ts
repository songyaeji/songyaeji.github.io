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
  /** 특히 중요한 항목 — 제목 앞에 노란 별로 강조 */
  important?: boolean;
}

/** Picks를 마지막으로 손본 날짜 — "이 날짜 기준으로 고른 목록"임을 밝힌다. */
export const picksUpdated = '2026-07-16';

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
      'Claude Code 응답에서 관사·수식어·인사말 같은 군더더기를 걷어내고 기술적 실질만 남기는 플러그인. 세션마다 출력이 짧아져 토큰이 절약되고, 긴 작업에서 요점 파악 속도가 향상된다. 코드·커밋 메시지·보안 경고는 정상 문장으로 유지되어 실사용에 지장이 없다.',
  },
  {
    name: 'andrej-karpathy-skills',
    category: 'skill',
    link: 'https://github.com/multica-ai/andrej-karpathy-skills',
    tagline: 'Karpathy의 LLM 코딩 비판을 4원칙 스킬로 — 가정 명시·단순성·수술적 수정·목표 주도',
    reason:
      'Andrej Karpathy가 지적한 LLM 코딩의 고질적 문제(잘못된 가정, 과도한 추상화, 불필요한 코드 변경)를 Think Before Coding·Simplicity First·Surgical Changes·Goal-Driven Execution 4원칙으로 정리한 Claude Code 스킬이다. 에이전트가 구현 전에 가정을 표면화하고 요청 범위만 수정하도록 강제해 결과물 품질이 안정된다.',
  },
  // ---------- mcp ----------
  {
    name: 'Context7',
    category: 'mcp',
    link: 'https://github.com/upstash/context7',
    tagline: '라이브러리 최신 공식 문서를 대화에 주입',
    reason:
      '모델 학습 데이터가 오래됐을 때 발생하는 "존재하지 않는 API 호출" 문제를 줄인다. 프레임워크 버전 전용 문서를 가져와 답하므로 설정·마이그레이션 질문에서 특히 정확도가 높아진다.',
  },
  // ---------- tools ----------
  {
    name: 'ECC (everything-claude-code)',
    category: 'tool',
    link: 'https://github.com/affaan-m/everything-claude-code',
    tagline: '에이전트·스킬·훅·룰 올인원 팩',
    reason:
      '코드리뷰·보안리뷰·빌드 에러 해결 등 역할별 서브에이전트와 언어별 룰셋, TDD·커밋 규약 같은 워크플로 스킬을 한 번에 설치하는 종합 팩이다. 프로젝트마다 규칙을 새로 쓰는 대신 검증된 기본값 위에서 시작할 수 있다.',
  },
  {
    name: 'Orca',
    category: 'tool',
    link: 'https://github.com/stablyai/orca',
    tagline: '코딩 에이전트 병렬 실행 오케스트레이션 ADE',
    reason:
      '프롬프트 하나를 여러 에이전트(Claude Code, Codex, Cursor 등 30개 이상 CLI 지원)에 흩뿌려 각각 독립된 git 워크트리에서 돌리고 결과를 비교해 선택할 수 있는 데스크톱 앱이다. 원격 SSH 워크트리·모바일 동반 앱까지 지원해 여러 방향 실험이 잦은 작업에서 브랜치 관리 부담을 줄인다.',
  },
  // ---------- articles ----------
  {
    name: '금융분야 AI 보안 가이드라인 — 금융보안원',
    category: 'article',
    important: true,
    link: 'https://www.korea.kr/archive/expDocView.do?docId=40456',
    tagline: '금융권 AI 서비스 개발주기별 보안 고려사항 + 챗봇 보안성 체크리스트',
    reason:
      '금융보안원이 발간한 국내 금융권 AI 보안의 기준 문서. 학습 데이터 수집·전처리, 모델 설계·학습, 검증·평가 단계별 보안 고려사항과 AI 챗봇 서비스 보안성 자체점검 항목을 제공한다. 금융 도메인의 AI 보안 리뷰 설계 시 위협 범위와 통제 항목을 정렬하는 기준이 된다.',
  },
  {
    name: 'AI 보안 위협 대응 매뉴얼 — KISA',
    category: 'article',
    important: true,
    link: 'https://www.kisa.or.kr/401/form?postSeq=3712&lang_type=KO&page=1',
    tagline: 'AI 특화 보안 위협 분류·진단 + 산업별 시나리오와 위협별 대응 방안',
    reason:
      'KISA가 2026년 7월 발간한 AI 보안 위협 대응 실무 매뉴얼. AI 보안 위협을 분류·진단하는 기준과 산업별 위협 시나리오, 위협별 구체 대응 방안을 담고 있다. AI 시스템 위협 모델링 시 국내 공공 기준선으로 참조할 수 있다.',
  },
  {
    name: 'AI 보안 레드티밍 가이드 — KISA',
    category: 'article',
    important: true,
    link: 'https://www.kisa.or.kr/401/form?postSeq=3713&lang_type=KO&page=1',
    tagline: 'AI 레드팀 구성·준비·이행·결과 보고까지 운영 전 과정 지침',
    reason:
      'KISA가 2026년 7월 발간한 AI 레드티밍 운영 가이드. 레드팀 구성, 준비, 이행, 결과 보고까지 6개 섹션으로 실무 절차를 정리했다. AI 모델 대상 모의공격 설계 시 절차와 산출물 형식의 출발점으로 활용할 수 있다.',
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
      'CLAUDE.md 작성법, 탐색→계획→구현→커밋 워크플로, 헤드리스 자동화까지 Claude Code를 도구가 아니라 팀원처럼 운용하는 방법의 기준 문서다.',
  },
  {
    name: 'OWASP Top 10 for LLM Applications',
    category: 'article',
    important: true,
    link: 'https://genai.owasp.org/',
    tagline: 'LLM 애플리케이션 보안 위협 표준 분류',
    reason:
      '프롬프트 인젝션부터 과도한 에이전시까지 LLM 시스템의 위협을 표준 용어로 정리한 레퍼런스. 보안 리뷰 보고서 작성 시 위협 분류·명명의 공통 언어가 된다.',
  },
];
