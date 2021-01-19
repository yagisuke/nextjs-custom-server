import React from 'react'
import styled from 'styled-components'
import ImageSvg from './image.svg'
import ImagePng from './image.png'
import ImageJpg from './image.jpg'

type Props = {
  className?: string
}

const View: React.FC<Props> = props => {
  return (
    <div className={props.className}>
      <div>
        <h2>SVG</h2>
        <ImageSvg />
      </div>
      <div>
        <h2>PNG</h2>
        <div className="bg_image bg_image_png" />
        <img src={ImagePng} width="300" height="300" />
      </div>
      <div>
        <h2>JPG</h2>
        <div className="bg_image bg_image_jpg" />
        <img src={ImageJpg} width="300" height="300" />
      </div>
    </div>
  )
}

export default styled(View)`
  .bg_image {
    width: 300px;
    height: 300px;
    background-size: cover;
    
    &.bg_image_png {
      background-image: url(${ImagePng});
    }
    
    
    &.bg_image_jpg {
      background-image: url(${ImageJpg});
    }
  }
`
