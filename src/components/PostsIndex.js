import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router-dom';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts = () => {
    const { posts } = this.props;
    const postsIds = Object.keys(posts);
    return postsIds.map(postId => {
      return (
        <div className="post" key={posts[postId].id}>
          <h3>{posts[postId].title}</h3>
          <p>{posts[postId].content}</p>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <div className="d-flex mb-5">
          <h1 className="">Posts</h1>
          <Link
            to="/posts/new"
            type="button"
            className="btn btn-primary ml-auto"
          >
            + Add post
          </Link>
        </div>
        <ul className="list-group">{this.renderPosts()} </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({ posts: state.posts });

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostsIndex);
