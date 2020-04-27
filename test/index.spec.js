const app = require("../index");

describe("App test", () => {
  test("Should return undefined if the val is empty", () => {
    expect(app()).toEqual(undefined);
  });

  test("Should return size of the string", () => {
    expect(app("pan")).toEqual(3);
  });

  test("Should return size of obj", () => {
    expect(app({ one: 1, two: 2, three: 3 })).toEqual(3);
  });

  test("Should return size of array", () => {
    expect(app([1, 2, 3])).toEqual(3);
  });
});
