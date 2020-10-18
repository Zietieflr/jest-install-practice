const { test, expect } = require("@jest/globals");
const { describe } = require("yargs");
const { practiceTest } = require("./index");

describe("Test for initial jest setup.", () => {
  describe("practiceTest", () => {
    test("Given 'Hello World!, return 'Hello World!'", () => {
      const argument = "Hello World!";
      const expected = "Hello World!";
      expect(practiceTest(argument)).toBe(expected);
    });
  });
});