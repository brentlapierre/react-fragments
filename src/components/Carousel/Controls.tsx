import styled from 'styled-components'
import ArrowLeft from '../Icon/ArrowLeft'
import ArrowRight from '../Icon/ArrowRight'

const BtnGroup = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
`

const Btn = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #777;

  ${(props: { disabled: boolean }) => props.disabled ? '' : `
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
  }`}
`

const Icon = styled.span`
  transform: scale(1.5);
`

type ControlsOptions = {
  index: number,
  setIndex: (index: number) => void,
  totalImages: number,
}

const Controls = ({ index, setIndex, totalImages }: ControlsOptions) => {
  function prevImage () {
    index -= 1
    setIndex(index)
  }

  function nextImage () {
    index += 1
    setIndex(index)
  }

  return (
    <BtnGroup>
      <Btn
        disabled={ index === 0 ? true : false }
        onClick={ index !== 0 ? () => prevImage() : () => null }
      >
        <Icon><ArrowLeft /></Icon>
      </Btn>
      <Btn
        disabled={ (index + 1) === totalImages ? true : false }
        onClick={ (index + 1) !== totalImages ? () => nextImage() : () => null }
      >
        <Icon><ArrowRight /></Icon>
      </Btn>
    </BtnGroup>
  )
}

export default Controls
