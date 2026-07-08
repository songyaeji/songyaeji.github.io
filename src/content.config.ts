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
    // 예시 항목 표시용 — 실제 논문으로 오인 방지
    placeholder: z.boolean().default(false),
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
    private: z.boolean().default(false),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

export const collections = { research, projects };
