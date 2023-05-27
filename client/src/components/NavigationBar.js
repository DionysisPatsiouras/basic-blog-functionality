import { Link } from 'react-router-dom'


export default function NavigationBar() {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/'>Homepage</Link>
                </li>
                <li>
                    <Link to='/posts'>Posts</Link>
                </li>
                <li>
                    <Link to='/new-post'>New Post</Link>
                </li>
            </ul>
        </div>
    )
}