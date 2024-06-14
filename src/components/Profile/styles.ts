import styled from 'styled-components'

import { mixins } from '../../styles/mixins.style'

export const ProfileContainer = styled.div`
  margin-top: -106px;
  height: 13.25rem;
  width: 100%;
  padding: 2rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme['base-profile']};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const ProfileContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`

export const ProfileAvatar = styled.img`
  max-width: 9.25rem;
  max-height: 9.25rem;
  border-radius: 8px;
`

export const ProfileInfo = styled.div`
  flex: 1;

  p {
    ${mixins.fonts.textM}
    color: ${(props) => props.theme['base-text']};
    margin-bottom: 1.5rem;
  }

  div:last-child {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 1.5rem;

    div {
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 0.5rem;

      svg {
        color: ${(props) => props.theme['base-label']};
      }
      span {
        ${mixins.fonts.textM}
        color: ${(props) => props.theme['base-subtitle']}
      }
    }
  }
`

export const ProfileName = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: space-between;

  h1 {
    ${mixins.fonts.titleL};
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 0.5rem;
  }

  a,
  svg {
    color: ${(props) => props.theme.blue};
  }

  a {
    ${mixins.fonts.link}
    font-weight: bold;

    display: flex;
    align-items: center;
    justify-content: end;
    gap: 0.35rem;

    border-bottom: 2px solid transparent;
    transition: 0.35s;
  }

  a:hover {
    border-bottom: 2px solid ${(props) => props.theme.blue};
  }
`
