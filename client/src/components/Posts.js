import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import NavigationBar from "./NavigationBar"



export default function Posts() {

    const [data, setData] = useState([])
   

    useEffect(() => {
        document.title = 'Posts'
    })

    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/posts/')
            .then((response) => setData(response.data))
    })


    return (
        <div>
            <NavigationBar />
            <h1>Posts</h1>


            {data.map((post) => (
                <ul key={post.id}>
                    <h3>{post.title}</h3>
                    {/* <p>{post.body}</p> */}
                    <Link to={'/edit-post/' + post.id}>Edit</Link><br></br>
                    <Link to={'/post/' + post.id}>Read More</Link>
                </ul>
            ))}
        </div>
    )
}