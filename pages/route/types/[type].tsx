import { NextPageContext } from 'next'
import * as React from 'react'
// ______________________________________________________
//
// @ Types

type Props = {
  title: string
  types: string[]
}

// ______________________________________________________
//
// @ exports

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
          <h1>404 error</h1>
          <p>This page is error.</p>
        </>
      )
    }
    return (
      <>
        <h1>{this.props.title}</h1>
        <p>{this.props.types.toString()}</p>
      </>
    )
  }
}

export default Page
