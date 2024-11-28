import { getIntersection, getUnion, getAllWords } from './core'
import { WordsMap } from '@alex-lar/words-shared-types'
import { Config } from './types'

/**
 * Represents a collection of word sets.
 *
 * Provides methods for manipulating and querying multiple word sets.
 *
 * @class Words
 */
class Words {
  private wordsMap: WordsMap

  constructor(config?: Config) {
    if (config) {
      const { wordsMap } = config
      this.wordsMap = wordsMap
    } else {
      this.wordsMap = {}
    }
  }

  static getIntersection(firstArray: string[], secondArray: string[]): string[] {
    return getIntersection(firstArray, secondArray)
  }

  static getUnion(firstArray: string[], secondArray: string[]): string[] {
    return getUnion(firstArray, secondArray)
  }

  getIntersection(array: string[]): string[] {
    const allWordsArray = this.getAllWords()
    return getIntersection(allWordsArray, array)
  }

  getUnion(array: string[]): string[] {
    const allWordsArray = this.getAllWords()
    return getUnion(allWordsArray, array)
  }

  getAllWords(): string[] {
    if (this.isEmpty()) return []
    return getAllWords(this.wordsMap)
  }

  isEmpty(): boolean {
    if (Object.keys(this.wordsMap).length === 0 && this.wordsMap.constructor === Object) {
      return true
    }

    return false
  }
}

export default Words
