class CoffeeMachine {

  constructor(power) {
    this._power = power;
  }

  get power() {
    return this._power;
  }

}

// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);
coffeeMachine.power = 25; // Error (no setter)
console.log(coffeeMachine.power);

