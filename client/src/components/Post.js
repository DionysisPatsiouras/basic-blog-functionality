import { useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import axios from "axios"


export default function Post(props) {

    const params = useParams();
    const navigate = useNavigate()
    const [data, setData] = useState([])


    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/post/' + params.id)
            .then((response) => setData(response.data))
    })

    function deletePost() {
        axios
            .delete('http://127.0.0.1:8000/post/' + params.id)
            .then(navigate('/posts'))
    }


    return (
        <div>
            <h3>{data.title}</h3><br></br>
            <p>{data.body}</p>
            <button><Link to={'/edit-post/' + params.id}>Edit</Link></button>
            <button onClick={deletePost}>Delete</button>
        </div>
    )
}

