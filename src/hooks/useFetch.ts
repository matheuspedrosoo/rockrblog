/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { IPostProps } from '../interfaces/IPost'
import api from '../api'

export function useFetch() {
  const [posts, setPosts] = useState<IPostProps[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isFetching, setIsFetching] = useState(false)
  let offset = 0

  const loadData = () => {
    setTimeout(async () => {
      try {
        const response = await api.get(`/posts?_limit=3$offset=${offset}`)
        const { data } = response
        setPosts(data)
        setIsFetching(false)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }, 1000)
  }

  const loadMorePosts = () => {
    setIsLoading(true)

    setTimeout(async () => {
      try {
        const response = await api.get(`/posts?_limit=10&_sort=title&offset=${offset}`)
        const { data } = response

        const newPosts: IPostProps[] = []
        data.forEach((item: IPostProps) => newPosts.push(item))

        setPosts((oldState) => [...oldState, ...newPosts])
        setIsFetching(false)

        offset += 10
      } catch (error) {
        console.log(error)
      }
    }, 1000)
  }

  const handleScroll = (e: any) => {
    if (window.innerHeight + e.target.documentElement.scrollTop + 1 >= e.target.documentElement.scrollHeight) {
      setIsFetching(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return { loadData, posts, isLoading, setIsLoading, isFetching, loadMorePosts }
}
