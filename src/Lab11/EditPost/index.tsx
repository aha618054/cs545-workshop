import React, {FormEvent, useState} from 'react';
import { useParams } from 'react-router-dom';
import { posts } from '../data';

const EditPost = () => {
    const { id } = useParams();
    const post = posts.find(post => post.id === parseInt(id!));

    const [title, setTitle] = useState(post?.title || '');
    const [content, setContent] = useState(post?.content || '');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Updated Post:', { title, content });
    };

    return (
        <div>
            {post ? (
                <>
                    <h1>Edit Post</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Title:</label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Content:</label>
                            <textarea
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            />
                        </div>
                        <button type="submit">Save Changes</button>
                    </form>
                </>
            ) : (
                <p>Post not found.</p>
            )}
        </div>
    );
};

export default EditPost;
