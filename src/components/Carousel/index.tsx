import React, { Children, useEffect, useState } from 'react'
import styled from 'styled-components'
import Controls from './Controls'
import Pagination from './Pagination'

type Container = {
  width: number,
  height: number,
  borderColor: string,
}

const Container = styled.div`
  position: relative;
  width: ${(props: Container) => `${props.width}px`};
  height: ${(props: Container) => `${props.height}px`};
  padding: 4px;
  background-color: ${(props: Container) => props.borderColor};
  border-radius: 4px;
`

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #fff;
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
  accentColor: string,
  border?: {
    color: string,
  },
  controls?: boolean,
  autoplay?: number,
  pagination?: boolean,
  position?: 'top' | 'bottom' | 'left' | 'right',
  maxLength?: number,
  children: React.ReactNode,
}

const Carousel: React.FC<CarouselProps> = ({
  width,
  height,
  accentColor = '#2d73e3',
  border = {
    color: 'transparent',
  },
  controls,
  autoplay,
  pagination,
  position = 'bottom',
  maxLength = 10,
  children,
}) => {
  const [index, setIndex] = useState(0)
  let totalImages: number = Children.count(children)
  let borderColor: string = border.color

  useEffect(() => {
    let timer: any

    if (autoplay !== undefined && autoplay > 0) {
      timer = setInterval(() => {
        setIndex(index => (index + 1) < totalImages ? index + 1 : 0)
      }, autoplay * 1000)
    }

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <Container
      width={width}
      height={height}
      borderColor={borderColor}
    >
      <ImageContainer>
        <Images right={width * index}>
          { children }
        </Images>
      </ImageContainer>
      { controls ?
        <Controls
          index={index}
          setIndex={setIndex}
          totalImages={totalImages}
          accentColor={accentColor}
        /> : ''
      }
      { pagination ?
        <Pagination
          index={index}
          setIndex={setIndex}
          totalImages={totalImages}
          position={position}
          maxLength={maxLength}
          accentColor={accentColor}
        /> : ''
      }
    </Container>
  )
}

export default Carousel
