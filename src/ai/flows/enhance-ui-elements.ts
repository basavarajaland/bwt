'use server';

/**
 * @fileOverview AI-powered UI enhancement suggestions for the mirrored website.
 *
 * This file defines a Genkit flow that takes the content of a webpage and suggests visual enhancements
 * using AI, such as typography, layout adjustments, or iconography.
 *
 * - enhanceUIElements - A function that orchestrates the UI enhancement process.
 * - EnhanceUIElementsInput - The input type for the enhanceUIElements function.
 * - EnhanceUIElementsOutput - The return type for the enhanceUIElements function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnhanceUIElementsInputSchema = z.object({
  webpageContent: z
    .string()
    .describe('The HTML content of the webpage to be enhanced.'),
});
export type EnhanceUIElementsInput = z.infer<typeof EnhanceUIElementsInputSchema>;

const EnhanceUIElementsOutputSchema = z.object({
  suggestions: z
    .string()
    .describe(
      'A list of suggested UI enhancements, including typography, layout adjustments, and iconography, formatted as a JSON array of objects.'
    ),
});
export type EnhanceUIElementsOutput = z.infer<typeof EnhanceUIElementsOutputSchema>;

export async function enhanceUIElements(input: EnhanceUIElementsInput): Promise<EnhanceUIElementsOutput> {
  return enhanceUIElementsFlow(input);
}

const enhanceUIElementsPrompt = ai.definePrompt({
  name: 'enhanceUIElementsPrompt',
  input: {schema: EnhanceUIElementsInputSchema},
  output: {schema: EnhanceUIElementsOutputSchema},
  prompt: `You are an AI-powered UI/UX design assistant.

  Analyze the following HTML content of a webpage and provide suggestions for visual enhancements.
  Focus on typography, layout adjustments for clarity, and relevant iconography.
  Return your suggestions as a JSON array of objects.

  HTML Content:
  {{{
    webpageContent
  }}}

  Format:
  [{
  "element": "",
  "enhancement": "",
  "reasoning": ""
  }]
  `,
});

const enhanceUIElementsFlow = ai.defineFlow(
  {
    name: 'enhanceUIElementsFlow',
    inputSchema: EnhanceUIElementsInputSchema,
    outputSchema: EnhanceUIElementsOutputSchema,
  },
  async input => {
    const {output} = await enhanceUIElementsPrompt(input);
    return output!;
  }
);
