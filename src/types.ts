/**
 * Represents a map of word sets.
 *
 * Each key in the map corresponds to a set of words.
 *
 * @interface WordsMap
 */
export interface WordsMap {
  [key: number]: TypedWord[]
}

export interface TypedWord {
  name: string
  type: number
}

export interface Config {
  wordsMap: WordsMap
}
