import React, { Component } from 'react';

export default class Comments extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const comment = event.target.elements.comment.value;
    comment && this.props.startAddingComment(this.props.id, comment);
    event.target.elements.comment.value = '';
  }

  render() {
    return (
      <div className="comment">
        {this.props.comments.map((comment, index) => (
          <p key={index}>{comment}</p>
        ))}
        <form className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" name="comment" placeholder="Comment..." />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}
