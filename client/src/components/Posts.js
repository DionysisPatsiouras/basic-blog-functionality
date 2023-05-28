import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import style from './../style/Posts.module.css'



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
        <div className="container">
            <h1 className="title">Posts</h1>

            <div className={style.all_posts}>
                {data.map((post) => (
                    <div key={post.id} className={style.post}>
                        <h3>{post.title}</h3>
                        {/* <hr></hr> */}
                        {/* <p>{post.body}</p> */}
                        <div className={style.actions}>
                            {/* <Link to={'/edit-post/' + post.id}><button>Edit</button></Link><br></br> */}
                            <Link to={'/post/' + post.id}><button>Read More</button></Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}