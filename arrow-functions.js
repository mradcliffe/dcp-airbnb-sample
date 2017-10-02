
const fixture = [
  { uid: 1, name: 'admin', mail: 'admin@example.com', field_lastname: '' },
  { uid: 6, name: 'btopro', mail: 'btopro@example.com', field_lastname: 'Ollendyke' },
  { uid: 30, name: 'mradcliffe', mail: 'mradcliffe@softpixel.com', field_lastname: 'Radcliffe' },
];

const btopro = fixture.find(user => user.name === 'btopro');
const uids = fixture.map(user => user.uid);

// Against func-style.
const hasLastNameOf = function hasLastNameOf(user, lastname) {
  return user.field_lastname === lastname;
};

const radcliffesBeforeOllendykes = fixture.sort((aUser, bUser) => {
  if (aUser.uid < bUser.uid) {
    if (hasLastNameOf(aUser, 'Ollendyke') && hasLastNameOf(bUser, 'Radcliffe')) {
      return 1;
    }
    return -1;
  } else if (aUser.uid > bUser.uid) {
    if (hasLastNameOf(bUser, 'Ollendyke') && hasLastNameOf(aUser, 'Radcliffe')) {
      return -1;
    }
    return 1;
  }
  return 0;
});

export {
  btopro,
  uids,
  radcliffesBeforeOllendykes,
};
