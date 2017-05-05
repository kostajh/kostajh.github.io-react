import React from 'react';

const articleImgStyle = {
  backgroundImage: 'url(' + 'http://mrmrs.io/images/0006.jpg' + ')'
};


function ArticleGrid (props) {

  const backgroundImageStyle = {
    backgroundImage: 'url({this.props.articleImage})'
  };
  return (
    <section className="cf w-100 pa2-ns">
      {props.articles.map(function (article, index) {
        return (
          <article className="fl w-100 w-50-m w-25-ns pa2-ns">
            <div className="aspect-ratio aspect-ratio--1x1">
              <img style="{backgroundImageStyle}"
                   className="db bg-center cover aspect-ratio--object" />
            </div>
            <a href="#0" className="ph2 ph0-ns pb3 link db">
              <h3 className="f5 f4-ns mb0 black-90">Title of piece</h3>
              <h3 className="f6 f5 fw4 mt2 black-60">Subtitle of piece</h3>
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
    // fetch articles
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
