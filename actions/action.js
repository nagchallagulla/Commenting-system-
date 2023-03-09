import {ActionType} from "./actionTypes";
import axios from 'axios';

export const addPost = post => async (dispatch) => {
  
    const response = await axios.post('http://localhost:4000/posts', post);
    dispatch({
      type: ActionType.ADD_POST,
      payload: response.data
    });

  } 


export const viewPosts = () => async (dispatch) => {
  
    await axios.get('http://localhost:4000/posts').then(response=>
    dispatch({
      type: ActionType.VIEW_POSTS,
      payload: response.data,
    }));
    
  } 

export const sortPosts = sortOrder => async (dispatch) => {
    
    const response = await axios.get(`http://localhost:4000/posts?_sort=date&_order=${sortOrder}`);
    dispatch({
      type: ActionType.SORT_POSTS,
      payload: response.data
    });

};


  export const upvoteComment=(id)=>({
    type:ActionType.UPVOTE_COMMENT,
    payload:{id},
  });
  export const downvoteComment=(id)=>({
    type:ActionType.DOWNVOTE_COMMENT,
    payload:{id},
  });