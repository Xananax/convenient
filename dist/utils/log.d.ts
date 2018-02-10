export declare const log_dev: (msg: string) => <T>(thing?: T | undefined, ...things: any[]) => T | undefined;
export declare const log_prod: (msg: string) => <T>(a: T) => T;
export declare const log: (msg: string) => <T>(thing?: T | undefined, ...things: any[]) => T | undefined;
export default log;
