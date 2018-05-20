export type SEASON = 
  | 'summer'
  | 'autumn'
  | 'winter'
  | 'spring'

export const SUMMER: SEASON = 'summer'
export const AUTUMN: SEASON = 'autumn'
export const WINTER: SEASON = 'winter'
export const SPRING: SEASON = 'spring'

export const seasons: { [ key: string ]: SEASON } = 
  { 1: WINTER, 'january': WINTER   , 'jan': WINTER
  , 2: WINTER, 'february': WINTER  , 'feb': WINTER
  
  , 3: SPRING, 'march': SPRING     , 'mar': SPRING
  , 4: SPRING, 'april': SPRING     , 'apr': SPRING
  , 5: SPRING, 'may': SPRING

  , 6: SUMMER, 'june': SUMMER      , 'jun': SUMMER
  , 7: SUMMER, 'july': SUMMER      , 'jul': SUMMER
  , 8: SUMMER, 'august': SUMMER    , 'aug': SUMMER

  , 9: AUTUMN, 'september': AUTUMN , 'sep': AUTUMN
  , 10: AUTUMN, 'october': AUTUMN   , 'oct': AUTUMN
  , 11: AUTUMN, 'november': AUTUMN  , 'nov': AUTUMN

  , 12: WINTER, 'december': WINTER  , 'dec': WINTER
  }

/**
 * Takes a month and returns a season string
 * @param month a month as a string ("january"), an abbreviation ("january") or a number ("1" or `1`)
 */
export const get_season_from_month = 
  ( month: number|string ): SEASON => 
  ( seasons[month] || ''
  )