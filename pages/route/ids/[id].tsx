import { NextPageContext } from 'next'
import * as React from 'react'
// ______________________________________________________
//
// @ Types

type Props = {
  title: string
  ids: string[]
}

// ______________________________________________________
//
// @ exports

class Page extends React.Component<Props> {
  static getInitialProps({ query }: NextPageContext) {
    return {
        title: query.id,
        ids: [query.id]
    }
  }

  render() {
    if (!this.props.title || !this.props.ids) {
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
        <p>{this.props.ids.toString()}</p>
      </>
    )
  }
}

export default Page
