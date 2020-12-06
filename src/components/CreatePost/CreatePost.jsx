import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const CreatePost = () => {
  const [formData, setFormData] = useState({
    id: 0,
    content: '',
  });

  const history = useHistory();
  const onLabelChange = ({ target: { value } }) => setFormData(prevState => ({ ...prevState, content: value }));

  const onSubmit = (e) => {
    e.preventDefault();

    const fetchPost = async () => {
      await fetch(`${process.env.REACT_APP_BACKEND_URL}/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      }).then(response => response.status === 204 && history.push('/'));
    };

    fetchPost();
    setFormData(prevState => ({ ...prevState, content: '' }));
  };

  const onDelete = () => {
    setFormData(prevState => ({ ...prevState, content: '' }));
    history.push('/');
  };

  return (
    <div>
      <h3>Публикация</h3>
      <form onSubmit={onSubmit}>
        <label>
          <input
            type="text"
            placeholder="что хотите написать?"
            value={formData.content}
            onChange={onLabelChange}
          />
        </label>
        <button style={{ marginLeft: 8 }}>Опубликовать</button>
      </form>
      <button style={{ marginTop: 8 }} onClick={() => onDelete()}>удалить</button>
    </div>
  );
};

export default CreatePost;
