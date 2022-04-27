import styled from 'styled-components'
import ArrowLeft from '../Icon/ArrowLeft'
import ArrowRight from '../Icon/ArrowRight'

const BtnGroup = styled.div`
  position: absolute;
  width: calc(100% - 16px);
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
`

const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 6px;
  color: ${(props: { disabled: boolean, accentColor: string }) => props.accentColor};
  border-radius: 4px;

  ${(props: { disabled: boolean, accentColor: string }) => props.disabled ? `
  color: ${props.accentColor}77;
  ` : `
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
  }`}
`

const Icon = styled.span`
  display: flex;
  align-items: center;
  transform: scale(1.5);
`

type ControlsOptions = {
  index: number,
  setIndex: (index: number) => void,
  totalImages: number,
  accentColor: string,
}

const Controls = ({
  index,
  setIndex,
  totalImages,
  accentColor,
}: ControlsOptions) => {
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
        disabled={index === 0 ? true : false}
        accentColor={accentColor}
        onClick={index !== 0 ? () => prevImage() : () => null}
      >
        <Icon><ArrowLeft /></Icon>
      </Btn>
      <Btn
        disabled={(index + 1) === totalImages ? true : false}
        accentColor={accentColor}
        onClick={(index + 1) !== totalImages ? () => nextImage() : () => null}
      >
        <Icon><ArrowRight /></Icon>
      </Btn>
    </BtnGroup>
  )
}

export default Controls
