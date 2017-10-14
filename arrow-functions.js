
const usersFixture = [
  { id: 1, name: 'admin', lastname: '' },
  { id: 6, name: 'btopro', lastname: 'Ollendyke' },
  { id: 30, name: 'mradcliffe', lastname: 'Radcliffe' },
];

// Demonstrates arrow function styles.
const btopro = usersFixture.find(user => user.name === 'btopro');
const uids = usersFixture.map(user => (user.id));

// Expression function style.
const hasLastNameOf = function hasLastNameOf(user, lastname) {
  return user.lastname === lastname;
};

const radcliffesFirst = usersFixture.sort((aUser, bUser) => {
  if (hasLastNameOf(aUser, 'Radcliffe')) {
    return -1;
  } else if (hasLastNameOf(bUser, 'Radcliffe')) {
    return 1;
  }
  return 0;
});

export {
  btopro,
  uids,
  radcliffesFirst,
};
