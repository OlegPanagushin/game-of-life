import { TGrid } from './types'

export const createGrid = (size: number) => {
  const grid: TGrid = []

  for (let i = 0; i < size; i++) {
    const row: boolean[] = []

    row.length = size
    row.fill(false)

    grid.push(row)
  }

  return grid
}

export const getLow = (n: number, size: number) => {
  return n === 0 ? size - 1 : n - 1
}

export const getHigh = (n: number, size: number) => {
  return n === size - 1 ? 0 : n + 1
}
