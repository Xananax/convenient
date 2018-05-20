export declare type SEASON = 'summer' | 'autumn' | 'winter' | 'spring';
export declare const SEASON_SUMMER: SEASON;
export declare const SEASON_AUTUMN: SEASON;
export declare const SEASON_WINTER: SEASON;
export declare const SEASON_SPRING: SEASON;
/**
 * Takes a month and returns a season string
 * @param month a month as a string ("january"), an abbreviation ("january") or a number ("1" or `1`)
 */
export declare const get_season_from_month: (month: string | number) => SEASON;
