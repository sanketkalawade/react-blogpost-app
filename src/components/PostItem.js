import React from 'react';

const PostItem = ({post}) =>{
    return(
        <div className="item">
               <i className="large middle aligned icon user"/>
               <div className="content">
                    <div className="description">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
               </div>
        </div>
    )
}

export default PostItem;