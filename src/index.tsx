import React from 'react'
import ReactDOM from 'react-dom'
import { CssBaseline } from '@material-ui/core'

import { Game } from 'containers/Game'

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Game />
  </React.StrictMode>,
  document.getElementById('root'),
)
