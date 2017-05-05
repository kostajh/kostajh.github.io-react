import React from 'react';
var api = require('../utils/api.js');

function ArticleGrid (props) {

  return (
    <section className="cf w-100 pa2-ns">
      {props.articles.map(function (article, index) {
        const img = article.fields.image;
        const backgroundImageStyle = {
          backgroundImage: 'url(' + img.fields.file.url + ')'
        };
        return (
          <article key={article.sys.id} className="fl w-100 w-50-m w-25-ns pa2-ns">
            <div className="aspect-ratio aspect-ratio--1x1">
              <img style={backgroundImageStyle}
                   alt={img.description}
                   className="db bg-center cover aspect-ratio--object" />
            </div>
            <a href="#0" className="ph2 ph0-ns pb3 link db">
              <h3 className="f5 f4-ns mb0 black-90">{article.fields.title}</h3>
              <h3 className="f6 f5 fw4 mt2 black-60">{article.fields.summary}</h3>
              <h3 className="f6 lh-copy">{article.sys.createdAt}</h3>
            </a>
          </article>
        );
      })}
    </section>
  );
}

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: null
    };
  }

  componentDidMount() {
    api.getArticles()
      .then(function(articles) {
        this.setState(function () {
          return {
            articles: articles
          };
        });
      }.bind(this));
  }

  render() {
    return (
      <div>
        {!this.state.articles
          ? <p>Loading</p>
          : <ArticleGrid articles={this.state.articles} />
        }
      </div>
    );
  }
}

export default Articles;
