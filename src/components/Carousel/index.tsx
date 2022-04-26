import React from 'react'
import styled from 'styled-components'
import ArrowLeft from '../Icon/ArrowLeft'
import ArrowRight from '../Icon/ArrowRight'

const Container = styled.div`
  position: relative;
  height: 225px;
  width: 400px;
  padding: 4px;
  background-color: #ccc;
  border-radius: 4px;
`

const Images = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #fff;
  overflow: hidden;

  & img {
    max-width: 100%;
  }
`

const BtnGroup = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
`

const Btn = styled.div`
  height: 100%;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
  }
`

const Icon = styled.span`
  transform: scale(1.5);
`

const Controls = () => (
  <BtnGroup>
    <Btn>
      <Icon><ArrowLeft /></Icon>
    </Btn>
    <Btn>
      <Icon><ArrowRight /></Icon>
    </Btn>
  </BtnGroup>
)

type CarouselProps = {
  controls: boolean,
  children: React.ReactNode,
}

const Carousel: React.FC<CarouselProps> = ({ controls, children }) => (
  <Container>
    <Images>
      { children }
    </Images>
    { controls ? <Controls /> : '' }
  </Container>
)

export default Carousel
