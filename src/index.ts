export function getAllSets() {
	/* Returns an array of all sets in the words object. */
}

export function getAllWords() {
	/* Returns a flattened array of all words in all sets. */
}

export function getSetSize() {
	/* Returns the number of words in a specific set. */
}
export function getUniqueWords() {
	/* Returns an array of all unique words in all sets. */
}

export function getWordCount(word: string) {
	/* Returns the count of how many times a word appears in all sets. */
}

export function containsWord(word: string) {
	/* Returns true if a word is present in any set, false otherwise. */
}

export function containsWordInSet(setKey: number, word: string) {
	/* Returns true if a word is present in specified setKey, false otherwise. */
}

export function containsSet(setKey: number) {
	/* Returns true if a set is present in the words object, false otherwise. */
}

export function getRandomWord() {
	/* Returns a random word from all sets. */
}

export function getRandomWordFromSet(setKey: number) {
	/* Returns a random word from a specific set. */
}

export function getRandomSet() {
	/* Returns a random set from the words object. */
}

export function getRandomSetKey() {
	/* Returns a random key from the words object. */
}

export function getWordIndex(setKey: number, word: string) {
	/* Returns the index of a word in a specific set. */
}

export function getWordAtIndex(setKey: number, index: number) {
	/* Returns the word at a specific index in a specific set. */
}

export function getSetAtIndex(index: number) {
	/* Returns the set at a specific index in the words object. */
}

export function getSetKeyAtIndex(index: number) {
	/* Returns the key of the set at a specific index in the words object. */
}

export function removeSet(setKey: number) {
	/* Removes a set from the words object. */
}

export function removeWord(setKey: number, word: number) {
	/* Removes a word from a specific set. */
}

export function updateWord(setKey: number, oldWord: string, newWord: string) {
	/* Updates a word in a specific set with a new word. */
}

export function registerWordMap() {
	/* Register external WordMap object */
}

export function add(a: number, b: number) {
	return a + b;
}
