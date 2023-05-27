import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import NavigationBar from "./NavigationBar"

export default function NewPost() {

    const navigate = useNavigate()

    const [post, setPost] = useState({
        title: '',
        body: ''
    })



    const handleInput = (event) => {
        setPost({ ...post, [event.target.name]: event.target.value })
    }


    function handleSubmit(event) {
        event.preventDefault()
        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/posts/',
            data: post
        }).then(response => {
            navigate('/posts')
        })
    }



    return (
        <div>
            <NavigationBar />
            <h1>New Post</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Title' name="title" onChange={handleInput} />
                <input type="text" placeholder='Body' name="body" onChange={handleInput} />
                <button type="submit">Upload</button>
            </form>


        </div>
    )
}