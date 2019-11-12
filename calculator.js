class calculator {
  constructor(initial) {
    this.value = initial;
  }

  clear() {
    this.value = 0;
    return this;
  }
  addition(add) {
    this.value += add;
    return this;
  }
  subtraction(subtract) {
    this.value -= subtract;
    return this;
  }
  multiplication(multiply) {
    this.value *= multiply;
    return this;
  }
  division(divide) {
    this.value /= divide;
    return this;
  }
  equal() {
    return this.value;
  }
}

module.exports = calculator;
