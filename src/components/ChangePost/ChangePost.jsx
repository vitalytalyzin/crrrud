import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Person from '../Person/Person';
import { useHistory } from 'react-router-dom';

const ChangePost = ({ id }) => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    id: 0,
    content: '',
  });

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/posts`)
      .then(response => response.json())
      .then(data => setFormData({
        id: Number(id),
        content: data.filter(item => item.id === Number(id))[0].content,
      }));
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    const fetchPost = async () => {
      await fetch(`${process.env.REACT_APP_BACKEND_URL}/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      }).then(response => response.status === 204 && history.push(`/posts/view/${id}`));
    };

    fetchPost();
  };

  const onLabelChange = ({ target: { value } }) => setFormData(prevState => ({ ...prevState, content: value }));
  const onRemove = () => history.push(`/posts/view/${id}`);
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <h3>Редактировать публикацию</h3>
        <button style={{ marginLeft: 8 }} onClick={() => onRemove()}>удалить</button>
      </div>
      <Person />
      <form onSubmit={onSubmit}>
        <label>
          <input
            type="text"
            placeholder="что хотите изменить?"
            value={formData.content}
            onChange={onLabelChange}
          />
        </label>
        <button style={{ marginLeft: 8 }}>Сохранить</button>
      </form>
    </div>
  );
};

ChangePost.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ChangePost;
