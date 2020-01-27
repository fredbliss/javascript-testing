import PropTypes from 'prop-types'
import React from 'react'
import {render as rtlRender} from '@testing-library/react'
import {ThemeProvider} from 'emotion-theming'
import * as themes from '../src/themes'

//second argument uses destructuring assignment syntax.  see
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
function render(ui, {theme = themes.dark, ...options} = {}) {
  function Wrapper({children}) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
  }

  Wrapper.propTypes = {
    children: PropTypes.node,
  }

  return rtlRender(ui, {wrapper: Wrapper, ...options})
}

export * from '@testing-library/react'
export {render}
