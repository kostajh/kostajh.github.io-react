import React from 'react';
var NavLink = require('react-router-dom').NavLink;
var api = require('../utils/api.js');
var formatDate = require('../utils/date.js');

function ArticleGrid (props) {
  return (
    <section className="mw7 center">
      {props.articles.map(function (article, index) {
        const img = article.fields.image;
        const imgUrl = img.fields.file.url + '?q=70&fl=progressive&w=325&h=325';
        const backgroundImageStyle = {
          backgroundImage: 'url(' + img.fields.file.url + '?q=70&fl=progressive&w=292)'
        };
        const articleRoute = '/post/' + article.fields.slug;
        const formattedDate = formatDate.RenderDate(article.fields.publishDate);
        return (
          <article key={article.sys.id} className="pv4 bt bb b--black-10 ph3 ph0-l">
            <div className="flex flex-column flex-row-ns">
              <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
                <NavLink to={articleRoute}>
                  <h2 className="f3 mt0 lh-title">{article.fields.title}</h2>
                </NavLink>
                  <p className="f5 f4-1 lh-copy">
                    {article.fields.summary}
                  </p>
              </div>
              <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
                <img src={imgUrl}
                     alt={img.description}
                     className="db" />
              </div>
            </div>
            <time className="f6 db gray">{formattedDate}</time>
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
