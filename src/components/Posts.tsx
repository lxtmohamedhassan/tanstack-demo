import { Link, Route } from "@tanstack/router";
import { useEffect, useState } from "react";
import { postsRoute } from "../App";
import PostInfo from "./PostInfo";

type Post = {
    id: number;
    title: string;
    body: string;
    userId: number;
}



const Posts = () => {
    const [posts, setPosts] = useState<Post[]>();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => setPosts(data.slice(0, 10)));
    }, []);

    return (
        <>
            <h1>
                This posts page
            </h1>
            <ul>            
                {posts?.map(post => {
                    return (
                        <li key={post.id}>
                            <Link from="/posts" to={`/posts/${post.id}`} params={{ postId: String(post.id)}}>
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