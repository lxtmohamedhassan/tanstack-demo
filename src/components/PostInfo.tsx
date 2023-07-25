import { Link, useParams } from "@tanstack/router";
import { useEffect } from 'react';
import { useState } from 'react';

type Post = {
    id: number;
    title: string;
    body: string;
    userId: number;
}

const PostInfo = () => {
    const params = useParams();
    console.log("PostInfo params", params);

    const postId = params.postId;

    const [postData, setPostData] = useState<Post>();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then((res) => res.json())
            .then((data) => setPostData(data));
    }, [postId])

    console.log("postData",postData);
    return (
        <>
            <h3>Post #{postData?.id} details</h3>
            <h4>Title: {postData?.title}</h4>
            <p>Body: {postData?.body}</p>
            <Link to="/posts" search={{}}>Back to Posts</Link>
        </>
    );
};

export default PostInfo;