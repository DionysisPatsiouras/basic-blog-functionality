import { Link } from 'react-router-dom'
import style from './../style/Nav.module.css'

export default function NavigationBar() {
    return (
        <nav className={style.nav}>
            <ul>
                <Link to='/'><li>Homepage</li></Link>
                <Link to='/posts'><li>Posts</li></Link>
                <Link to='/new-post'><li>New Post</li></Link>
            </ul>
        </nav>
    )
}