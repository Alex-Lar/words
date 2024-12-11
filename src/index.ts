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

  /**
   * Creates an instance of WordsManager.
   *
   * @param {WordsMap} [wordsMap={}] - An optional initial map of words.
   */
  constructor(wordsMap: WordsMap = {}) {
    this.wordsMap = wordsMap
  }

  /**
   * Returns the intersection of two arrays of strings.
   *
   * @static
   * @param {string[]} firstArray - The first array of strings.
   * @param {string[]} secondArray - The second array of strings.
   * @returns {string[]} The intersection of the two arrays.
   */
  static getIntersection(firstArray: string[], secondArray: string[]): string[] {
    return fn.getIntersection(firstArray, secondArray)
  }

  /**
   * Returns the union of two arrays of strings.
   *
   * @static
   * @param {string[]} firstArray - The first array of strings.
   * @param {string[]} secondArray - The second array of strings.
   * @returns {string[]} The union of the two arrays.
   */
  static getUnion(firstArray: string[], secondArray: string[]): string[] {
    return fn.getUnion(firstArray, secondArray)
  }

  /**
   * Returns the intersection of the stored names and a given array.
   *
   * @param {string[]} array - An array of strings to intersect with stored names.
   * @returns {string[]} The intersection of stored names and the provided array.
   */
  getIntersection(array: string[]): string[] {
    const namesArray = this.getNames()
    return fn.getIntersection(namesArray, array)
  }

  /**
   * Returns the union of the stored names and a given array.
   *
   * @param {string[]} array - An array of strings to unite with stored names.
   * @returns {string[]} The union of stored names and the provided array.
   */
  getUnion(array: string[]): string[] {
    const namesArray = this.getNames()
    return fn.getUnion(namesArray, array)
  }

  /* Words Management */

  /**
   * Retrieves an array of names from the words map.
   *
   * @returns {string[]} An array of names. Returns an empty array if no names exist.
   */
  getNames(): string[] {
    if (this.isEmpty()) return []
    return fn.getAllNames(this.wordsMap)
  }

  /**
   * Retrieves an array of word objects from the words map.
   *
   * @returns {Word[]} An array of word objects. Returns an empty array if no words exist.
   */
  getWords(): Word[] {
    if (this.isEmpty()) return []
    return fn.getAllWords(this.wordsMap)
  }

  /**
   * Counts duplicates of a given name in the words map.
   *
   * @param {string} name - The name to count duplicates for.
   * @returns {number} The number of duplicates for the specified name.
   */
  getCount(name: string): number {
    return fn.getNameCount(this.getNames(), name)
  }

  /**
   * Retrieves unique names from the words map.
   *
   * @returns {string[]} An array of unique names.
   */
  getUniqueNames(): string[] {
    return fn.getUniqueNames(this.getNames())
  }

  /**
   * Checks if a specific name exists in the words map.
   *
   * @param {string} name - The name to check for existence.
   * @returns {boolean} True if the name exists, false otherwise.
   */
  hasName(name: string): boolean {
    return fn.hasName(this.getNames(), name)
  }

  /* Sets Management */

  /**
   * Retrieves a set of words by its key from the words map.
   *
   * @param {number} key - The key identifying the word set to retrieve.
   * @returns {Word[]} An array of word objects associated with the specified key.
   */
  getSet(key: number): Word[] {
    return fn.getSet(this.wordsMap, key)
  }

  /**
   * Retrieves all sets of words from the words map.
   *
   * @returns {Word[][]} An array containing all sets of word objects.
   */
  getSets(): Word[][] {
    return fn.getAllSets(this.wordsMap)
  }

  /**
   * Checks if the words map is empty.
   *
   * @returns {boolean} True if the words map is empty, false otherwise.
   */
  isEmpty(): boolean {
    return Object.keys(this.wordsMap).length === 0
  }

  /* Json/File utility */

  /**
   * Serializes the words map to a JSON string format.
   *
   * @returns {Promise<string>} A promise that resolves to a JSON string representation of the words map.
   */
  async getJson(): Promise<string> {
    return JSON.stringify(this.wordsMap)
  }

  /**
   * Creates a JSON file with the specified name containing the current words map data.
   *
   * @param {string} name - The name for the JSON file (must be a non-empty string).
   * @throws Will throw an error if the file name is invalid or empty.
   */
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
