import React from 'react';
var api = require('../utils/api.js');
var ReactMarkdown = require('react-markdown');

function About (props) {
  console.log(props);
  const page = props.about;
  console.log(page);
  const pageBody = page.fields.body.split("\n");

  return (
    <section className="mw5 mw7-ns center pa3 ph5-ns">
      <h1>{page.fields.title}</h1>
      {pageBody.map(function (paragraph, index) {
        return (
          <ReactMarkdown key={index} className="lh-copy measure" source={paragraph} />
        );
      })}
    </section>
  );
}

class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      about: null
    };
  }

  componentDidMount() {
    const constraints = {
      content_type: "page"
    };
    api.getContent(constraints)
      .then(function(about) {
        this.setState(function () {
          return {
            about: about[0]
          };
        });
      }.bind(this));
  }

  render() {
    return (
        <div>
          {!this.state.about
            ? <p>Loading</p>
            : <About about={this.state.about} />
          }
        </div>
    );
  }
}

module.exports = AboutPage;
