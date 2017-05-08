import React from 'react';
var NavLink = require('react-router-dom').NavLink;
var api = require('../utils/api.js');
var formatDate = require('../utils/date.js');

function ArticleGrid (props) {
  return (
    <section className="cf w-100 pa2-ns">
      {props.articles.map(function (article, index) {
        const img = article.fields.image;
        const backgroundImageStyle = {
          backgroundImage: 'url(' + img.fields.file.url + ')'
        };
        const articleRoute = '/post/' + article.fields.slug;
        const formattedDate = formatDate.RenderDate(article.fields.publishDate);
        return (
          <article key={article.sys.id} className="fl w-100 w-50-m w-25-ns pa2-ns">
            <div className="aspect-ratio aspect-ratio--1x1">
              <NavLink to={articleRoute}>
              <img style={backgroundImageStyle}
                   alt={img.description}
                   className="db bg-center cover aspect-ratio--object" />
              </NavLink>
            </div>
            <NavLink className="ph2 ph0-ns pb3 link db" to={articleRoute}>
              <h3 className="f5 f4-ns mb0 black-90">{article.fields.title}</h3>
              <h3 className="f6 f5 fw4 mt2 black-60">{article.fields.summary}</h3>
              <h3 className="f6 lh-copy">{formattedDate}</h3>
            </NavLink>
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
