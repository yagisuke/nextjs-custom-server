import React from 'react'
import H1 from '~client/components/elements/h1'

type Props = {
  title: string
  message: string
}

class Error extends React.Component<Props> {
  render() {
    return (
      <>
        <H1>404</H1>
        <p>This is Error page.</p>
      </>
    )
  }
}

export default Error
