const Calculator = require("./Calculator");
require("supertest");
const server = require("./server");
describe("Calculator", () => {
  test("has equal function", () => {
    const subject = new Calculator(0);
    expect(subject.equal).toBeDefined();
  });
  test("has add function", () => {
    const subject = new Calculator(0);
    expect(subject.addition).toBeDefined();
  });
  test("has subtract function", () => {
    const subject = new Calculator(0);
    expect(subject.subtraction).toBeDefined();
  });
  test("has multiply function", () => {
    const subject = new Calculator(0);
    expect(subject.multiplication).toBeDefined();
  });
  test("has divide function", () => {
    const subject = new Calculator(0);
    expect(subject.division).toBeDefined();
  });
  test("has clear function", () => {
    const subject = new Calculator(0);
    expect(subject.clear).toBeDefined();
  });
  test("addition works", () => {
    const subject = new Calculator(0);
    expect(subject.addition(7).equal()).toBe(7);
  });
  test("subtraction works", () => {
    const subject = new Calculator(10);
    expect(subject.subtraction(5).equal()).toBe(5);
  });
  test("division works", () => {
    const subject = new Calculator(12);
    expect(subject.division(4).equal()).toBe(3);
  });
  test("multiplication works", () => {
    const subject = new Calculator(3);
    expect(subject.multiplication(3).equal()).toBe(9);
  });
  test("rpn addition works", () => {
    const subject = new Calculator(0);
    expect(subject.rpn("1 2 +")).toBe(3);
  });
  test("rpn subtraction works", () => {
    const subject = new Calculator(0);
    expect(subject.rpn("7 4 -")).toBe(3);
  });
  test("rpn multiplication works", () => {
    const subject = new Calculator(0);
    expect(subject.rpn("11 2 *")).toBe(22);
  });
  test("rpn division works", () => {
    const subject = new Calculator(0);
    expect(subject.rpn("100 10 /")).toBe(10);
  });
  test("rpn with multiple numerators works", () => {
    const subject = new Calculator(0);
    expect(subject.rpn("1 2 + 7 - 2 *")).toBe(-8);
  });

  describe("GET /calculator", function() {
    it("responds with json", function() {
      return request(server)
        .get("/calculator")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200)
        .then(response => {
          assert(response.body.email, "foo@bar.com");
        });
    });
  });
});
