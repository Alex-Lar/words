import * as core from "./core";
import { Word, WordsMap } from '@alex-lar/words-shared-types'
import { Config } from './types'

/**
 * Represents a collection of word sets.
 *
 * Provides methods for manipulating and querying multiple word sets.
 *
 * @class WordsManager
 */
class WordsManager {
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
    return core.getIntersection(firstArray, secondArray)
  }

  static getUnion(firstArray: string[], secondArray: string[]): string[] {
    return core.getUnion(firstArray, secondArray)
  }

  getIntersection(array: string[]): string[] {
    const namesArray = this.getAllNames()
    return core.getIntersection(namesArray, array)
  }

  getUnion(array: string[]): string[] {
    const namesArray = this.getAllNames()
    return core.getUnion(namesArray, array)
  }

  /* Words Management */

  getAllNames(): string[] {
    if (this.isEmpty()) return []
    return core.getAllNames(this.wordsMap)
  }

  getAllWords(): Word[] {
    if (this.isEmpty()) return []
    return core.getAllWords(this.wordsMap)
  }

  /* Sets Management */

  /**
   * return array of all sets
   */
  getAllSetsAsArray() {
    return core.getAllSets(this.wordsMap)
  }

  getSetSize(key: number) {
    // Return size of set (how many words objects in that set)
  }

  getSize() {
    // return size of words-map object (how many sets in words-map)
  }

  containsSet(key: number) {
    /* Returns true if a set is present in the words object, false otherwise. */
  }

  getSet(key: number) {
    /* Returns the set at a specific index in the words object. */
  }

  removeSet(setKey: number) {
    /* Removes a set from the words object. */
  }

  isEmpty(): boolean {
    return Object.keys(this.wordsMap).length === 0
  }

  // Json/File utility
  async getJson(): Promise<string> {
    return JSON.stringify(this.wordsMap)
  }

  async createJsonFile(name: string): Promise<void> {
    if (typeof name !== 'string' || !name.trim()) {
      throw new Error('Invalid file name')
    }

    try {
      await core.createFile(name, '.json', await this.getJson())
    } catch (e) {
      console.log('Error creating JSON file: ', e)
    }
  }
}

export default WordsManager
