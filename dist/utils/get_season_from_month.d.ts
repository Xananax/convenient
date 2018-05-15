export declare type SEASON = 'summer' | 'autumn' | 'winter' | 'spring';
export declare const SUMMER: SEASON;
export declare const AUTUMN: SEASON;
export declare const WINTER: SEASON;
export declare const SPRING: SEASON;
export declare const seasons: {
    [key: string]: SEASON;
};
export declare const get_season_from_month: (month: string | number) => SEASON;
