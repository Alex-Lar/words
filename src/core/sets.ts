import { Word, WordsMap } from "@alex-lar/words-shared-types";

export function getAllSets(wordsMap: WordsMap): Word[][]  {
  return Object.values(wordsMap);
}

export function getSet(wordsMap: WordsMap, key: number): Word[] {
  return wordsMap[key];
}