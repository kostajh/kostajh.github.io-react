import React from 'react';
var api = require('../utils/api.js');

function RenderPost (props) {

  const post = props.post;
  const postBody = post.fields.body.split("\n");
  return (
   <article className="cf ph3 ph5-ns pv5">
      <header className="fn fl-ns w-50-ns pr4-ns">
        <h1 className="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">
          {post.fields.title}
        </h1>
        <h2 className="f3 mid-gray lh-title">
          {post.fields.summary}
        </h2>
        <time className="f6 ttu tracked gray">{post.fields.publishDate}</time>
      </header>
      <div className="fn fl-ns w-50-ns">
        {postBody.map(function (paragraph, index) {
          if (index === 0) {
            return (<p key={index} className="f5 lh-copy measure mt0-ns">
                    {paragraph}
                    </p>);
          }
          return (<p key={index} className="f5 lh-copy measure">
                  {paragraph}
                  </p>);
        })}
      </div>
    </article>
  );
}

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
        {!this.state.post
          ? <p>Loading</p>
          : <RenderPost post={this.state.post} />
        }
      </div>
    );
  }
}

export default Post;
