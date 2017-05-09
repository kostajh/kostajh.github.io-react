import React from 'react';
var NavLink = require('react-router-dom').NavLink;
var api = require('../utils/api.js');

function ArticleGrid (props) {
    var count = props.articles.length;
    return (
      <section className="mw5 mw7-ns center pa3 ph5-ns">
        <dl className="lh-title pa4 mt0">
          {props.articles.map(function (article, index) {
            const articleRoute = '/post/' + article.fields.slug;
            count--;
            return (
              <div key={article.sys.id}>
                <NavLink to={articleRoute} className="f5 fw6 db black link hover-dark-blue">
                  <dt key={article.sys.id}>
                    {count}. {article.fields.title}
                  </dt>
                </NavLink>
              </div>
            );
          })}
        </dl>
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
