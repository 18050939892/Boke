import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

export default function HomePage() {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        const fetchPosts = async () => {
            const response = await api.get('/posts');
            setPosts(response.data);
        };
        
        fetchPosts();
    }, []);
    
    return (
        <div className="p-4">
            <h2 className="text-xl mb-4">最新文章</h2>
            <div className="space-y-4">
                {posts.map((post: any) => (
                    <div key={post._id} className="border p-4 rounded">
                        <h3 className="text-lg font-semibold">
                            <Link to={`/post/${post._id}`} className="text-blue-500 hover:underline">
                                {post.title}
                            </Link>
                        </h3>
                        <p className="text-gray-500 text-sm">
                            {new Date(post.createdAt).toLocaleDateString()}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
