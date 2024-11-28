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

export interface Word {
  name: string
}

export interface TypedWord extends Word {
  type: number
}

export interface Config {
  wordsMap: WordsMap
}
