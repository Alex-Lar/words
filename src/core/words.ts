import { WordsMap, Word } from '@alex-lar/words-shared-types'

export function getAllWords(wordsMap: WordsMap): string[] {
  const words = [] as string[]

  for (const typedWordArray of Object.values(wordsMap)) {
    typedWordArray.forEach((word: Word) => words.push(word.name))
  }

  return words
}

export function getUniqueWords(wordArray: string[]): string[] {
  return Array.from(new Set(wordArray))
}

export function getWordCount(wordArray: string[], word: string): number {
  let counter = 0

  for (let el of wordArray) {
    if (word.toLowerCase() === el.toLowerCase()) counter++
  }

  return counter;
}

export function containsWord(wordArray: string[], word: string): boolean {
  if (wordArray.includes(word)) true;

  return false
}
