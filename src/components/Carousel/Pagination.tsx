import styled from 'styled-components'

const NavGroup = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 1;

  ${(props: { position: string }) => props.position === 'top' ? `
    top: 0;
    padding-top: 14px;
  ` : ''};
  ${(props: { position: string }) => props.position === 'bottom' ? `
    bottom: 0;
    padding-bottom: 14px;
    align-items: flex-end;
  ` : ''};
  ${(props: { position: string }) => props.position === 'left' ? `
    top: 0;
    left: 0;
    height: 100%;
    padding-left: 14px;
    justify-content: flex-start;
  ` : ''};
  ${(props: { position: string }) => props.position === 'right' ? `
    top: 0;
    right: 0;
    height: 100%;
    padding-right: 14px;
    flex-direction: column;
    align-items: flex-end;
  ` : ''};
`

const Switches = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  ${(props: { position: string }) => props.position === 'left' ? `
    flex-direction: column;
  ` : ''};
  ${(props: { position: string }) => props.position === 'right' ? `
    flex-direction: column;
  ` : ''};
`

const Switch = styled.span`
  width: 8px;
  height: 8px;
  display: flex;
  border-radius: 50%;
  background-color: ${(props: {
    active?: boolean,
    dynamic?: boolean,
    accentColor: string,
  }) => props.active ? props.accentColor : '#ccc'};

  &:hover {
    cursor: ${(props: { active?: boolean, dynamic?: boolean }) => props.active ? 'default' : 'pointer'};
  }

  ${(props: { active?: boolean, dynamic?: boolean }) => props.dynamic ? `
  :first-child, :last-child {
    width: 3px;
    height: 3px;
  }

  :nth-child(2), :nth-last-child(2) {
    width: 6px;
    height: 6px;
  }
  ` : ''};
`

type PaginationOptions = {
  index: number,
  setIndex: (index: number) => void,
  totalImages: number,
  position: 'top' | 'bottom' | 'left' | 'right',
  maxLength: number,
  accentColor: string,
}

const Pagination = ({
  index,
  setIndex,
  totalImages,
  position,
  maxLength,
  accentColor,
}: PaginationOptions) => {
  function setImage (i: number) {
    index = i
    setIndex(index)
  }

  return (
    <NavGroup
      position={position}
    >
      <Switches
        position={position}
      >
        {[...Array(maxLength < totalImages ? maxLength : totalImages)].map((x, i) =>
          <Switch
            active={ index === i ? true : false }
            dynamic={ maxLength < totalImages ? true : false }
            accentColor={accentColor}
            onClick={ () => setImage(i) }
            key={i}
          />
        )}
      </Switches>
    </NavGroup>
  )
}

export default Pagination
