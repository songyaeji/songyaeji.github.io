import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    venue: z.string(),
    year: z.number(),
    authors: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    links: z
      .object({
        pdf: z.string().optional(),
        code: z.string().optional(),
        slides: z.string().optional(),
      })
      .default({}),
    // placeholder = 레이아웃용 더미(실제 연구 아님). 실제 미게재 연구는
    // status: in-preparation으로 구분 — 둘을 겹쳐 쓰면 진행 연구가
    // "가짜 예시"로 오인된다
    placeholder: z.boolean().default(false),
    status: z.enum(['in-preparation', 'published']).default('published'),
    order: z.number().default(0),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    stack: z.array(z.string()).default([]),
    repo: z.string().optional(),
    year: z.number(),
    status: z.enum(['active', 'done', 'research']).default('done'),
    // Projects 페이지 그룹 배치 기준 — 기본값 없이 필수로 두어
    // 새 프로젝트 추가 시 분류 누락을 빌드에서 잡는다
    category: z.enum(['research', 'oss', 'tool', 'team']),
    private: z.boolean().default(false),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    // 채용자 관점 보강 — 본인 역할(공동 작업 오해 방지), 협업자,
    // 검증 가능한 성과 하이라이트
    role: z.string().optional(),
    collaborators: z.string().optional(),
    highlights: z.array(z.string()).default([]),
    // interests(src/data/profile.ts)와 연계되는 관심분야 태그 — stack(기술)과 별도 축
    tags: z.array(z.string()).default([]),
  }),
});

// 보안동향 카드뉴스 회차 — sec-feed-bot이 매일 발행 후 meta.json을
// src/content/trend/<date>.json으로, 카드 PNG를 public/trend/<date>/로 push
const trend = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/trend' }),
  schema: z.object({
    date: z.string(), // YYYY-MM-DD (KST)
    issue_no: z.number(),
    briefing: z.string().nullable().optional(),
    keywords: z.array(z.string()).default([]),
    links: z
      .array(z.object({ n: z.number(), title: z.string(), url: z.string() }))
      .default([]),
    cards: z.array(z.string()).default([]),
  }),
});

export const collections = { research, projects, trend };
