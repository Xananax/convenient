export type SEASON = 
  | 'summer'
  | 'autumn'
  | 'winter'
  | 'spring'

export const SEASON_SUMMER: SEASON = 'summer'
export const SEASON_AUTUMN: SEASON = 'autumn'
export const SEASON_WINTER: SEASON = 'winter'
export const SEASON_SPRING: SEASON = 'spring'

const seasons: { [ key: string ]: SEASON } = 
  { 1: SEASON_WINTER, 'january': SEASON_WINTER   , 'jan': SEASON_WINTER
  , 2: SEASON_WINTER, 'february': SEASON_WINTER  , 'feb': SEASON_WINTER
  
  , 3: SEASON_SPRING, 'march': SEASON_SPRING     , 'mar': SEASON_SPRING
  , 4: SEASON_SPRING, 'april': SEASON_SPRING     , 'apr': SEASON_SPRING
  , 5: SEASON_SPRING, 'may': SEASON_SPRING

  , 6: SEASON_SUMMER, 'june': SEASON_SUMMER      , 'jun': SEASON_SUMMER
  , 7: SEASON_SUMMER, 'july': SEASON_SUMMER      , 'jul': SEASON_SUMMER
  , 8: SEASON_SUMMER, 'august': SEASON_SUMMER    , 'aug': SEASON_SUMMER

  , 9: SEASON_AUTUMN, 'september': SEASON_AUTUMN , 'sep': SEASON_AUTUMN
  , 10: SEASON_AUTUMN, 'october': SEASON_AUTUMN   , 'oct': SEASON_AUTUMN
  , 11: SEASON_AUTUMN, 'november': SEASON_AUTUMN  , 'nov': SEASON_AUTUMN

  , 12: SEASON_WINTER, 'december': SEASON_WINTER  , 'dec': SEASON_WINTER
  }

/**
 * Takes a month and returns a season string
 * @param month a month as a string ("january"), an abbreviation ("january") or a number ("1" or `1`)
 */
export const get_season_from_month = 
  ( month: number|string ): SEASON => 
  ( seasons[month] || ''
  )