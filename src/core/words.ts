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

export function getUniqueNames(wordArray: string[]): string[] {
  return Array.from(new Set(wordArray))
}

export function getNameCount(nameArray: string[], name: string): number {
  let counter = 0

  for (let el of nameArray) {
    if (name.toLowerCase() === el.toLowerCase()) counter++
  }

  return counter
}

export function hasName(nameArray: string[], name: string): boolean {
  if (nameArray.includes(name)) true

  return false
}
