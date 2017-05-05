import {createClient} from 'contentful'

var client = createClient({
  space: 'gcke8fgxzbvf',
  accessToken: 'ae3f9647e19e14af918a34bbbeb2bce15ebe9f3e8e0bc195a3a5f3c09414f61b'
});


function getArticles () {
  return client.getEntries()
    .then(function(response) {
      return response.items;
    })
    .catch(console.error);
}

function getArticleId (articleId) {

}

module.exports = {
  getArticles: function () {
    return getArticles();
  },
  getArticle: function (articleId) {
    return getArticleId(articleId);
  }
};
