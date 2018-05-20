"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SUMMER = 'summer';
exports.AUTUMN = 'autumn';
exports.WINTER = 'winter';
exports.SPRING = 'spring';
exports.seasons = { 1: exports.WINTER, 'january': exports.WINTER, 'jan': exports.WINTER,
    2: exports.WINTER, 'february': exports.WINTER, 'feb': exports.WINTER,
    3: exports.SPRING, 'march': exports.SPRING, 'mar': exports.SPRING,
    4: exports.SPRING, 'april': exports.SPRING, 'apr': exports.SPRING,
    5: exports.SPRING, 'may': exports.SPRING,
    6: exports.SUMMER, 'june': exports.SUMMER, 'jun': exports.SUMMER,
    7: exports.SUMMER, 'july': exports.SUMMER, 'jul': exports.SUMMER,
    8: exports.SUMMER, 'august': exports.SUMMER, 'aug': exports.SUMMER,
    9: exports.AUTUMN, 'september': exports.AUTUMN, 'sep': exports.AUTUMN,
    10: exports.AUTUMN, 'october': exports.AUTUMN, 'oct': exports.AUTUMN,
    11: exports.AUTUMN, 'november': exports.AUTUMN, 'nov': exports.AUTUMN,
    12: exports.WINTER, 'december': exports.WINTER, 'dec': exports.WINTER
};
/**
 * Takes a month and returns a season string
 * @param month a month as a string ("january"), an abbreviation ("january") or a number ("1" or `1`)
 */
exports.get_season_from_month = function (month) {
    return (exports.seasons[month] || '');
};
//# sourceMappingURL=get_season_from_month.js.map