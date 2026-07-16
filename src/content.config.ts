import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional(),
    description: z.string(),
    excerpt: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    readingTime: z.string(),
    draft: z.boolean().default(false),
    cta: z.object({
      heading: z.string().optional(),
      label: z.string(),
      href: z.string(),
      text: z.string()
    }),
    faqs: z.array(
      z.object({
        question: z.string(),
        answer: z.string()
      })
    ).default([])
  })
});

export const collections = { blog };
