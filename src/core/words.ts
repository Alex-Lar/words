import { WordsMap, Word } from '@alex-lar/words-shared-types'

export function getAllNames(wordsMap: WordsMap): string[] {
  const names = [] as string[]

  for (const wordArray of Object.values(wordsMap)) {
    wordArray.forEach((word: Word) => names.push(word.name))
  }

  return names
}

export function getAllWords(wordsMap: WordsMap): Word[] {
  const words = [] as Word[]

  for (const wordArray of Object.values(wordsMap)) {
    wordArray.forEach((word: Word) => words.push(word))
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

  return counter
}

export function containsWord(wordArray: string[], word: string): boolean {
  if (wordArray.includes(word)) true

  return false
}
