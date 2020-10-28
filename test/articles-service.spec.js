const { expect } = require('chai');
const ArticlesService = require('../src/articles-service');
const knex = require('knex');

describe(`Articles service object`, function () {
  let db;
  let testArticles = [
    {
      title: 'First post',
      content: 'This is some test content to fill up some space',
    },
    {
      title: 'Second post',
      content: 'Second content space is being filled with words',
    },
    {
      title: 'Third post',
      content: 'Third bird is the word to fill up some content',
    },
  ];

  before(() => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DB_URL,
    });
  });

  before(() => {
    return db.into('blogful_articles').insert(testArticles);
  });

  describe(`getAllArticles()`, () => {
    it(`resolves articles from 'blog_artciles' table`, () => {});
  });
});
