// Object Observation

const observeObject = (object, callback) => {
  return new Proxy(object, {
    get(target, property, receiver) {
      callback(property, 'get');
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      callback(property, 'set');
      return Reflect.set(target, property, value, receiver);
    }
  });
};

const callback = (property, action) => {
  console.log(`Property "${property}" was ${action}ted.`);
};

const persona = {
  name: 'John',
  age: 30
}

const observedPerson = observeObject(persona, callback);

console.log(observedPerson.name)