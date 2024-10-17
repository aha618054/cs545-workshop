import {Link} from "react-router-dom";
import { posts } from '../data';
import Post from "../post";

export default function PostList() {
    return (
        <div>
            <h1>Posts List</h1>
            <ul>
                {posts.map((post: Post) => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>{post.title}</Link> |{' '}
                        <Link to={`/posts/${post.id}/edit`}>Edit</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}