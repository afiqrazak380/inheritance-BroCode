// inheritance = a childclass can inherit all of the methods and properties from another class (parent class)

class Animal{ // parent class containing alive property and eat() method
  alive = true;
  eat(){
    console.log(`${this.name} is eating`);
  }
}

class Rabbit extends Animal{ // new class Rabbit with Animal extends
  name = "Rabbit";
}

class Bird extends Animal{   // new class Bird with Animal extends
  name = "Bird";
}

class Snake extends Animal{  // new class Snake with Animal extends
  name = "Snake";
}

// new object created, the property and method in the parent class is called

const rabbit = new Rabbit;
rabbit.eat()
console.log(rabbit.alive)

const bird = new Bird;
rabbit.eat()
console.log(rabbit.alive)

const snake = new Snake;
rabbit.eat()
console.log(rabbit.alive)