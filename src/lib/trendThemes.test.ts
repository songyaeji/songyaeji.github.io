// node --test로 실행 (Node 22.18+/24 내장 TS 타입 제거 사용, 별도 의존성 없음)
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { countThemesByWindow } from './trendThemes.ts';

const rules = [
  { key: 'agent', match: /에이전트|agent/i },
  { key: 'supply', match: /공급망|npm/i },
];

const issue = (date: string, issue_no: number, titles: string[]) => ({
  date,
  issue_no,
  links: titles.map((title) => ({ title })),
});

test('최신 회차 기준 30일 창만 집계한다 (봇이 멈춰도 창이 비지 않음)', () => {
  const issues = [
    issue('2026-08-01', 1, ['npm 웜', 'AI agent 침해']), // 창 밖 (최신 회차보다 30일 이상 전)
    issue('2026-09-07', 2, ['AI 에이전트 공격', 'npm 공급망 침해']),
    issue('2026-10-06', 3, ['Agentic 클라우드 공격', 'CVE-2026-0001']),
  ];
  const w = countThemesByWindow(issues, rules, 30);
  assert.deepEqual(w.counts, [
    { key: 'agent', count: 2 },
    { key: 'supply', count: 1 },
  ]);
  assert.equal(w.issueCount, 2);
  assert.equal(w.headlineCount, 4);
  assert.equal(w.first?.issue_no, 2);
  assert.equal(w.last?.issue_no, 3);
});

test('창 경계: 최신 회차 포함 정확히 days일', () => {
  const issues = [issue('2026-09-07', 1, ['agent']), issue('2026-09-06', 0, ['agent']), issue('2026-10-06', 2, [])];
  const w = countThemesByWindow(issues, rules, 30);
  // 10-06 기준 30일 창 = 09-07 ~ 10-06
  assert.equal(w.issueCount, 2);
  assert.equal(w.counts[0].count, 1);
});

test('한 제목이 여러 테마에 걸리면 각각 센다', () => {
  const w = countThemesByWindow([issue('2026-10-06', 1, ['npm 공급망으로 AI 에이전트 설정 탈취'])], rules);
  assert.deepEqual(
    w.counts.map((c) => c.count),
    [1, 1],
  );
});

test('회차가 없으면 0 집계와 빈 범위', () => {
  const w = countThemesByWindow([], rules);
  assert.deepEqual(w.counts, [
    { key: 'agent', count: 0 },
    { key: 'supply', count: 0 },
  ]);
  assert.equal(w.issueCount, 0);
  assert.equal(w.first, undefined);
  assert.equal(w.last, undefined);
});

test('입력 배열을 변경하지 않는다', () => {
  const issues = [issue('2026-10-06', 2, ['agent']), issue('2026-10-01', 1, ['npm'])];
  const snapshot = JSON.stringify(issues);
  countThemesByWindow(issues, rules);
  assert.equal(JSON.stringify(issues), snapshot);
});
