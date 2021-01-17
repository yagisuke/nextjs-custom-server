import * as React from 'react'

type Props = {
  title: string
  message: string
}

class Error extends React.Component<Props> {
  render() {
    return (
      <>
        <h1>404</h1>
        <p>This is Error page.</p>
      </>
    )
  }
}

export default Error
