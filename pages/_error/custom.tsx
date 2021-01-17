import { NextPageContext } from 'next'
import * as React from 'react'

type Props = {
  title: string
  message: string
}

class Error extends React.Component<Props> {
  static getInitialProps(ctx: NextPageContext) {
    const { res, err, query } = ctx
    const title = (res && res.statusCode) || (err && err.statusCode) || 'This is Error page.'
    const message = query && query.message || 'hello'
    return {
      title,
      message
    }
  }
  render() {
    return (
      <>
        <h1>{this.props.title}</h1>
        <p>{this.props.message}</p>
      </>
    )
  }
}

export default Error
