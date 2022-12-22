import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Post from '../pages/Post'
import Contact from '../pages/Contact'

export function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}
