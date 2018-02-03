export interface TextToken {
    type: 'TEXT';
    text: string;
}
export interface LinebreakToken {
    type: 'LINEBREAK';
}
export interface TagToken {
    type: 'TAG';
    text: string;
    url: string;
}
export interface EmailToken {
    type: 'EMAIL';
    text: string;
    url: string;
}
export declare type Token = TextToken | LinebreakToken | TagToken;
export declare const TAG: (tag: string) => {
    type: string;
    text: string;
    url: string;
};
export declare const TEXT: (text: string) => {
    type: string;
    text: string;
};
export declare const LINEBREAK: {
    type: string;
};
export declare const makeToken: (word: string) => {
    type: string;
    text: string;
};
/**
 * Takes a string and returns an array
 * of token. A token is an object of signature:
 * ```js
 * {type:string,text?:string,url?:string}
 * ```
 * Where `type` can be 'TEXT', 'TAG' or 'LINEBREAK'
 * @param text the original text
 * @param tokenArr optionally, an array to append to
 */
export declare const tokenize: (text: string, tokenArr?: ({
    type: "LINEBREAK";
} | {
    type: "TEXT";
    text: string;
} | {
    type: "TAG";
    text: string;
    url: string;
})[]) => {
    type: string;
}[];
