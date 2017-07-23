/* eslint no-underscore-dangle:1 */

function addInternalStuff(foo) {
  return foo === 'bar';
}

export default class UnderscoreDangle {
  constructor(props) {
    this.props = Object.assign({}, props);
    this.fooHasBar = false;

    this._addInternalStuff(this.props.foo);
    this.fooHasBar2 = addInternalStuff(this.props.foo);
  }
  /**
   * Set the fooHasBar property.
   *
   * @private
   */
  _addInternalStuff(foo) {
    this.fooHasBar = foo === 'bar';
  }
  getBarRules() {
    if (this.hasFooBar) {
      return 'Bar time';
    }
    return 'No bar for you';
  }
  getBarRules2() {
    if (addInternalStuff(this.props.foo)) {
      return 'Bar time';
    }
    return 'No bar for you';
  }
}
