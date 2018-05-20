"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SEASON_SUMMER = 'summer';
exports.SEASON_AUTUMN = 'autumn';
exports.SEASON_WINTER = 'winter';
exports.SEASON_SPRING = 'spring';
var seasons = { 1: exports.SEASON_WINTER, 'january': exports.SEASON_WINTER, 'jan': exports.SEASON_WINTER,
    2: exports.SEASON_WINTER, 'february': exports.SEASON_WINTER, 'feb': exports.SEASON_WINTER,
    3: exports.SEASON_SPRING, 'march': exports.SEASON_SPRING, 'mar': exports.SEASON_SPRING,
    4: exports.SEASON_SPRING, 'april': exports.SEASON_SPRING, 'apr': exports.SEASON_SPRING,
    5: exports.SEASON_SPRING, 'may': exports.SEASON_SPRING,
    6: exports.SEASON_SUMMER, 'june': exports.SEASON_SUMMER, 'jun': exports.SEASON_SUMMER,
    7: exports.SEASON_SUMMER, 'july': exports.SEASON_SUMMER, 'jul': exports.SEASON_SUMMER,
    8: exports.SEASON_SUMMER, 'august': exports.SEASON_SUMMER, 'aug': exports.SEASON_SUMMER,
    9: exports.SEASON_AUTUMN, 'september': exports.SEASON_AUTUMN, 'sep': exports.SEASON_AUTUMN,
    10: exports.SEASON_AUTUMN, 'october': exports.SEASON_AUTUMN, 'oct': exports.SEASON_AUTUMN,
    11: exports.SEASON_AUTUMN, 'november': exports.SEASON_AUTUMN, 'nov': exports.SEASON_AUTUMN,
    12: exports.SEASON_WINTER, 'december': exports.SEASON_WINTER, 'dec': exports.SEASON_WINTER
};
/**
 * Takes a month and returns a season string
 * @param month a month as a string ("january"), an abbreviation ("january") or a number ("1" or `1`)
 */
exports.get_season_from_month = function (month) {
    return (seasons[month] || '');
};
//# sourceMappingURL=get_season_from_month.js.map