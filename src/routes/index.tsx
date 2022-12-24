import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Post from '../pages/Post'

export function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </Router>
  )
}
