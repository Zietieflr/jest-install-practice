const { practiceTest } = require("./index");

describe("Test for initial jest setup.", () => {
  describe("practiceTest", () => {
    test("Given 'Hello World!', return 'Hello World!'", () => {
      const received = "Hello World";
      const expected = "Hello World!";
      expect(practiceTest(received)).toBe(expected);
    });
  });
});