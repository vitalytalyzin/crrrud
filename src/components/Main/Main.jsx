import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Post from '../Post/Post';

const Main = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      await fetch(`${process.env.REACT_APP_BACKEND_URL}/posts`)
        .then(response => response.json())
        .then(data => setPosts(data));
    };

    fetchPost();
  }, []);

  return (
    <div>
      <Link className="button" to="/posts/new">Создать пост</Link>
      {posts.length > 0 && posts.map((post, idx) => (
        <Post key={idx} content={post.content} id={post.id} />
      ))}
    </div>
  );
};

export default Main;
