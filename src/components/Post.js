import React from 'react';
var api = require('../utils/api.js');

class Post extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      post: null
    };
  }

  componentDidMount() {
    api.getPostBySlug(this.props.location.pathname)
      .then(function(post) {
        this.setState(function () {
          return {
            post: post
          };
        });
      }.bind(this));
  }

  render() {
    console.log(this.state.post);
    return(
      <div>
        Hello
      </div>
    );
  }
}

export default Post;
