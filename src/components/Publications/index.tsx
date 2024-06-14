import { Fragment, useContext } from 'react'

import { PostsContext } from '../../context/PostsContext'
import { PostCard } from '../Card'
import {
  PublicationsContainer,
  PublicationsFilter,
  PublicationsHeader,
  PublicationsList,
} from './styles'

export function Publications() {
  const { posts } = useContext(PostsContext)

  return (
    <PublicationsContainer>
      <PublicationsHeader>
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </PublicationsHeader>
      <PublicationsFilter type="text" placeholder="Buscar conteúdo" />

      <PublicationsList>
        {posts &&
          posts.map((post, index) => {
            return (
              <Fragment key={index}>
                <PostCard
                  number={post.number}
                  title={post.title}
                  body={post.body}
                  created_at={post.created_at}
                />
              </Fragment>
            )
          })}
      </PublicationsList>
    </PublicationsContainer>
  )
}
