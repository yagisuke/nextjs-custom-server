import React from 'react'
import styled from 'styled-components'

// ______________________________________________________
//
// @ Types
type Props = {
  className?: string
}

// ______________________________________________________
//
// @ View
const View: React.FC<Props> = props => (
  <h1 className={props.className}>
    {props.children}
  </h1>
)

// ______________________________________________________
//
// @ StyledView
export default styled(View)`
  font-weight: bold;
  font-size: 4rem;
  color: red;
`
