export type Kilometer = number & { _: "Kilometer" };
export const numberToKilometer = (n: number): Kilometer => n as Kilometer;
