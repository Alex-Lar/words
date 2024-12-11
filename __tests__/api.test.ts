import { Word, WordsMap } from '@alex-lar/words-shared-types'
import WordsManager from '../src'
import { getAllNames } from '../src/core'
import { getIntersection, getUnion } from '../src/core/arrays'

const wm1Array = ['a', 'BB', 'aaa', 'aaaa', 'AAAAA', 'c', 'd']

const wm2Array = ['b', 'BB', 'bbb', 'bbbb', 'AAAAA', 'e', 'f']

const objArr1 = [
  { name: 'a' },
  { name: 'BB' },
  { name: 'aaa' },
  { name: 'aaaa' },
  { name: 'AAAAA' },
] as Word[]

const objArr2 = [
  { name: 'b' },
  { name: 'BB' },
  { name: 'bbb' },
  { name: 'bbbb' },
  { name: 'AAAAA' },
]

const wm1 = {
  0: objArr1 as Word[],
  1: [{ name: 'c' }, { name: 'd' }] as Word[],
} as WordsMap

const wm2 = {
  0: objArr2,
  1: [{ name: 'e' }, { name: 'f' }] as Word[],
}

const unionArray = ['a', 'b', 'BB', 'aaa', 'bbb', 'aaaa', 'bbbb', 'AAAAA', 'c', 'd', 'e', 'f']
const intersectionArray = ['BB', 'AAAAA']

const w1 = new WordsManager(wm1)
const w2 = new WordsManager(wm2)

const w1Array = w1.getNames()
const w2Array = w2.getNames()

describe('Set Management Tests', () => {
  test('getAllSets returns all sets', () => {})

  test('getSetSize returns number of words in specific set', () => {})

  test('getSize returns number of sets in word map', () => {})
})

describe('Word Management Tests', () => {
  test('getAllWords returns flatten array of all words', () => {
    // Core function
    expect(getAllNames(wm1)).toEqual(expect.arrayContaining(wm1Array))
    expect(getAllNames(wm2)).toEqual(expect.arrayContaining(wm2Array))

    // Object method
    expect(w1.getNames()).toEqual(expect.arrayContaining(wm1Array))
    expect(w2.getNames()).toEqual(expect.arrayContaining(wm2Array))
  })
})

// describe("Word Map Manipulation Tests", () => {});

describe('Arrays operations tests', () => {
  test('getIntersection returns correct intersection of two arrays', () => {
    // Core function
    expect(getIntersection(w1Array, w2Array)).toEqual(expect.arrayContaining(intersectionArray))

    expect(getIntersection(w1Array, [])).toEqual([])
    expect(getIntersection([], w2Array)).toEqual([])

    expect(getIntersection([], [])).toEqual([])

    // Object Method
    expect(w1.getIntersection(w2Array)).toEqual(expect.arrayContaining(intersectionArray))
    expect(w2.getIntersection(w1Array)).toEqual(expect.arrayContaining(intersectionArray))

    expect(w1.getIntersection(w1Array)).toEqual(expect.arrayContaining(w1Array))
    expect(w2.getIntersection(w2Array)).toEqual(expect.arrayContaining(w2Array))

    expect(w1.getIntersection([])).toEqual([])
    expect(w2.getIntersection([])).toEqual([])

    // Static Method
    expect(WordsManager.getIntersection(w1Array, w2Array)).toEqual(
      expect.arrayContaining(intersectionArray)
    )
    expect(WordsManager.getIntersection(w2Array, w1Array)).toEqual(
      expect.arrayContaining(intersectionArray)
    )

    expect(WordsManager.getIntersection(w1Array, [])).toEqual([])
    expect(WordsManager.getIntersection(w2Array, [])).toEqual([])
    expect(WordsManager.getIntersection([], w1Array)).toEqual([])
    expect(WordsManager.getIntersection([], w2Array)).toEqual([])

    expect(WordsManager.getIntersection(w1Array, w1Array)).toEqual(expect.arrayContaining(w1Array))
    expect(WordsManager.getIntersection(w2Array, w2Array)).toEqual(expect.arrayContaining(w2Array))

    expect(WordsManager.getIntersection([], [])).toEqual([])
  })

  test('getUnion returns correct union of two arrays', () => {
    // Core function
    expect(getUnion(w1Array, w2Array)).toEqual(expect.arrayContaining(unionArray))
    expect(getUnion(w2Array, w1Array)).toEqual(expect.arrayContaining(unionArray))

    expect(getUnion(w1Array, w1Array)).toEqual(expect.arrayContaining(w1Array))
    expect(getUnion(w2Array, w2Array)).toEqual(expect.arrayContaining(w2Array))

    expect(getUnion(w1Array, [])).toEqual(expect.arrayContaining(w1Array))
    expect(getUnion([], w1Array)).toEqual(expect.arrayContaining(w1Array))

    expect(getUnion(w2Array, [])).toEqual(expect.arrayContaining(w2Array))
    expect(getUnion([], w2Array)).toEqual(expect.arrayContaining(w2Array))

    expect(getUnion([], [])).toEqual([])

    // Object Method
    expect(w1.getUnion(w2Array)).toEqual(expect.arrayContaining(unionArray))
    expect(w2.getUnion(w1Array)).toEqual(expect.arrayContaining(unionArray))

    expect(w1.getUnion(w1Array)).toEqual(expect.arrayContaining(w1Array))
    expect(w2.getUnion(w2Array)).toEqual(expect.arrayContaining(w2Array))

    expect(w1.getUnion([])).toEqual(expect.arrayContaining(w1Array))
    expect(w2.getUnion([])).toEqual(expect.arrayContaining(w2Array))

    // Static Method
    expect(WordsManager.getUnion(w1Array, w2Array)).toEqual(expect.arrayContaining(unionArray))
    expect(WordsManager.getUnion(w2Array, w1Array)).toEqual(expect.arrayContaining(unionArray))

    expect(WordsManager.getUnion(w1Array, w1Array)).toEqual(expect.arrayContaining(w1Array))
    expect(WordsManager.getUnion(w2Array, w2Array)).toEqual(expect.arrayContaining(w2Array))

    expect(WordsManager.getUnion(w1Array, [])).toEqual(expect.arrayContaining(w1Array))
    expect(WordsManager.getUnion(w2Array, [])).toEqual(expect.arrayContaining(w2Array))
    expect(WordsManager.getUnion([], w1Array)).toEqual(expect.arrayContaining(w1Array))
    expect(WordsManager.getUnion([], w2Array)).toEqual(expect.arrayContaining(w2Array))

    expect(WordsManager.getUnion([], [])).toEqual(expect.arrayContaining([]))
  })
})
