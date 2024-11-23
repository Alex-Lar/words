export interface WordMap {
	[key: number]: TypedWord[];
}

export type TypedWord = {
	word: string;
	type: number;
};
