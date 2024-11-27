import Words from '../src'
import { getAllWords } from '../src/core'
import { getIntersection, getUnion } from '../src/core/arrays'

const wm1Array = ['a', 'BB', 'aaa', 'aaaa', 'AAAAA', 'c', 'd']

const wm2Array = ['b', 'BB', 'bbb', 'bbbb', 'AAAAA', 'e', 'f']

const objArr1 = [
  { name: 'a', type: 0 },
  { name: 'BB', type: 0 },
  { name: 'aaa', type: 0 },
  { name: 'aaaa', type: 0 },
  { name: 'AAAAA', type: 0 },
]

const objArr2 = [
  { name: 'b', type: 0 },
  { name: 'BB', type: 0 },
  { name: 'bbb', type: 0 },
  { name: 'bbbb', type: 0 },
  { name: 'AAAAA', type: 0 },
]

const wm1 = {
  0: objArr1,
  1: [
    { name: 'c', type: 0 },
    { name: 'd', type: 0 },
  ],
}
const wm2 = {
  0: objArr2,
  1: [
    { name: 'e', type: 0 },
    { name: 'f', type: 0 },
  ],
}

const unionArray = ['a', 'b', 'BB', 'aaa', 'bbb', 'aaaa', 'bbbb', 'AAAAA', 'c', 'd', 'e', 'f']
const intersectionArray = ['BB', 'AAAAA']

const w1 = new Words({ wordsMap: wm1 })
const w2 = new Words({ wordsMap: wm2 })

const w1Array = w1.getAllWords()
const w2Array = w2.getAllWords()

describe('Set Management Tests', () => {
  test('getAllSets returns all sets', () => {})

  test('getSetSize returns number of words in specific set', () => {})

  test('getSize returns number of sets in word map', () => {})
})

describe('Word Management Tests', () => {
  test('getAllWords returns flatten array of all words', () => {
    // Core function
    expect(getAllWords(wm1)).toEqual(expect.arrayContaining(wm1Array))
    expect(getAllWords(wm2)).toEqual(expect.arrayContaining(wm2Array))

    // Object method
    expect(w1.getAllWords()).toEqual(expect.arrayContaining(wm1Array))
    expect(w2.getAllWords()).toEqual(expect.arrayContaining(wm2Array))
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
    expect(Words.getIntersection(w1Array, w2Array)).toEqual(
      expect.arrayContaining(intersectionArray),
    )
    expect(Words.getIntersection(w2Array, w1Array)).toEqual(
      expect.arrayContaining(intersectionArray),
    )

    expect(Words.getIntersection(w1Array, [])).toEqual([])
    expect(Words.getIntersection(w2Array, [])).toEqual([])
    expect(Words.getIntersection([], w1Array)).toEqual([])
    expect(Words.getIntersection([], w2Array)).toEqual([])

    expect(Words.getIntersection(w1Array, w1Array)).toEqual(expect.arrayContaining(w1Array))
    expect(Words.getIntersection(w2Array, w2Array)).toEqual(expect.arrayContaining(w2Array))

    expect(Words.getIntersection([], [])).toEqual([])
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
    expect(Words.getUnion(w1Array, w2Array)).toEqual(expect.arrayContaining(unionArray))
    expect(Words.getUnion(w2Array, w1Array)).toEqual(expect.arrayContaining(unionArray))

    expect(Words.getUnion(w1Array, w1Array)).toEqual(expect.arrayContaining(w1Array))
    expect(Words.getUnion(w2Array, w2Array)).toEqual(expect.arrayContaining(w2Array))

    expect(Words.getUnion(w1Array, [])).toEqual(expect.arrayContaining(w1Array))
    expect(Words.getUnion(w2Array, [])).toEqual(expect.arrayContaining(w2Array))
    expect(Words.getUnion([], w1Array)).toEqual(expect.arrayContaining(w1Array))
    expect(Words.getUnion([], w2Array)).toEqual(expect.arrayContaining(w2Array))

    expect(Words.getUnion([], [])).toEqual(expect.arrayContaining([]))
  })
})
