import { parseWithOptions } from 'date-fns/fp'
import styled from 'styled-components'

import { mixins } from '../../styles/mixins.style'

export const PostContainer = styled.section`
  max-width: 54rem;
  height: auto;
  margin: 0 auto;
`

export const PostInfo = styled.div`
  height: 10.5rem;
  width: 100%;
  margin-top: -84px;
  padding: 2rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme['base-profile']};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  h2 {
    ${mixins.fonts.titleL}
    color: ${(props) => props.theme.title}
  }
`

export const PostInfoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.45rem;
    border-bottom: 2px solid transparent;
    transition: 0.35s;
  }

  a:hover {
    border-bottom: 2px solid ${(props) => props.theme.blue};
  }

  svg {
    color: ${(props) => props.theme.blue};
  }

  span {
    ${mixins.fonts.link}
    color: ${(props) => props.theme.blue}
  }
`

export const PostFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 2rem;

  svg {
    color: ${(props) => props.theme['base-label']};
    margin-right: 0.5rem;
  }

  span {
    ${mixins.fonts.textM}
    color: ${(props) => props.theme['base-span']};
  }
`

export const PostContent = styled.div`
  padding: 2rem;
  ${mixins.fonts.textM}
  color: ${(props) => props.theme['base-text']};

  img {
    max-width: 100%;
    margin: 1rem 0;
  }

  a {
    color: ${(props) => props.theme.blue};
  }

  a:visited {
    color: ${(props) => props.theme.blue};
  }
`
