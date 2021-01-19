import React from 'react'
import H1 from '~client/components/elements/h1'
import View from '~client/components/views/image'

type Props = {
  title: string
}

class Page extends React.Component<Props> {
  static getInitialProps() {
    return { title: '画像' }
  }
  render() {
    return (
      <>
        <H1>{this.props.title}</H1>
        <View />
      </>
    )
  }
}

export default Page
