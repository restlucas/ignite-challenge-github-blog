import styled from 'styled-components'

import { mixins } from '../../styles/mixins.style'

export const PublicationsContainer = styled.section`
  margin-top: 4.5rem;
`

export const PublicationsHeader = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
  margin-bottom: 0.875rem;

  h2 {
    ${mixins.fonts.titleS}
    color: ${(props) => props.theme['base-subtitle']}
  }

  span {
    ${mixins.fonts.textS}
    color: ${(props) => props.theme['base-span']}
  }
`

export const PublicationsFilter = styled.input`
  width: 100%;
  max-height: 3.125rem;
  padding: 1rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme['base-input']};
  border: none;

  ::placeholder {
    color: red;
  }
`

export const PublicationsList = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`
