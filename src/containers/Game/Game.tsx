import React, { MouseEvent, useCallback, useMemo, useEffect, useState, useRef } from 'react'
import { Button, InputAdornment, TextField, Typography } from '@material-ui/core'
import { GridOn } from '@material-ui/icons'

import { GameService, TGrid } from 'services/game'
import styles from './Game.module.scss'

const TICK_TIME = 150
const DEFAULT_SIZE = 38

type TState = {
  grid: TGrid
  hasHistory: boolean
}

export const Game = () => {
  const [size, setSize] = useState(DEFAULT_SIZE)
  const [{ grid, hasHistory }, setState] = useState<TState>({ grid: [], hasHistory: false })
  const gameRef = useRef<GameService>()

  useEffect(() => {
    const game = new GameService(size, TICK_TIME, (grid, hasHistory) => setState({ grid, hasHistory }))

    gameRef.current = game

    return () => {
      game.clean()
    }
  }, [gameRef, setState, size])

  const onClick = useCallback(
    ({ target }: MouseEvent<HTMLDivElement>) => {
      const cell = target as HTMLDivElement

      const iStr = cell.dataset['i']
      const jStr = cell.dataset['j']

      if (iStr && jStr) {
        const i = parseInt(iStr)
        const j = parseInt(jStr)

        gameRef.current?.toggleCellState(i, j)
      }
    },
    [gameRef],
  )

  const cellStyles = useMemo<React.CSSProperties>(
    () => ({
      width: `${100 / size}%`,
      paddingBottom: `calc(${100 / size}% - 2px)`,
    }),
    [size],
  )

  return (
    <div className={styles.game}>
      <div className={styles.buttons}>
        <Button color="primary" onClick={() => gameRef.current?.play()} variant="contained">
          Play
        </Button>
        <Button onClick={() => gameRef.current?.stop()} variant="outlined">
          Stop
        </Button>
        <Button onClick={() => gameRef.current?.reset()} variant="outlined">
          Reset
        </Button>

        <TextField
          className={styles.input}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <GridOn />
              </InputAdornment>
            ),
          }}
          inputProps={{
            style: { textAlign: 'right' },
          }}
          onChange={(e) => setSize(+e.target.value)}
          size="small"
          type="number"
          value={size}
          variant="outlined"
        />
      </div>

      <Typography variant="button">Generations</Typography>
      <div className={styles.buttons}>
        <Button disabled={!hasHistory} onClick={() => gameRef.current?.stepBack()} variant="outlined">
          Prev
        </Button>
        <Button onClick={() => gameRef.current?.stepForward()} variant="outlined">
          Next
        </Button>
      </div>

      <Typography variant="button">Presets</Typography>
      <div className={styles.buttons}>
        <Button onClick={() => gameRef.current?.applyPreset('glider')} variant="outlined">
          Glider
        </Button>
        <Button onClick={() => gameRef.current?.applyPreset('gosper_glider_gun')} variant="outlined">
          Gosper glider gun
        </Button>
        <Button onClick={() => gameRef.current?.applyPreset('diehard')} variant="outlined">
          Diehard
        </Button>
        <Button onClick={() => gameRef.current?.applyPreset('acorn')} variant="outlined">
          Acorn
        </Button>
      </div>

      <div className={styles.gridWrapper}>
        <div className={styles.grid} onClick={onClick}>
          {grid.map((row, i) =>
            row.map((cell, j) => (
              <div
                className={styles.cell}
                data-alive={cell}
                data-i={i}
                data-j={j}
                key={`${i}-${j}`}
                style={cellStyles}
              />
            )),
          )}
        </div>
      </div>
    </div>
  )
}
