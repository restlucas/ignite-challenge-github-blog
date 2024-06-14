import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { NavLink } from 'react-router-dom'

import { Post } from '../../context/PostsContext'
import { CardBody, CardContainer, CardHeader } from './styles'

export function PostCard({ number, title, body, created_at }: Post) {
  const timeDistanceToNow = formatDistanceToNow(new Date(created_at), {
    addSuffix: true,
    locale: ptBR,
  })

  return (
    <NavLink to={`/post/${number}`} style={{ textDecoration: 'none' }}>
      <CardContainer>
        <CardHeader>
          <h2>{title}</h2>
          <span>{timeDistanceToNow}</span>
        </CardHeader>
        <CardBody>
          <p>{body}</p>
        </CardBody>
      </CardContainer>
    </NavLink>
  )
}
