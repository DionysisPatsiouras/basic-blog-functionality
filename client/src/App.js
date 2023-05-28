
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from './components/Homepage'
import Posts from './components/Posts'
import Post from './components/Post'
import NewPost from './components/NewPost'
import EditPost from './components/EditPost'
import NavigationBar from "./components/NavigationBar"
import './style/main.css'

export default function App() {


  return (
    <div className="App">
        <BrowserRouter>
        <NavigationBar />
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


