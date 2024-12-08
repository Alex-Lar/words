import { Word, WordsMap } from "@alex-lar/words-shared-types";

export function getAllSets(wordsMap: WordsMap): Word[][]  {
  return Object.values(wordsMap);
}
