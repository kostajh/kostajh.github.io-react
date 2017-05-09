import {createClient} from 'contentful';

var client = createClient({
  space: 'gcke8fgxzbvf',
  accessToken: 'ae3f9647e19e14af918a34bbbeb2bce15ebe9f3e8e0bc195a3a5f3c09414f61b'
});

function getContent (constraints) {
  return client.getEntries(constraints)
    .then(function (response) {
      console.log(response);
      return response.items;
    })
    .catch(console.error);
}

function getArticles () {
  return getContent({
    content_type: 'post',
    order: "-fields.publishDate",
    select: "sys.id,fields.title,fields.slug"
  });
}

function getPostBySlug (slug) {
  return getContent({
    content_type: 'post',
    'fields.slug': slug.substring(6)
  });
}

module.exports = {
  getArticles: function () {
    return getArticles();
  },
  getPostBySlug: function (slug) {
    return getPostBySlug(slug);
  },
  getContent: function (constraints) {
    return getContent(constraints);
  }
};
