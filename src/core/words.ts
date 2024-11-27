import { TypedWord, WordsMap } from '../types'

export function getAllWords(wordsMap: WordsMap): string[] {
  const words = [] as string[]

  for (const typedWordArray of Object.values(wordsMap)) {
    typedWordArray.forEach((word: TypedWord) => words.push(word.name))
  }

  return words
}

export function getUniqueWords(): string[] {
  /* Returns an array of all unique words in all sets. */
  return []
}

export function getWordCount(word: string): number {
  /* Returns the count of how many times a word appears in all sets. */
  return 0
}

export function containsWord(word: string): boolean {
  /* Returns true if a word is present in any set, false otherwise. */
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
