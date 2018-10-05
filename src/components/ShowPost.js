import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';

class ShowPost extends Component {
  componentDidMount() {
    if (!this.props.post) {
      const { id } = this.props.match.params;
      this.props.fetchPost(id);
    }
  }

  onDeleteClick = () => {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  };

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading ...</div>;
    }

    return (
      <React.Fragment>
        <div className="d-flex">
          <Link to="/">&larr; Back to Home</Link>
          <button
            className="btn btn-danger ml-auto"
            onClick={() => this.onDeleteClick()}
          >
            Delete Post
          </button>
        </div>
        <div className="post mt-4">
          <h3 className="mb-4">{post.title}</h3>
          <h6>{post.categories}</h6>
          <p>{post.content}</p>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ posts }, ownProps) => {
  return {
    post: posts[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { fetchPost, deletePost }
)(ShowPost);
