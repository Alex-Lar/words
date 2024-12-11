import * as fn from './core'
import { Word, WordsMap } from '@alex-lar/words-shared-types'

/**
 * Represents a collection of word sets.
 * Provides methods for manipulating and querying multiple word sets.
 *
 * @class WordsManager
 */
class WordsManager {
  private wordsMap: WordsMap

  constructor(wordsMap: WordsMap = {}) {
    this.wordsMap = wordsMap
  }

  static getIntersection(firstArray: string[], secondArray: string[]): string[] {
    return fn.getIntersection(firstArray, secondArray)
  }

  static getUnion(firstArray: string[], secondArray: string[]): string[] {
    return fn.getUnion(firstArray, secondArray)
  }

  getIntersection(array: string[]): string[] {
    const namesArray = this.getNames()
    return fn.getIntersection(namesArray, array)
  }

  getUnion(array: string[]): string[] {
    const namesArray = this.getNames()
    return fn.getUnion(namesArray, array)
  }

  /* Words Management */
  getNames(): string[] {
    if (this.isEmpty()) return []
    return fn.getAllNames(this.wordsMap)
  }

  getWords(): Word[] {
    if (this.isEmpty()) return []
    return fn.getAllWords(this.wordsMap)
  }

  getCount(name: string): number {
    return fn.getNameCount(this.getNames(), name)
  }

  getUniqueNames(): string[] {
    return fn.getUniqueNames(this.getNames())
  }

  hasName(name: string): boolean {
    return fn.hasName(this.getNames(), name)
  }

  /* Sets Management */
  getSet(key: number): Word[] {
    return fn.getSet(this.wordsMap, key)
  }

  getSets(): Word[][] {
    return fn.getAllSets(this.wordsMap)
  }

  isEmpty(): boolean {
    return Object.keys(this.wordsMap).length === 0
  }

  /* Json/File utility */
  async getJson(): Promise<string> {
    return JSON.stringify(this.wordsMap)
  }

  async createJsonFile(name: string): Promise<void> {
    if (typeof name !== 'string' || !name.trim()) {
      throw new Error('Invalid file name')
    }

    try {
      await fn.createFile(name, '.json', await this.getJson())
    } catch (e) {
      console.log('Error creating JSON file: ', e)
    }
  }
}

export default WordsManager
