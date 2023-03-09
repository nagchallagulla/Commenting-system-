import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { viewPosts, upvoteComment, downvoteComment ,sortPosts} from '../actions/action';
const ViewPosts = () => {
   
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts);
 
    useEffect(() => {
        dispatch(viewPosts());
    }, [dispatch]);
    

   

    return (

        <div>

<button onClick={() => dispatch(sortPosts('asc'))}>Sort by Date Ascending</button>
                    <button onClick={() => dispatch(sortPosts('desc'))}>Sort by Date Descending</button>
            {posts.map((post) => {
              
                
                return (
                   
                    <div key={post.id}> <div class="d-flex justify-content-between m-3 border">
                    <h3 class="">{post.title}
                        </h3>
                        <p class="d-flex justify-content-between m-3 middle">{post.comment}</p>
                        <p>Date:{post.date}</p>
                        <button onClick={() => dispatch(upvoteComment(post.id))}>UpVote({post.upvotes || 0})</button>
                        <button onClick={() => dispatch(downvoteComment(post.id))}>DownVote({post.downvotes || 0})</button>
                    </div>
                </div>
                )
            }
        
            )
            }

                
                      </div>




        

    );
};

export default ViewPosts;