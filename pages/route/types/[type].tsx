import { NextPageContext } from 'next'
import React from 'react'
import H1 from '~client/components/elements/h1'

type Props = {
  title: string
  types: string[]
}

class Page extends React.Component<Props> {
  static getInitialProps({ query }: NextPageContext) {
    return {
        title: query.type,
        types: query.types
    }
  }

  render() {
    if (!this.props.title || !this.props.types) {
      return (
        <>
          <H1>404 error</H1>
          <p>This page is error.</p>
        </>
      )
    }
    return (
      <>
        <H1>{this.props.title}</H1>
        <p>{this.props.types.toString()}</p>
      </>
    )
  }
}

export default Page
