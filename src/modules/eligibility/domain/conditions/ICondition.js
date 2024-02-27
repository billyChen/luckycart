class ICondition {
  constructor() {}

  getValueByPath(obj, path) {
    const keys = path.split(".");
    let current = obj;

    for (const key of keys) {
      if (current instanceof Array) {
        return current.map((item) => this.getValueByPath(item, key)).flat();
      } else if (current[key] === undefined) {
        return undefined;
      } else {
        current = current[key];
      }
    }

    return current;
  }
}

module.exports = {
  ICondition,
};
