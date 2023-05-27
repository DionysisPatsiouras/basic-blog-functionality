import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from './components/Homepage'
import Posts from './components/Posts'
import Post from './components/Post'
import NewPost from './components/NewPost'
import EditPost from './components/EditPost'

export default function App() {

  useEffect(() => {
    document.title = 'Homepage'
  })


  return (


    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/post/:id' element={<Post />} />
          <Route path='/new-post' element={<NewPost />} />
          <Route path='/edit-post/:id' element={<EditPost />} />
        </Routes>
      </BrowserRouter>
    </div >

  );
}


