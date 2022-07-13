const convert = require("./convert");

test("Testing I converts to 1", () => {
  expect(convert("I")).toBe(1);
});

test("Testing II converts to 2", () => {
  expect(convert("II")).toBe(2);
});

test("Testing IV converts to 4", () => {
  expect(convert("IV")).toBe(4);
});

test("Testing V converts to 5", () => {
  expect(convert("V")).toBe(5);
});

test("Testing X converts to 10", () => {
  expect(convert("X")).toBe(10);
});

test("Testing XI converts to 11", () => {
  expect(convert("XI")).toBe(11);
});

test("Testing L converts to 50", () => {
  expect(convert("L")).toBe(50);
});

test("Testing C converts to 100", () => {
  expect(convert("C")).toBe(100);
});

test("Testing MCMLXXXIX converts to 1989", () => {
  expect(convert("MCMLXXXIX")).toBe(1989);
});

test("Testing MCMLKXXXIX converts to undefinded", () => {
  expect(convert("MCMLKXXXIX")).toBe(undefined);
});

test("Testing the number 2 converts to undefinded", () => {
  expect(convert(2)).toBe(undefined);
});
