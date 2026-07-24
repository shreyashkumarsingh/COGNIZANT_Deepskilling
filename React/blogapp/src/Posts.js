import React, { Component } from 'react';
import Post from './Post';

export class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false,
      errorMsg: ''
    };
  }

  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        return response.json();
      })
      .then((data) => {
        const postsList = data.map((item) => new Post(item.id, item.title, item.body));
        this.setState({ posts: postsList });
      })
      .catch((error) => {
        alert('Error loading posts: ' + error.message);
        this.setState({ hasError: true, errorMsg: error.message });
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, errorInfo) {
    alert('Error caught in component: ' + error.toString());
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong while fetching posts.</h2>;
    }

    return (
      <div style={{ padding: '20px' }}>
        <h1>Posts List</h1>
        {this.state.posts.map((post) => (
          <div key={post.id} style={{ borderBottom: '1px solid #ccc', marginBottom: '15px' }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
