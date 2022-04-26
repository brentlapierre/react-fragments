import styled from 'styled-components'

const NavGroup = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  padding-bottom: 8px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 3px;
  z-index: 1;
`

const Switch = styled.span`
  height: 9px;
  width: 9px;
  border-radius: 50%;
  background-color: ${(props: { active?: any }) => props.active ? '#2d73e3' : '#ccc'};

  &:hover {
    cursor: pointer;
  }
`

const Pagination = () => (
  <NavGroup>
    <Switch active />
    <Switch />
  </NavGroup>
)

export default Pagination
