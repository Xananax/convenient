export enum SNAP_TYPE 
  { MID
  , MIN
  , MAX
  }

export const snap_mid =
  ( resolution: number, num: number): number =>
  ( Math.round(num / resolution) * resolution )

export const snap_min =
  ( resolution: number, num: number): number =>
  ( Math.floor(num / resolution) * resolution )

export const snap_max =
  ( resolution: number, num: number): number =>
  ( Math.ceil(num / resolution) * resolution )

/**
 * Returns the the nearest grid resolution less than or equal to the number. 
 *
 * @param resolution The grid resolution to snap to.
 * @param number The cursor to align.
 * @returns The nearest multiple of resolution lower than the number.
 * @type Number
 */
export const snap =
  ( resolution: number
  , num: number
  , type: SNAP_TYPE = SNAP_TYPE.MID
  ): number =>
  ( type === SNAP_TYPE.MAX
  ? snap_max(resolution, num)
  : ( type === SNAP_TYPE.MIN
    ? snap_min(resolution, num)
    : snap_mid(resolution, num)
    )
  )

export default snap