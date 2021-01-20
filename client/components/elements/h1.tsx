import React from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
}

const View: React.FC<Props> = props => (
  <h1 className={props.className}>
    {props.children}
  </h1>
)

export default styled(View)`
  font-weight: bold;
  font-size: 4rem;
  color: red;
`
