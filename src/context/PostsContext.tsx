import { createContext, ReactNode, useEffect, useState } from 'react'

import { api } from '../lib/axios'

export interface Post {
  number: number
  title: string
  body: string
  created_at: string
}

interface PostsContextType {
  posts: Post[]
  getPosts: (query?: string) => {}
}

interface PostsProviderProps {
  children: ReactNode
}

export const PostsContext = createContext({} as PostsContextType)

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<Post[]>([])

  async function getPosts(query = '') {
    const response = await api.get('/search/issues', {
      params: {
        q: `repo:restlucas/ignite-challenge-github-blog ${query}`,
      },
    })
    setPosts(response.data.items)
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <PostsContext.Provider value={{ posts, getPosts }}>
      {children}
    </PostsContext.Provider>
  )
}
