/* eslint-disable @typescript-eslint/no-explicit-any */
import { Header } from '../../components/Header/Header'

import styles from './Home.module.scss'
import React, { useEffect, useState } from 'react'
import api from '../../api'
import { IPostProps } from '../../interfaces/IPost'
import { ScrollItens } from '../../components/ScrollItens'
import { Loading } from '../../components/Loading'

function Home() {
  const [posts, setPosts] = useState<IPostProps[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isFetching, setIsFetching] = useState(false)
  let offset = 0

  useEffect(() => {
    setIsLoading(true)
    loadData()
    window.addEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isFetching) {
      loadMorePosts()
    }
  }, [isFetching])

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

  const handleScroll = (e: any) => {
    if (window.innerHeight + e.target.documentElement.scrollTop + 1 >= e.target.documentElement.scrollHeight) {
      setIsFetching(true)
    }
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

  return (
    <>
      <Header />

      <div className={styles.container}>
        {posts.map((item, index) => (
          <React.Fragment key={index}>
            <ScrollItens data={item} itemLeng={index % 6} />
          </React.Fragment>
        ))}
      </div>

      {isLoading && <Loading />}
    </>
  )
}

export default Home
