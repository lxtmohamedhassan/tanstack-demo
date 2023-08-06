import { Link, useNavigate, useSearch } from "@tanstack/router";
import { useEffect, useState } from "react";

type Post = {
    id: number;
    title: string;
    body: string;
    userId: number;
}

const Posts = () => {

    const [posts, setPosts] = useState<Post[]>();
    const navigate = useNavigate();

    const queryParams = useSearch<'/posts'>();
    console.log("queryParams",queryParams);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => setPosts(data.slice(0, 10)));
    }, []);

    const handleSortPostsByTitle = () => {
        navigate({
            search: (prev) => ({ ...prev, sortBy: 'title' }),
        });
    }

    return (
        <>
            <h1>
                All posts page
            </h1>
            <h3>Posts Page: {queryParams?.page}</h3>
            <h3>Sorting Type: {queryParams?.sortBy}</h3>
            <h3>Sorting Order: {queryParams?.sortOrder}</h3>

            <div style={{ display: 'flex', gap: '16px' }}>
                <Link search={(prev) => ({ ...prev, sortOrder: 'desc' })}>Sort Desc</Link>
                <button onClick={handleSortPostsByTitle}>Sort by title</button>
            </div>

            <ul>
                {posts?.map(post => {
                    return (
                        <li key={post.id}>
                            <Link to={`/posts/$postId`} params={{ postId: String(post.id)}}>
                                {post.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    );
};

export default Posts;