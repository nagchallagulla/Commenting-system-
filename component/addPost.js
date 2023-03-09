




import React from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../actions/action';
import AddPostForm from './AddPostForm';

const AddPost = () => {
  const dispatch = useDispatch();

  const handleAddPost = (post) => {
    dispatch(addPost(post));
  }

  return (
    <AddPostForm addPost={handleAddPost} />
  );
};

export default AddPost;