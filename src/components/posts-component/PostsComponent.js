import React, {useEffect, useState} from 'react';
import {getAllPosts} from "../../services/posts.api";
import {PostComponent} from "./PostComponent";

const PostsComponent = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getAllPosts().then(value => setPosts(value))
    }, []);
    return (
        <div>
            {posts.map(value => <PostComponent item={value} key={value.id}/>)}
        </div>
    );
};

export {PostsComponent};