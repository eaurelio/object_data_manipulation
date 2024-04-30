# Object data manipulation

Este portfólio apresenta uma coleção de funções JavaScript especializadas em manipulação de dados e conceitos avançados de programação. Os tópicos abordados incluem Descritores de objetos, getters and setters, imutabilidade, observation wrappers e manipulação de propriedades.

### Object Descriptors

Utilizando object descriptors para protejer atributos de um objeto

```javascript
const product = {
  name: "Laptop",
  price: 1000,
  quantity: 5,
};

Object.defineProperty(product, "price", {
  enumerable: false,
  writable: false,
});

Object.defineProperty(product, "quantity", {
  enumerable: false,
  writable: false,
});
```

### Object Getters and Setters

Utilizando os métodos próprios do objeto para manipulação dos seus dados

```javascript
const account1 = Object.create(bankAccount);
const account2 = Object.create(bankAccount);

console.log("accont1", account1.formattedBalance());
console.log("accont2", account2.formattedBalance());

account1.transfer(900, account2);

console.log("accont1 new balance", account1.formattedBalance());
console.log("accont2 new balance", account2.formattedBalance());
```

### Object immutability

Função recursiva que analisa todos os atributos e métodos próprios de um objeto, e os torna imutável

```javascript
const immutablePerson = createImmutableObject(person);

// A alteração não surtirá efeito
immutablePerson.updateInfo({
  firstName: "Jane",
  age: 32,
});
```

### Object observation

A função observeObject recebe um objeto e uma função de callback como argumentos e retorna um objeto proxy que agrupa o objeto original e invoca a função de retorno de chamada sempre que qualquer propriedade do objeto for acessada ou modificada.

```javascript
const persona = {
  name: "John",
  age: 30,
};

const observedPerson = observeObject(persona, callback);

console.log(observedPerson.name);
```

### Object property manipulation

Definindo propriedades de um objeto para garantir que sua alteração só seja possível através de um método dedicado à essa função

```javascript
person.firstName = "jane"; // will throw an error

person.updateInfo({
  firstName: "Jane",
  age: 32,
});

console.table(person);
```
