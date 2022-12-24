import { Header } from '../../components/Header/Header'
import React, { useEffect } from 'react'
import { ScrollItens } from '../../components/ScrollItens'
import { Loading } from '../../components/Loading'
import { useFetch } from '../../hooks/useFetch'

import styles from './Home.module.scss'

function Home() {
  const { loadData, posts, isLoading, setIsLoading, isFetching, loadMorePosts } = useFetch()

  useEffect(() => {
    setIsLoading(true)
    loadData()
  }, [])

  useEffect(() => {
    if (isFetching) {
      loadMorePosts()
    }
  }, [isFetching])

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
