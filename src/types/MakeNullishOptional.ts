// src/types/MakeNullishOptional.ts
export type MakeNullishOptional<T> = {
	[P in keyof T]?: T[P] | null;
};
