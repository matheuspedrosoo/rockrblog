import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Loading } from '../components/Loading'
import { ScrollToTop } from '../components/ScrollTop'

const Home = lazy(() => import('../pages/Home'))
const Post = lazy(() => import('../pages/Post'))

export function Routers() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </Suspense>
    </Router>
  )
}
