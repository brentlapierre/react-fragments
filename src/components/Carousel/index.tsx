import React, { Children, useState } from 'react'
import styled from 'styled-components'
import Controls from './Controls'
import Pagination from './Pagination'

type ElementSize = {
  width: number,
  height: number,
}

const Container = styled.div`
  position: relative;
  width: ${(props: ElementSize) => `${props.width}px`};
  height: ${(props: ElementSize) => `${props.height}px`};
  padding: 4px;
  background-color: #ccc;
  border-radius: 4px;
`

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const Images = styled.div`
  position: relative;
  right: ${(props: { right: number }) => `${props.right}px`};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #fff;

  & img {
    max-width: 100%;
  }
`

type CarouselProps = {
  width: number,
  height: number,
  controls?: boolean,
  pagination?: boolean,
  children: React.ReactNode,
}

const Carousel: React.FC<CarouselProps> = ({
  width,
  height,
  controls,
  pagination,
  children,
}) => {
  const [index, setIndex] = useState(0)
  let totalImages: number = Children.count(children)

  return (
    <Container
      width={width}
      height={height}
    >
      <ImageContainer>
        <Images right={width * index}>
          { children }
        </Images>
      </ImageContainer>
      { controls ? <Controls index={index} setIndex={setIndex} totalImages={totalImages} /> : '' }
      { pagination ? <Pagination index={index} setIndex={setIndex} totalImages={totalImages} /> : '' }
    </Container>
  )
}

export default Carousel
