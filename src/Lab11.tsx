import {BrowserRouter as Router, Route, Routes, Link, Navigate} from 'react-router-dom';
import PostList from "./Lab11/PostList";
import PostDetail from "./Lab11/PostDetail";
import EditPost from "./Lab11/EditPost";

export default function Lab11() {
    return (
        <Router>
            <nav>
                <ul>
                    <li><Link to="/posts">Posts List</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Navigate to="/posts" />} />
                <Route path="/posts" element={<PostList />} />
                <Route path="/posts/:id" element={<PostDetail />} />
                <Route path="/posts/:id/edit" element={<EditPost />} />
            </Routes>
        </Router>
    );
}