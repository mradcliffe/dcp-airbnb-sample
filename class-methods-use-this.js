/* eslint class-methods-use-this:1 */

class Model {
  constructor(values = {}) {
    this.value = {};
    this.setValues(values);
  }
  getValues() {
    return this.value;
  }
  getDefinition() {
    return [{ name: 'id', required: false }];
  }
  setValues(values) {
    this.getDefinition().forEach((definition) => {
      if (undefined !== values[definition.name]) {
        this.value[definition.name] = values[definition.name];
      } else if (undefined === values[definition.name] && undefined !== definition.default) {
        this.value[definition.name] = definition.default;
      } else if (undefined === values[definition.name] && definition.required) {
        throw new Error(`Missing required property ${definition.name}.`);
      } else {
        this.value[definition.name] = null;
      }
    });
  }
}

class UserModel extends Model {
  getDefinition() {
    return super.getDefinition().concat([
      { name: 'name', required: true },
      { name: 'mail', required: true },
      { name: 'picture', required: false, default: '' },
    ]);
  }
}

export { Model, UserModel };
