
export default function foo(bar, ...optionalArgs) {
  const argMap = ['blah', 'halb'];
  const value = { foo: bar };

  optionalArgs.forEach((arg, index) => {
    const property = argMap[index];
    value[property] = arg;
  });

  return value;
}
