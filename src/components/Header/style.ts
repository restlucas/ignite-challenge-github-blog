import styled from 'styled-components'

import leftEffect from '../../assets/left-effect.svg'
import rightEffect from '../../assets/right-effect.svg'

export const HeaderContainer = styled.header`
  height: 18.5rem;

  display: flex;
  align-items: start;
  justify-content: center;

  background-color: ${(props) => props.theme['base-profile']};
  background-image: url(${leftEffect}), url(${rightEffect});
  background-repeat: no-repeat;
  background-position:
    left center,
    right center;

  a {
    margin-top: 4rem;
  }
`

export const Logo = styled.img`
  height: 6.125rem;
  width: 9.25rem;
`
