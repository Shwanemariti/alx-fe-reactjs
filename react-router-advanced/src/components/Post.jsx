import React from 'react';
import { useParams } from 'react-router-dom';

function Post() {
  const { id } = useParams(); // Access the dynamic URL parameter
  return <div>Viewing post with ID: {id}</div>;
}

export default Post;
