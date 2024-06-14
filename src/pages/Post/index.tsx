import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faCalendarDay,
  faChevronLeft,
  faComment,
  faUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

import { api } from '../../lib/axios'
import {
  PostContainer,
  PostContent,
  PostFooter,
  PostInfo,
  PostInfoHeader,
} from './styles'

export interface FullPost {
  number: number
  html_url: string
  title: string
  body: string
  user: {
    login: string
  }
  created_at: string
  comments: number
}

export function Post() {
  const [post, setPost] = useState<FullPost>()
  const { id } = useParams()

  async function getPost() {
    const response = await api.get(
      `repos/restlucas/ignite-challenge-github-blog/issues/${id}`,
    )
    setPost(response.data)
  }

  useEffect(() => {
    getPost()
  }, [])

  return (
    <PostContainer>
      {post && (
        <>
          <PostInfo>
            <PostInfoHeader>
              <NavLink to="/">
                <FontAwesomeIcon icon={faChevronLeft} fontSize={12} />
                <span>VOLTAR</span>
              </NavLink>
              <NavLink to={post.html_url}>
                <span>VER NO GITHUB</span>
                <FontAwesomeIcon icon={faUpRightFromSquare} fontSize={12} />
              </NavLink>
            </PostInfoHeader>
            <h2>{post.title}</h2>
            <PostFooter>
              <div>
                <FontAwesomeIcon icon={faGithub} fontSize={18} />
                <span>{post.user.login}</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faCalendarDay} fontSize={18} />
                <span>
                  {formatDistanceToNow(new Date(post.created_at), {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </span>
              </div>
              <div>
                <FontAwesomeIcon icon={faComment} fontSize={18} />
                <span>{post.comments}</span>
              </div>
            </PostFooter>
          </PostInfo>
          <PostContent>
            <p>{post.body}</p>
          </PostContent>
        </>
      )}
    </PostContainer>
  )
}
