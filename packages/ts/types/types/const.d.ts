declare const colors: readonly ["♠", "♥", "♣", "♦"];
declare const values: readonly ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
type Values = typeof values[number];
type Colors = typeof colors[number];
declare function createCard(value: Values, color: Colors): {
    value: "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "J" | "Q" | "K" | "A";
    color: "♠" | "♥" | "♣" | "♦";
};
