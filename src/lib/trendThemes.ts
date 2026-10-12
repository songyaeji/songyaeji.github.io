// Picks 상단 위젯 집계 — Trend 회차 링크 제목을 테마 규칙에 매칭해
// "최근 N일 뉴스레터가 무엇을 많이 다뤘나"를 빌드 시점에 계산한다.
// keywords 필드는 회차마다 표기가 갈려(공급망공격/공급망침해/npm공급망공격)
// 집계가 흩어지므로 링크 제목을 기준으로 삼는다.

export interface ThemeRule {
  key: string;
  /** g 플래그 금지 — lastIndex 상태 때문에 test() 결과가 번갈아 바뀐다 */
  match: RegExp;
}

export interface TrendIssueLike {
  date: string; // YYYY-MM-DD
  issue_no: number;
  links: { title: string }[];
}

export interface ThemeWindow<T extends TrendIssueLike> {
  counts: { key: string; count: number }[];
  issueCount: number;
  headlineCount: number;
  first?: T;
  last?: T;
}

const DAY_MS = 86_400_000;

/**
 * 최신 회차 날짜를 끝으로 하는 days일 창(양끝 포함)에서 테마별 헤드라인 수를 센다.
 * 오늘 날짜가 아니라 최신 회차를 기준점으로 삼아, 봇이 며칠 멈춰도 위젯이 비지 않는다.
 * 한 제목이 여러 테마에 걸리면 각각 센다.
 */
export function countThemesByWindow<T extends TrendIssueLike>(
  issues: readonly T[],
  rules: readonly ThemeRule[],
  days = 30,
): ThemeWindow<T> {
  const sorted = [...issues].sort((a, b) => a.date.localeCompare(b.date));
  const last = sorted.at(-1);
  const cutoff = last ? Date.parse(last.date) - (days - 1) * DAY_MS : Infinity;
  const inWindow = sorted.filter((it) => Date.parse(it.date) >= cutoff);
  const titles = inWindow.flatMap((it) => it.links.map((l) => l.title));

  return {
    counts: rules.map((r) => ({ key: r.key, count: titles.filter((t) => r.match.test(t)).length })),
    issueCount: inWindow.length,
    headlineCount: titles.length,
    first: inWindow[0],
    last,
  };
}
