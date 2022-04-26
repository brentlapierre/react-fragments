import styled from 'styled-components'

const NavGroup = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 8px;
  z-index: 1;

  ${(props: { position: string }) => props.position === 'top' ? `
    top: 0;
    padding-top: 14px;
  ` : ''};
  ${(props: { position: string }) => props.position === 'bottom' ? `
    bottom: 0;
    padding-bottom: 14px;
  ` : ''};
  ${(props: { position: string }) => props.position === 'left' ? `
    height: 100%;
    top: 0;
    padding-left: 14px;
    flex-direction: column;
    align-items: flex-start;
  ` : ''};
  ${(props: { position: string }) => props.position === 'right' ? `
    height: 100%;
    top: 0;
    right: 0;
    padding-right: 14px;
    flex-direction: column;
  ` : ''};
`

const Switch = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props: { active?: any }) => props.active ? '#2d73e3' : '#ccc'};

  &:hover {
    cursor: ${(props: { active?: any }) => props.active ? 'default' : 'pointer'};
  }
`

type PaginationOptions = {
  index: number,
  setIndex: (index: number) => void,
  totalImages: number,
  position: string,
}

const Pagination = ({ index, setIndex, totalImages, position }: PaginationOptions) => {
  function setImage (i: number) {
    index = i
    setIndex(index)
  }

  return (
    <NavGroup
      position={position}
    >
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
