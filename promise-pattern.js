
import * as _ from 'lodash';

const userFixture = {
  1: { id: 1, name: 'admin' },
  6: { id: 6, name: 'btopro' },
  30: { id: 30, name: 'mradcliffe' },
};
const contentFixture = {
  11: {
    contentid: 11,
    title: 'Something about ELMSLN',
    userId: 6,
    author: 'btopro',
    body: {
      en: ['Blah blah blah ELMSLN.'],
    },
  },
  15: {
    contentId: 15,
    title: 'Something about typed data',
    userId: 30,
    author: 'mradcliffe',
    body: {
      en: ['Blah blah blah typed data.'],
    },
  },
  18: {
    contentId: 18,
    title: 'Something about Polymer',
    userId: 6,
    author: 'btopro',
    body: {
      en: ['Blah blah blah polymer.'],
    },
  },
};

const getUserContentFanned = function getUserContentFanned(name) {
  return Promise.resolve(userFixture)
    .then((users) => {
      const user = _.find(users, account => account.name === name);
      if (undefined === user) {
        throw new Error('No user by that name.');
      }
      return Promise.resolve(contentFixture)
        .then((content) => {
          const items = _.find(content, node => node.userId === user.userId);
          if (undefined === items) {
            throw new Error('No nodes for that user name.');
          }
          return items;
        });
    });
};

const getUserContentChained = function getUserContentChained(name) {
  return Promise.resolve(userFixture)
    .then(users => (_.find(users, user => user.name === name)))
    .then((user) => {
      if (undefined === user) {
        throw new Error('No user by that name.');
      }
      return Promise.all([user.id, contentFixture]);
    })
    .then((results) => {
      const [id, content] = results;
      const nodes = _.find(content, node => (node.userId === id));
      if (undefined === nodes) {
        throw new Error('No nodes for that user name.');
      }
      return nodes;
    });
};

export {
  userFixture,
  contentFixture,
  getUserContentChained,
  getUserContentFanned,
};
