import React, { useState} from 'react';

const AddPostForm = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const date = new Date().toLocaleDateString();
    const post = { title, comment, date };
    addPost(post);
    setTitle('');
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
         <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      </h2>
      </div>
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">
      <textarea
        placeholder="Comment"
        value={comment}
        onChange={e => setComment(e.target.value)}
      />
       </h2>
      </div>

      <center><button className="btn btn-primary btn-block">ADDPOST</button></center> 
    </form>
  );
};

export default AddPostForm;