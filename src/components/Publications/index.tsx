import { Fragment, useContext } from 'react'
import { useForm } from 'react-hook-form'

import { PostsContext } from '../../context/PostsContext'
import { PostCard } from '../Card'
import {
  PublicationsContainer,
  PublicationsFilter,
  PublicationsHeader,
  PublicationsList,
} from './styles'

export function Publications() {
  const { register, handleSubmit } = useForm()
  const { posts, getPosts } = useContext(PostsContext)

  console.log(posts)

  function handleFilter(data: any) {
    getPosts(data.filter)
  }

  return (
    <PublicationsContainer>
      <PublicationsHeader>
        <h2>Publicações</h2>
        <span>{posts.length} publicação(ões)</span>
      </PublicationsHeader>
      <form onSubmit={handleSubmit(handleFilter)}>
        <PublicationsFilter
          type="text"
          placeholder="Buscar conteúdo"
          {...register('filter')}
        />
      </form>

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
