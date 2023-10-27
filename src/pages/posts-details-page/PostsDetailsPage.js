import React from 'react';
import {useLocation} from "react-router-dom";
import {PostDetailsComponent} from "../../components/post-details-component/PostDetailsComponent";

const PostsDetailsPage = () => {
    let {state} = useLocation();
    console.log(state)
    return (
        <div>
           <PostDetailsComponent item={state}/>
        </div>
    );
};

export {PostsDetailsPage};