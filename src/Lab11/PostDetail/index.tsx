import { useParams } from 'react-router-dom';
import { posts } from '../data';

const PostDetails = () => {
    const { id } = useParams<{ id: string }>();
    const post = posts.find(post => post.id === parseInt(id!));

    return (
        <div>
            {post ? (
                <>
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                </>
            ) : (
                <p>Post not found.</p>
            )}
        </div>
    );
};

export default PostDetails;
