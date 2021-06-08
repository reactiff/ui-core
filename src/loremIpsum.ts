import { loremIpsum } from 'lorem-ipsum'

export type LoremIpsumOptions = {
  count: number
  format: 'plain' | 'html' | undefined
  paragraphLowerBound: number | undefined
  paragraphUpperBound: number | undefined
  // random: Math.random,     // A PRNG function
  sentenceLowerBound: number | undefined
  sentenceUpperBound: number | undefined
  suffix: string | undefined
  units: 'paragraphs' | 'sentences' | 'words' | undefined
  words?: string[]
}

export const options: LoremIpsumOptions = {
  count: 1, // Number of "words", "sentences", or "paragraphs"
  format: 'plain', // "plain" or "html"
  paragraphLowerBound: 3, // Min. number of sentences per paragraph.
  paragraphUpperBound: 7, // Max. number of sentences per paragarph.
  // random: Math.random,     // A PRNG function
  sentenceLowerBound: 5, // Min. number of words per sentence.
  sentenceUpperBound: 15, // Max. number of words per sentence.
  suffix: '\n', // Line ending, defaults to "\n" or "\r\n" (win32)
  units: 'words' // paragraph(s), "sentence(s)", or "word(s)"
  // words: ["ad", ...]       // Array of words to draw from
}

function words(count: number, dictionary?: string[]) {
  return loremIpsum({
    ...options,
    // overrides
    count,
    units: 'words',
    words: dictionary
  })
}

function sentences(count: number, dictionary?: string[]) {
  return loremIpsum({
    ...options,
    // overrides
    count,
    units: 'sentences',
    words: dictionary
  })
}

function paragraphs(count: number, dictionary?: string[]) {
  return loremIpsum({
    ...options,
    // overrides
    count,
    units: 'paragraphs',
    words: dictionary
  })
}

export default {
  words,
  sentences,
  paragraphs
}
