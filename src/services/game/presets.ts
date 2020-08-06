export const GLIDER = [
  [7, 7],
  [8, 8],
  [8, 9],
  [9, 7],
  [7, 8],
]

export const GOSPER_GLIDER_GUN = [
  [5, 1],
  [5, 2],
  [6, 1],
  [6, 2],
  [3, 35],
  [3, 36],
  [4, 35],
  [4, 36],
  [1, 25],
  [2, 25],
  [2, 23],
  [3, 21],
  [3, 22],
  [4, 21],
  [4, 22],
  [5, 21],
  [5, 22],
  [6, 23],
  [6, 25],
  [7, 25],
  [6, 18],
  [5, 17],
  [6, 17],
  [7, 17],
  [4, 16],
  [8, 16],
  [6, 15],
  [3, 13],
  [3, 14],
  [9, 13],
  [9, 14],
  [4, 12],
  [8, 12],
  [5, 11],
  [6, 11],
  [7, 11],
]

export const DIEHARD = [
  [1, 7],
  [2, 1],
  [2, 2],
  [3, 2],
  [3, 6],
  [3, 7],
  [3, 8],
]

export const ACORN = [
  [1, 2],
  [2, 4],
  [3, 1],
  [3, 2],
  [3, 5],
  [3, 6],
  [3, 7],
]

export type TPreset = 'acorn' | 'diehard' | 'glider' | 'gosper_glider_gun'

export const PRESET_MAP = {
  acorn: ACORN,
  diehard: DIEHARD,
  glider: GLIDER,
  gosper_glider_gun: GOSPER_GLIDER_GUN,
}
