import { NextPageContext } from 'next'
import React from 'react'
import H1 from '~client/components/elements/h1'

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
        <H1>{this.props.title}</H1>
        <p>{this.props.message}</p>
      </>
    )
  }
}

export default Error
