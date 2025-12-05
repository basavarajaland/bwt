'use server';
/**
 * @fileOverview This file defines a Genkit flow for optimizing SEO practices using generative AI.
 *
 * - optimizeSEO - A function that suggests and implements SEO practices like updating meta tags.
 * - OptimizeSEOInput - The input type for the optimizeSEO function, expects website content as a string.
 * - OptimizeSEOOutput - The return type for the optimizeSEO function, returns SEO suggestions.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const OptimizeSEOInputSchema = z.object({
  websiteContent: z
    .string()
    .describe('The HTML content of the website to optimize for SEO.'),
});
export type OptimizeSEOInput = z.infer<typeof OptimizeSEOInputSchema>;

const OptimizeSEOOutputSchema = z.object({
  metaTags: z
    .string()
    .describe(
      'Suggested meta tags to improve SEO, including title, description, and keywords.'
    ),
  otherSuggestions: z
    .string()
    .describe('Other SEO suggestions like alt text for images and heading optimization.'),
});
export type OptimizeSEOOutput = z.infer<typeof OptimizeSEOOutputSchema>;

export async function optimizeSEO(input: OptimizeSEOInput): Promise<OptimizeSEOOutput> {
  return optimizeSEOFlow(input);
}

const prompt = ai.definePrompt({
  name: 'optimizeSEOPrompt',
  input: {schema: OptimizeSEOInputSchema},
  output: {schema: OptimizeSEOOutputSchema},
  prompt: `You are an SEO expert. Given the following website HTML content, suggest improvements to the meta tags and other SEO practices to improve search engine visibility.

Website Content: {{{websiteContent}}}

Please provide specific meta tag suggestions (title, description, keywords) and other actionable SEO advice.
`,
});

const optimizeSEOFlow = ai.defineFlow(
  {
    name: 'optimizeSEOFlow',
    inputSchema: OptimizeSEOInputSchema,
    outputSchema: OptimizeSEOOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
