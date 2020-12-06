import React from 'react';
import styles from './Post.module.css';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Person from '../Person/Person';

const Post = ({ content, id }) => {
  const history = useHistory();

  const onHandleClick = id => history.push(`/posts/view/${id}`);

  return (
    <div
      className={styles.wrapper}
      onClick={() => onHandleClick(id)}
    >
      <Person />
      <div className={styles.post}>{content}</div>
    </div>
  );
};

Post.propTypes = {
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Post;
