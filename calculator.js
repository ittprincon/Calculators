class Calculator {
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

  rpn(string) {
    if (string != null && string != undefined) {
      string === "";
    } else {
      return 0;
    }

    let arr1 = string.split(" ");
    let arr2 = [];
    let num1;
    let num2;
    let total = 0;
    for (let i = 0; i < arr1.length; i++) {
      arr2.push(arr1[i]);
      switch (arr1[i]) {
        case "+":
          arr2.pop();
          num2 = Number.parseInt(arr2.pop());
          num1 = Number.parseInt(arr2.pop());
          this.total = num1 + num2;
          arr2.push(total);
          break;

        case "-":
          arr2.pop();
          num2 = Number.parseInt(arr2.pop());
          num1 = Number.parseInt(arr2.pop());
          this.total = num1 - num2;
          arr2.push(total);
          break;

        case "*":
          arr2.pop();
          num2 = Number.parseInt(arr2.pop());
          num1 = Number.parseInt(arr2.pop());
          this.total = num1 * num2;
          arr2.push(total);
          break;

        case "/":
          arr2.pop();
          num2 = Number.parseInt(arr2.pop());
          num1 = Number.parseInt(arr2.pop());
          this.total = num1 / num2;
          arr2.push(total);
          break;
      }
    }
    return this.total;
  }
  infix() {
    let expression = "";
  }
}
module.exports = Calculator;
