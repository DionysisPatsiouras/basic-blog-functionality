import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"

export default function EditPost() {

    const params = useParams()
    const navigate = useNavigate()
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
            .get('http://127.0.0.1:8000/post/' + params.id)
            .then((response) => setData(response.data))
    })


    function handleSubmit(event) {
        event.preventDefault()
        axios({
            method: 'put',
            url: 'http://127.0.0.1:8000/post/' + params.id,
            data: post
        }).then(response => {
            navigate('/posts')
        })
    }

    return (
        <div>
            <h2>Modify " {data.title} " post</h2>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Title' name="title" onChange={handleInput} />
                <input type="textarea" placeholder='Body' name="body" onChange={handleInput} />
                <button type="submit">Update</button>
            </form>

        </div>
    )
}