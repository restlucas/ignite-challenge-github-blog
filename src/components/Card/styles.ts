import styled from 'styled-components'

import { mixins } from '../../styles/mixins.style'

export const CardContainer = styled.article`
  height: 16.25rem;
  width: 26rem;
  padding: 2rem;
  overflow: hidden;
  cursor: pointer;
  border-radius: 10px;
  background-color: ${(props) => props.theme['base-post']};
  border: 2px solid transparent;
  transition: 0.35s;

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }
`

export const CardHeader = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  gap: 1rem;

  h2 {
    ${mixins.fonts.titleM}
    color: ${(props) => props.theme['base-title']};
  }

  span {
    ${mixins.fonts.textS}
    color: ${(props) => props.theme['base-span']}
  }
`

export const CardBody = styled.div`
  overflow: hidden;
  margin-top: 1rem;
  height: 7rem;

  p {
    ${mixins.fonts.textM}
    color: ${(props) => props.theme['base-text']};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
`
