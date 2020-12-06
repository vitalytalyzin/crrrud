import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Person from '../Person/Person';
import { useHistory } from 'react-router-dom';

const PostView = ({ id }) => {
  const [currentPost, setCurrentPost] = useState(null);
  const history = useHistory();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/posts`)
      .then(response => response.json())
      .then(data => setCurrentPost(data.filter(item => item.id === Number(id))[0]));
  }, []);

  const onDelete = async () => {
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/posts/${id}`,{
      method: 'DELETE',
    });
    history.push('/');
  }

  const onChange = () => history.push(`/posts/${id}/change`);

  return (
    <div>
      <Person />
      {currentPost && currentPost.content}
      <div>
        <button onClick={() => onChange()}>Изменить</button>
        <button onClick={() => onDelete()}>Удалить</button>
      </div>
    </div>
  );
};

PostView.propTypes = {
  id: PropTypes.string.isRequired,
};

export default PostView;
