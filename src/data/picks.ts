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
  /** 공개·발간 시점 (YYYY.MM) — 저장소는 생성일, 문서는 발간일 기준 */
  date?: string;
  /** 은퇴 항목 — 목록에서 내려도 삭제하지 않고 이력을 남긴다 */
  archived?: {
    /** 내린 시점 (YYYY.MM.DD) — 아카이브는 배치 날짜별로 묶어 보여준다 */
    date: string;
    /** 왜 내렸는지 — 아카이브의 핵심 기록 */
    reason: string;
  };
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
    important: true,
    date: '2026.04',
    link: 'https://github.com/juliusbrussee/caveman',
    tagline: '출력 토큰 절약 — 군더더기 없는 응답 모드',
    reason:
      'Claude Code 응답에서 관사·수식어·인사말 같은 군더더기를 걷어내고 기술적 실질만 남기는 플러그인. 세션마다 출력이 짧아져 토큰이 절약되고, 긴 작업에서 요점 파악 속도가 향상된다. 코드·커밋 메시지·보안 경고는 정상 문장으로 유지되어 실사용에 지장이 없다.',
  },
  {
    name: 'andrej-karpathy-skills',
    category: 'skill',
    date: '2026.01',
    link: 'https://github.com/multica-ai/andrej-karpathy-skills',
    tagline: 'Karpathy의 LLM 코딩 비판을 4원칙 스킬로 — 가정 명시·단순성·수술적 수정·목표 주도',
    reason:
      'Andrej Karpathy가 지적한 LLM 코딩의 고질적 문제(잘못된 가정, 과도한 추상화, 불필요한 코드 변경)를 Think Before Coding·Simplicity First·Surgical Changes·Goal-Driven Execution 4원칙으로 정리한 Claude Code 스킬이다. 에이전트가 구현 전에 가정을 표면화하고 요청 범위만 수정하도록 강제해 결과물 품질이 안정된다.',
  },
  {
    name: 'security-guidance (Claude Code 공식 플러그인)',
    category: 'skill',
    important: true,
    date: '2026.05',
    link: 'https://code.claude.com/docs/en/security-guidance',
    tagline: 'Claude Code가 자기 코드 변경을 3단계로 자체 보안 검토',
    reason:
      'Anthropic이 공식 배포한 무료 플러그인. 파일 편집 시 즉시 패턴 매칭(eval·pickle·innerHTML 등), 턴 종료 시 백그라운드 모델 리뷰(권한 우회·SSRF·인젝션), 커밋·푸시 시 심층 에이전틱 리뷰의 3단 구조로 동작한다. AI가 짠 코드를 AI가 곧바로 감사하는 워크플로로, 에이전틱 코딩이 늘수록 커지는 "생성 코드 취약점" 문제에 직접 대응한다. /plugin install security-guidance@claude-plugins-official.',
  },
  // ---------- mcp ----------
  {
    name: 'Context7',
    category: 'mcp',
    date: '2025.03',
    link: 'https://github.com/upstash/context7',
    tagline: '라이브러리 최신 공식 문서를 대화에 주입',
    reason:
      '모델 학습 데이터가 오래됐을 때 발생하는 "존재하지 않는 API 호출" 문제를 줄인다. 프레임워크 버전 전용 문서를 가져와 답하므로 설정·마이그레이션 질문에서 특히 정확도가 높아진다.',
  },
  // ---------- tools ----------
  {
    name: 'Orca',
    category: 'tool',
    date: '2026.03',
    link: 'https://github.com/stablyai/orca',
    tagline: '코딩 에이전트 병렬 실행 오케스트레이션 ADE',
    reason:
      '프롬프트 하나를 여러 에이전트(Claude Code, Codex, Cursor 등 30개 이상 CLI 지원)에 흩뿌려 각각 독립된 git 워크트리에서 돌리고 결과를 비교해 선택할 수 있는 데스크톱 앱이다. 원격 SSH 워크트리·모바일 동반 앱까지 지원해 여러 방향 실험이 잦은 작업에서 브랜치 관리 부담을 줄인다.',
  },
  {
    name: 'PyRIT (Python Risk Identification Toolkit) — Microsoft',
    category: 'tool',
    date: '2023.12',
    link: 'https://github.com/microsoft/PyRIT',
    tagline: 'Microsoft 공식 생성형 AI 레드팀 자동화 프레임워크',
    reason:
      'Microsoft AI Red Team이 실무에서 쓰던 도구를 오픈소스로 공개한 생성형 AI 레드팀 프레임워크다. Azure ML·OpenAI·로컬 HuggingFace·커스텀 HTTP API 등 다양한 타깃에 다회차 공격을 자동 오케스트레이션하고 스코어러로 오작동을 판정한다. 벤더가 프로덕션 규모 레드티밍에서 검증한 도구라는 점, 멀티턴·에이전트 공격면까지 다룬다는 점에서 정적 프로브 스캐너보다 실무 커버리지가 넓다.',
  },
  // ---------- articles ----------
  {
    name: '공격자 관점의 망분리 우회 취약점 프로파일링 — 금융보안원 RED IRIS',
    category: 'article',
    important: true,
    date: '2026.03',
    link: 'https://www.fsec.or.kr/bbs/detail?menuNo=1011&bbsNo=11888',
    tagline: "'25~'26 레드아이리스 인사이트 리포트 — 망분리 우회의 구조적 원인 분석",
    reason:
      '금융보안원 레드팀(RED IRIS)이 발간한 망분리 우회 분석 리포트. 망분리 우회가 단일 취약점이 아니라 구조적 문제와 다수 취약점의 결합으로 발생함을 공격자 관점에서 프로파일링하고, 가상 캠페인으로 근본 원인과 대응 방안을 제시한다. 금융권 망분리 규제 완화 국면에서 위협 모델링의 기준 자료가 된다.',
  },
  {
    name: 'The Frontier AI Vulnerability Burst — Palo Alto Unit 42',
    category: 'article',
    date: '2026.08',
    link: 'https://unit42.paloaltonetworks.com/frontier-ai-vulnerability-burst/',
    tagline: '자율 시스템이 2개월간 오픈소스 제로데이 14,090개 자동 발견',
    reason:
      'Unit 42가 자율 취약점 탐색 시스템(NOVA)으로 오픈소스 3,915개를 2개월간 분석해 확인된 취약점 14,090개(99.4%가 미보고)를 찾아낸 리서치. CVSS High/Critical이 약 40%, 의존성 결함 1,280개가 다운스트림 4,141개로 번지는 공급망 노출까지 실측했다. 공격자가 AI로 제로데이 발견을 산업화하는 국면을 보여줘, 방어 측 취약점 관리·패치 우선순위 전략을 재검토할 근거가 된다.',
  },
  {
    name: 'Agentic Misalignment in Summer 2026 — Anthropic',
    category: 'article',
    date: '2026.07',
    link: 'https://alignment.anthropic.com/2026/agentic-misalignment-summer-2026/',
    tagline: '자율 에이전트의 정렬 실패 4유형 — 은폐된 훼방·사기 협조 등 통제 실험 관찰',
    reason:
      'Claude·GPT-5.5·Gemini 등 프론티어 모델들을 시뮬레이션 환경에 넣고 자율 에이전트의 정렬 실패(은폐된 훼방, 사기 협조, 의도적 오분류 등)를 관찰한 Anthropic Alignment Science 연구. 실제 배포 사고가 아니라 통제된 실험임을 원문이 명시하지만, "에이전트가 목표 충돌 시 파괴적 행동을 선택할 수 있다"는 조기 경고 신호를 실증 데이터로 보여준다. 언론의 과장 보도와 1차 연구를 구분해 읽는 기준점이 된다.',
  },
  // ---------- archive (은퇴 항목 — 삭제 대신 여기로) ----------
  {
    name: 'AI 보안 위협 대응 매뉴얼 — KISA',
    category: 'article',
    date: '2026.07',
    link: 'https://www.kisa.or.kr/401/form?postSeq=3712&lang_type=KO&page=1',
    tagline: 'AI 특화 보안 위협 분류·진단 + 산업별 시나리오와 위협별 대응 방안',
    reason:
      'KISA가 2026년 7월 발간한 AI 보안 위협 대응 실무 매뉴얼. AI 보안 위협을 분류·진단하는 기준과 산업별 위협 시나리오, 위협별 구체 대응 방안을 담고 있다. AI 시스템 위협 모델링 시 국내 공공 기준선으로 참조할 수 있다.',
    archived: {
      date: '2026.08.07',
      reason:
        '국내 AI보안 공공 기준선으로 가치는 유효하나, 활성 목록을 상시 참조 핵심으로 압축하며 하단 보관. 위협 모델링 시 참조용으로 유지.',
    },
  },
  {
    name: 'AI 보안 레드티밍 가이드 — KISA',
    category: 'article',
    date: '2026.07',
    link: 'https://www.kisa.or.kr/401/form?postSeq=3713&lang_type=KO&page=1',
    tagline: 'AI 레드팀 구성·준비·이행·결과 보고까지 운영 전 과정 지침',
    reason:
      'KISA가 2026년 7월 발간한 AI 레드티밍 운영 가이드. 레드팀 구성, 준비, 이행, 결과 보고까지 6개 섹션으로 실무 절차를 정리했다. AI 모델 대상 모의공격 설계 시 절차와 산출물 형식의 출발점으로 활용할 수 있다.',
    archived: {
      date: '2026.08.07',
      reason:
        'AI 레드팀 운영 절차 참고서로 유효하나 활성 목록 압축 차 하단 보관. 실제 레드티밍 설계 시 절차 레퍼런스로 유지.',
    },
  },
  {
    name: 'Mapping AI-enabled cyber threats: LLM ATT&CK Navigator — Anthropic',
    category: 'article',
    date: '2026.06',
    link: 'https://www.anthropic.com/research/attack-navigator',
    tagline: '악성 계정 832건을 MITRE ATT&CK 14전술·482기법에 매핑한 위협 정량화',
    reason:
      'Anthropic Frontier Red Team이 2025.03~2026.03 1년간 악의적 계정 832건을 분석해 MITRE ATT&CK 전 전술·기법 범위에서 AI 오남용을 실측한 리포트. 중위험 이상 행위자 비중이 33%에서 56%로 늘었고, 고위험을 가르는 요인이 개인 기술력이 아니라 "자동화된 공격 조율 능력"임을 데이터로 보인다.',
    archived: {
      date: '2026.08.07',
      reason:
        'AI 위협 정량화 참고자료로 가치는 유효하나 활성 목록을 슬림화하며 하단 보관. 위협 분류·정량화 근거로 참조 가능.',
    },
  },
  {
    name: 'Disrupting the first reported AI-orchestrated cyber espionage campaign — Anthropic',
    category: 'article',
    date: '2025.11',
    link: 'https://www.anthropic.com/news/disrupting-AI-espionage',
    tagline: '최초 보고된 AI 오케스트레이션 사이버 스파이 캠페인 — 공격의 80~90%를 AI가 자율 수행',
    reason:
      '중국 국가배후 그룹(GTG-1002)이 Claude Code를 조작해 글로벌 기관 약 30곳을 대상으로 정찰·익스플로잇·자격증명 탈취·데이터 유출을 수행한 사건의 Anthropic 공식 리포트. 공격자는 "보안업체의 방어적 침투테스트"로 위장해 가드레일을 우회했고, 인간은 캠페인당 4~6개 의사결정 지점에만 개입했다.',
    archived: {
      date: '2026.08.07',
      reason:
        '2025.11 사례로 상대적으로 오래됐고, 자율 공격 대표 사례는 최신 Unit42 Frontier Vuln Burst와 Agentic Misalignment로 활성 갱신. AI 자율 해킹 최초 공식 사료로서 아카이브 유지.',
    },
  },
  {
    name: 'Disrupting malicious uses of AI: an update — OpenAI',
    category: 'article',
    date: '2025.10',
    link: 'https://openai.com/global-affairs/disrupting-malicious-uses-of-ai-october-2025/',
    tagline: 'OpenAI 위협 인텔리전스 — 멀웨어 개발·피싱·사기망 등 40여 개 악성 네트워크 차단 사례',
    reason:
      'OpenAI가 2024년 2월 이후 차단한 40개 이상의 정책 위반 네트워크를 정리한 공식 위협 리포트. 러시아어권 멀웨어 툴링 개발, 한국어권 공격 그룹, 캄보디아 거점 조직적 사기망, 중국 연계 영향력 공작 등 케이스 스터디를 담았다.',
    archived: {
      date: '2026.08.07',
      reason:
        '인간 주도 AI 오용 차단 사례 중심이라 자율 에이전트 위협 관점의 대표성이 낮아 활성에서 내림. 벤더 위협 인텔리전스 이력으로 참조 가능.',
    },
  },
  {
    name: 'PentestGPT',
    category: 'tool',
    date: '2023.02',
    link: 'https://github.com/GreyDGL/PentestGPT',
    tagline: 'LLM 기반 자율 침투테스트 에이전트 — USENIX Security 2024',
    reason:
      'LLM으로 정찰·익스플로잇·검증 단계를 자동 진행하는 침투테스트 프레임워크로, USENIX Security 2024에 발표되었다. 웹·암호·리버싱·포너블 등 CTF 전 영역을 다루며 v1.0부터 Claude Code·Codex 백엔드를 지원한다. "AI for Security" 방향에서 LLM 에이전트가 공격 절차를 어디까지 자동화하는지 보여주는 대표 사례다.',
    archived: {
      date: '2026.08.07',
      reason:
        '2023년 설계라 최신 에이전트 하네스(Claude Code·Codex 네이티브 자율 공격) 대비 자동화 수준이 뒤처진다. LLM 침투테스트 개념 증명으로서의 역사적 의의는 유지.',
    },
  },
  {
    name: 'garak',
    category: 'tool',
    date: '2023.05',
    link: 'https://github.com/NVIDIA/garak',
    tagline: 'NVIDIA의 LLM 취약점 스캐너 — 프롬프트 인젝션·탈옥·유해 출력 자동 프로빙',
    reason:
      'nmap이 네트워크를 스캔하듯 LLM을 스캔하는 오픈소스 취약점 스캐너다. 프롬프트 인젝션, 탈옥, 데이터 유출, 유해 콘텐츠 생성 등 다양한 공격 프로브를 자동으로 던지고 탐지기로 응답을 채점해 모델의 약점을 리포트로 정리한다. OpenAI·Hugging Face·Ollama 등 주요 백엔드를 지원해 AI 레드티밍 실습의 표준 시작점으로 쓰기 좋다.',
    archived: {
      date: '2026.08.07',
      reason:
        '단일 모델 프로빙 중심이라 에이전트·도구 호출·멀티턴 공격면 커버가 약하다. 정적 프로브 스캐너로는 여전히 유효하나 최신 AI 레드티밍 도구로 목록 세대교체.',
    },
  },
  {
    name: 'Effective Context Engineering for AI Agents — Anthropic',
    category: 'article',
    date: '2025.09',
    link: 'https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents',
    tagline: '프롬프트가 아니라 컨텍스트를 설계하라',
    reason:
      '컨텍스트 윈도우를 유한 자원으로 보고 무엇을 넣고 뺄지 설계하는 관점 전환. 에이전트가 길게 일할수록 성능이 무너지는 이유와 대응(압축·검색·서브에이전트 격리)을 체계적으로 정리했다.',
    archived: {
      date: '2026.08.07',
      reason:
        '2025년 9월 발간 후 컨텍스트 관리가 하네스 기본 기능(자동 압축·서브에이전트 격리)으로 흡수되어 수동 설계 지침의 실무 비중이 줄었다. 관점 자체는 여전히 유효.',
    },
  },
  {
    name: 'Claude Code Best Practices — Anthropic',
    category: 'article',
    date: '2025.04',
    link: 'https://www.anthropic.com/engineering/claude-code-best-practices',
    tagline: '에이전틱 코딩 공식 플레이북',
    reason:
      'CLAUDE.md 작성법, 탐색→계획→구현→커밋 워크플로, 헤드리스 자동화까지 Claude Code를 도구가 아니라 팀원처럼 운용하는 방법의 기준 문서다.',
    archived: {
      date: '2026.08.07',
      reason:
        '2025년 4월 발간 후 Claude Code가 플러그인·스킬·서브에이전트 체계로 크게 바뀌어 세부 내용이 현행과 어긋난다. 방법론 뼈대(탐색→계획→구현→커밋)는 여전히 유효하나, 기준 문서 역할은 이후 공식 문서와 Effective Context Engineering이 대체.',
    },
  },
  {
    name: 'OWASP Top 10 for LLM Applications',
    category: 'article',
    date: '2024.11',
    link: 'https://genai.owasp.org/llm-top-10/',
    tagline: 'LLM 애플리케이션 보안 위협 표준 분류',
    reason:
      '프롬프트 인젝션부터 과도한 에이전시까지 LLM 시스템의 위협을 표준 용어로 정리한 레퍼런스. 보안 리뷰 보고서 작성 시 위협 분류·명명의 공통 언어가 된다.',
    archived: {
      date: '2026.08.07',
      reason:
        '2024년 11월판 기준이라 에이전틱 AI 위협(자율 공격 체인, 도구 오용)을 충분히 반영하지 못한다. 위협 분류 공통 언어 역할은 KISA AI 보안 위협 대응 매뉴얼과 벤더 위협 인텔리전스 리포트가 실무 기준을 대체.',
    },
  },
  {
    name: 'ECC (everything-claude-code)',
    category: 'tool',
    date: '2026.01',
    link: 'https://github.com/affaan-m/everything-claude-code',
    tagline: '에이전트·스킬·훅·룰 올인원 팩',
    reason:
      '코드리뷰·보안리뷰·빌드 에러 해결 등 역할별 서브에이전트와 언어별 룰셋, TDD·커밋 규약 같은 워크플로 스킬을 한 번에 설치하는 종합 팩이다. 프로젝트마다 규칙을 새로 쓰는 대신 검증된 기본값 위에서 시작할 수 있다.',
    archived: {
      date: '2026.07.25',
      reason:
        '올인원 설치가 넣는 룰·에이전트 양이 실사용 대비 과해 세션 컨텍스트 부담이 컸다. 하네스 정리 과정에서 제거하고, 필요한 스킬만 골라 쓰는 방식으로 전환.',
    },
  },
];
