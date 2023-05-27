import axios from 'axios'
import { useEffect, useState } from 'react'

export default function App() {

  const [data, setData] = useState([])
  const [post, setPost] = useState({
    title: '',
    body: ''
  })

  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value })
  }


  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/posts')
      .then((response) => setData(response.data))
  }, [])


  function handleSubmit(event) {
    event.preventDefault()
     axios({
        method: 'post',
        url:'http://127.0.0.1:8000/posts/',
        data: post
      }).then(response=>{
        console.log(response.data);
       
      })
  }


  return (
    <div className="App">
   
      {data.map((post) => (
        <ul key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </ul>
      ))}

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Title' name="title" onChange={handleInput} />
        <input type="text" placeholder='Body' name="body" onChange={handleInput} />
        <button type="submit">Upload</button>
      </form>

    </div>
  );
}


