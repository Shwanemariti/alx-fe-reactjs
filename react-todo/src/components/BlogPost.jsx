import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();  // useParams to access dynamic part of the URL
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Fetch the post based on the `id`
    const fetchPost = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const data = await response.json();
      setPost(data);
    };

    fetchPost();
  }, [id]); // Re-fetch if the `id` changes

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default BlogPost;
