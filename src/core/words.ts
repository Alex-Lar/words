import { WordsMap, TypedWord, Word } from '@alex-lar/words-shared-types'

export function getAllWords(wordsMap: WordsMap): string[] {
  const words = [] as string[]

  for (const typedWordArray of Object.values(wordsMap)) {
    typedWordArray.forEach((word: TypedWord) => words.push(word.name))
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

export function containsWordInSet(setKey: number, word: string): boolean {
  /* Returns true if a word is present in specified setKey, false otherwise. */
  return false
}

export function getWordIndex(setKey: number, word: string) {
  /* Returns the index of a word in a specific set. */
}

export function getWordAtIndex(setKey: number, index: number) {
  /* Returns the word at a specific index in a specific set. */
}

export function getRandomWord() {
  /* Returns a random word from all sets. */
}

export function getRandomWordFromSet(setKey: number) {
  /* Returns a random word from a specific set. */
}

export function removeWord(setKey: number, word: number) {
  /* Removes a word from a specific set. */
}

export function updateWord(setKey: number, oldWord: string, newWord: string) {
  /* Updates a word in a specific set with a new word. */
}
