
import * as _ from 'lodash';

const userFixture = {
  1: { uid: 1, name: 'admin', mail: 'admin@example.com' },
  6: { uid: 6, name: 'btopro', mail: 'btopro@example.com' },
  30: { uid: 30, name: 'mradcliffe', mail: 'mradcliffe@softpixel.com' },
};
const contentFixture = {
  11: {
    nid: 11,
    title: 'Something about ELMSLN',
    uid: 6,
    author: 'btopro',
    field_body: {
      und: [
        { value: 'Blah blah blah ELMSLN.' },
      ],
    },
  },
  15: {
    nid: 15,
    title: 'Something about typed data',
    uid: 30,
    author: 'mradcliffe',
    field_body: {
      und: [
        { value: 'Blah blah blah typed data.' },
      ],
    },
  },
  18: {
    nid: 18,
    title: 'Something about Polymer',
    uid: 6,
    author: 'btopro',
    field_body: {
      und: [
        { value: 'Blah blah blah polymer.' },
      ],
    },
  },
};

function getUserContentChained(name) {
  return Promise.resolve(userFixture)
    .then(users => (_.find(users, user => user.name === name)))
    .then((user) => {
      if (undefined === user) {
        throw new Error('No user by that name.');
      }
      return Promise.all([user.uid, contentFixture]);
    })
    .then((results) => {
      const [uid, content] = results;
      const nodes = _.find(content, node => (node.uid === uid));
      if (undefined === nodes) {
        throw new Error('No nodes for that user name.');
      }
      return nodes;
    });
}

function getUserContentFanned(name) {
  return Promise.resolve(userFixture)
    .then((users) => {
      const user = _.find(users, account => account.name === name);
      if (undefined === user) {
        throw new Error('No user by that name.');
      }
      return Promise.resolve(contentFixture)
        .then((content) => {
          const nodes = _.find(content, node => node.uid === user.uid);
          if (undefined === nodes) {
            throw new Error('No nodes for that user name.');
          }
          return nodes;
        });
    });
}

export {
  userFixture,
  contentFixture,
  getUserContentChained,
  getUserContentFanned,
};
