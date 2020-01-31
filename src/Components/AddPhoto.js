import React, { Component } from 'react';
import { routes } from './Main';

class AddPhoto extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const link = event.target.elements.link.value;
    const description = event.target.elements.description.value;
    if (link && description) {
      const newPost = {
        id: Number(new Date()),
        description: description,
        imageLink: link
      };
      this.props.startAddingPost(newPost);
      this.props.onHistory.push(routes.home);
    }
  }

  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Link" name="link" />
          <input type="text" placeholder="Description" name="description" />
          <button>Post</button>
        </form>
      </div>
    );
  }
}

export default AddPhoto;
