import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function PhotoWall(props) {
  return (
    <div>
      <div>
        <Link className="addIcon" to="/AddPhoto" />
      </div>
      <div className="photoGrid">
        {props.posts
          .sort((a, b) => b.id - a.id)
          .map((post, index) => (
            <Photo key={index} post={post} {...props} index={index} />
          ))}
      </div>
    </div>
  );
}

PhotoWall.PropType = {
  posts: PropTypes.array.isRequired
};

export default PhotoWall;
