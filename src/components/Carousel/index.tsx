import React from 'react'
import styled from 'styled-components'
import Controls from './Controls'
import Pagination from './Pagination'

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

type CarouselProps = {
  controls?: boolean,
  pagination?: boolean,
  children: React.ReactNode,
}

const Carousel: React.FC<CarouselProps> = ({ controls, pagination, children }) => (
  <Container>
    <Images>
      { children }
    </Images>
    { controls ? <Controls /> : '' }
    { pagination ? <Pagination /> : '' }
  </Container>
)

export default Carousel
