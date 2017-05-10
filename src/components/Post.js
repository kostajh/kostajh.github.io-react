import React from 'react';
var api = require('../utils/api.js');
var ReactMarkdown = require('react-markdown');
var formatDate = require('../utils/date.js');

function RenderPost (props) {
  const post = props.post;
  const postBody = post.fields.body.split("\n");
  const formattedDate = formatDate.RenderDate(post.fields.publishDate);
  const image = post.fields.image.fields.file.url;
  const imageDescription = post.fields.image.fields.description;
  return (
   <article className="cf ph3 ph5-ns pv5">
      <header className="fn fl-ns w-50-ns pr4-ns">
        <h1 className="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">
          {post.fields.title}
        </h1>
        <h2 className="f3 mid-gray lh-title">
          {post.fields.summary}
        </h2>
        <time className="f6 ttu tracked gray">{formattedDate}</time>
      </header>
      <div className="fn fl-ns w-50-ns">
        <div>
          <img src={image} alt={imageDescription} />
        </div>
        {postBody.map(function (paragraph, index) {
          if (index === 0) {
            return (<p key={index} className="f5 lh-copy measure mt0-ns">
                    <ReactMarkdown source={paragraph} />
                    </p>);
          }
          return (<p key={index} className="f5 lh-copy measure">
                  <ReactMarkdown source={paragraph} />
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
            post: post[0]
          };
        });
      }.bind(this));
  }

  render() {
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
