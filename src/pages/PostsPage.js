import React from 'react';
import {useSearchParams} from "react-router-dom";

const PostsPage = () => {
    let [query, setQuery] = useSearchParams();

    const inc = ()=> {
        setQuery(prev => {
            prev.set("id", `${+prev.get('id')+1}`);
            return prev;
        })
    }
    return (
        <div>
            <h2>Post Page</h2>
            <div>id : {query.get('id')}</div>
            <div>id : {query.get('name')}</div>
            <button onClick={inc}>incId</button>
        </div>
    );
};

export {PostsPage};