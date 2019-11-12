const calculator = require("./calculator");

describe("calculator", () => {
  test("has equal function", () => {
    const subject = new calculator(0);
    expect(subject.equal).toBeDefined();
  });
  test("has add function", () => {
    const subject = new calculator(0);
    expect(subject.addition).toBeDefined();
  });
  test("has subtract function", () => {
    const subject = new calculator(0);
    expect(subject.subtraction).toBeDefined();
  });
  test("has multiply function", () => {
    const subject = new calculator(0);
    expect(subject.multiplication).toBeDefined();
  });
  test("has divide function", () => {
    const subject = new calculator(0);
    expect(subject.division).toBeDefined();
  });
  test("has clear function", () => {
    const subject = new calculator(0);
    expect(subject.clear).toBeDefined();
  });
  test("addition works", () => {
    const subject = new calculator(0);
    expect(subject.addition(7).equal()).toBe(7);
  });
  test("subtraction works", () => {
    const subject = new calculator(10);
    expect(subject.subtraction(5).equal()).toBe(5);
  });
  test("division works", () => {
    const subject = new calculator(12);
    expect(subject.division(4).equal()).toBe(3);
  });
  test("multiplication works", () => {
    const subject = new calculator(3);
    expect(subject.multiplication(3).equal()).toBe(9);
  });
});
