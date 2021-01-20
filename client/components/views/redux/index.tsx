import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { AppStoreState } from '~client/redux/store'

type ContainerProps = {}

type Props = {
  className?: string
  userAgent: string
} & ContainerProps

// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => {
  return (
    <div className={props.className}>
      <p className="ua">{props.userAgent}</p>
    </div>
  )
}

const StyledView = styled(View)`
  .ua {
    color: blue;
    font-size: 20px;
  }
`

export default connect(
  ({ userAgent }: AppStoreState, props: ContainerProps) => ({
    ...props,
    userAgent: userAgent.source
  })
)(StyledView)
