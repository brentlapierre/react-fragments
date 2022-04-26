import styled from 'styled-components'
import ArrowLeft from '../Icon/ArrowLeft'
import ArrowRight from '../Icon/ArrowRight'

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

export default Controls
