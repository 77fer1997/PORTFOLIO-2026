import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    title: z.string(), slug: z.string(), description: z.string(), excerpt: z.string(),
    year: z.number(), category: z.string(), role: z.string(), client: z.string().optional(),
    duration: z.string().optional(), featured: z.boolean(), order: z.number(),
    technologies: z.array(z.string()), services: z.array(z.string()), cover: image(), coverAlt: z.string(),
    gallery: z.array(image()).optional(), galleryAlt: z.array(z.string()).optional(), galleryCaptions: z.array(z.string()).optional(), liveUrl: z.url().optional(), repositoryUrl: z.url().optional(),
    problem: z.string(), objectives: z.array(z.string()), solution: z.string(), results: z.array(z.string()),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({ date: z.string(), institution: z.string(), role: z.string(), category: z.string(), order: z.number(), description: z.string() }),
});

export const collections = { projects, experience };
