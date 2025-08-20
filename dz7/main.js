class Product {
    constructor(name, price, quantity) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    }

    getTotalPrice() {
      return this.price * this.quantity;
    }

    info() {
      console.log(
        `Товар: ${this.name}, Цена: ${this.price}, Кол-во: ${this.quantity}, Итого: ${this.getTotalPrice()}`
      );
    }
  }

  const p1 = new Product("iPhone", 1000, 3);
  const p2 = new Product("Samsung", 800, 2);

  p1.info();
  p2.info();

// доп дз

class User {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Привет, я ${this.name}`);
  }
}

class Admin extends User {
  #password;

  constructor(name) {
    super(name);
    this.#password = "";
  }

  sayHello() {
    console.log(`Здравствуйте, я админ ${this.name}`);
  }

  setPassword(password) {
    if (password.length >= 6) {
      this.#password = password;
      console.log("Пароль успешно установлен");
    } else {
      console.log("Ошибка: пароль слишком короткий");
    }
  }

  checkPassword(pass) {
    return this.#password === pass;
  }
}

const u = new User("Tom");
u.sayHello();

const a = new Admin("Aibek");
a.sayHello();

a.setPassword("12345");
a.setPassword("admin123");

console.log(a.checkPassword("admin123"));
console.log(a.checkPassword("wrong"));
