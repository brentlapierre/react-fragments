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
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: ${(props: { active?: any }) => props.active ? '#2d73e3' : '#ccc'};

  &:hover {
    cursor: pointer;
  }
`

type PaginationOptions = {
  index: number,
  setIndex: (index: number) => void,
  totalImages: number,
}

const Pagination = ({ index, setIndex, totalImages }: PaginationOptions) => {
  function setImage (i: number) {
    index = i
    setIndex(index)
  }

  return (
    <NavGroup>
      {[...Array(totalImages)].map((x, i) =>
        <Switch
          active={ index === i ? true : false }
          onClick={ () => setImage(i) }
          key={i}
        />
      )}
    </NavGroup>
  )
}

export default Pagination
