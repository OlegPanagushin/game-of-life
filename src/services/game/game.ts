import { throttle } from 'services/async'
import { PRESET_MAP, TPreset } from './presets'
import { createGrid, getHigh, getLow } from './helpers'

type TGrid = boolean[][]
type TTickHandler = (grid: TGrid, hasHistory: boolean) => void

export class GameService {
  constructor(private size: number, private readonly speed: number, private onTick: TTickHandler) {
    this.grid = createGrid(size)
    this._updateGrid(this.grid, false)
  }

  grid: TGrid = []
  private _history: TGrid[] = []
  private _stop: VoidFunction = () => {}

  private _updateGrid(grid: TGrid, updateHistory = true) {
    if (updateHistory) {
      this._history.push(this.grid)
    }

    this.grid = grid
    this.onTick(this.grid, this._history.length > 0)
  }

  clean() {
    this._stop()
    delete this.onTick
  }

  play() {
    const tick = () => {
      const { promise, clearDelay } = throttle(() => this.stepForward(), this.speed)
      this._stop = clearDelay

      promise.then(tick).catch((err) => {
        console.log(err)
      })
    }

    tick()
  }

  stop() {
    this._stop()
  }

  stepForward() {
    const newGrid: boolean[][] = []
    const prevGrid = this.grid

    for (let i = 0; i < this.size; i++) {
      const row: boolean[] = []
      const left = getLow(i, this.size)
      const right = getHigh(i, this.size)

      for (let j = 0; j < this.size; j++) {
        const top = getLow(j, this.size)
        const bottom = getHigh(j, this.size)

        let c = 0
        let status = prevGrid[i][j]

        if (prevGrid[left][top]) c += 1
        if (prevGrid[i][top]) c += 1
        if (prevGrid[right][top]) c += 1
        if (prevGrid[right][j]) c += 1
        if (prevGrid[right][bottom]) c += 1
        if (prevGrid[i][bottom]) c += 1
        if (prevGrid[left][bottom]) c += 1
        if (prevGrid[left][j]) c += 1

        if (status) {
          if (c < 2 || c > 3) {
            status = false
          }
        } else if (c === 3) {
          status = true
        }

        row.push(status)
      }

      newGrid.push(row)
    }
    this._updateGrid(newGrid)
  }

  stepBack() {
    this.stop()

    const prevGrid = this._history.pop()

    if (prevGrid) {
      this._updateGrid([...prevGrid], false)
    }
  }

  reset() {
    this.stop()

    const newGrid = createGrid(this.size)

    this._history = []
    this._updateGrid(newGrid, false)
  }

  //«Живые» клетки добавляются кликом по полю, в том числе во время игры. я бы предпочел тоггл
  toggleCellState(x: number, y: number) {
    if (!this.grid[x][y]) {
      this.grid[x][y] = true

      this._updateGrid(this.grid)
    }
  }

  applyPreset(preset: TPreset) {
    this.reset()

    PRESET_MAP[preset].forEach(([x, y]) => {
      if (this.size > y && this.size > y) {
        this.grid[x][y] = true
      }
    })

    this._updateGrid(this.grid, false)

    this.play()
  }
}
