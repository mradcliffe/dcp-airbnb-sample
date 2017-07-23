
export default class FakeComponent {
  constructor(props) {
    this.props = Object.assign({}, props);
  }
  render() {
    return `<div>${this.formatPicture()}${this.formatUsername()}</div>`;
  }
  formatPicture() {
    // Bad.
    const pictureUrl = this.props.picture;
    const name = this.props.name;
    return `<figure><img src="${pictureUrl}" /><figcaption>${name}'s avatar</figcaption></figure>`;
  }
  formatUsername() {
    // Good.
    const { name, mail } = this.props;
    return `<a href="mailto:${mail}">${name}</a>`;
  }
  getProperties() {
    const { name, mail } = this.props;
    return { name, mail };
  }
}
