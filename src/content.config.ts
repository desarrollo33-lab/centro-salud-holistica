import { defineCollection, z } from 'astro:content';

const chapters = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    chapter_num: z.number(),
    word_count: z.number(),
  }),
});

const guides = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    meta_title: z.string().optional(),
    meta_description: z.string().optional(),
    topic: z.string().optional(),
    word_count: z.number().optional(),
  }),
});

const tools = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tool_type: z.string(),
    topic: z.string().optional(),
    word_count: z.number().optional(),
  }),
});

export const collections = { chapters, guides, tools };
