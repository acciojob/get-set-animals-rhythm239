class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log(`The ${this.species} makes a sound`);
  }
}

class Dog extends Animal {
  bark() {
    console.log("woof");
  }
}

class Cat extends Animal {
  purr() {
    console.log("purr");
  }
}

// Event listeners for buttons
document.getElementById("catButton").addEventListener("click", function() {
  const myCat = new Cat("Siamese");
  document.getElementById("output").innerText = `The ${myCat.species} makes a sound: `;
  myCat.makeSound();
  myCat.purr();
});

document.getElementById("dogButton").addEventListener("click", function() {
  const myDog = new Dog("Golden Retriever");
  document.getElementById("output").innerText = `The ${myDog.species} makes a sound: `;
  myDog.makeSound();
  myDog.bark();
});

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;

