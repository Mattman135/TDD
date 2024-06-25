const sum = require("./sum")
const capitalize = require("./capitalize")
const reverseString = require("./reverseString")
const calculator = require("./calculator")
const caesarCipher = require("./caesarCipher")

test("adds 1+2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3)
})

test('but there is a "stop" in Christoph', () => {
  expect("Christoph").toMatch(/stop/)
})

test("return string with capitalized first letter", () => {
  expect(capitalize("test")).toBe("Test")
})

test("return string with capitalized first letter", () => {
  expect(capitalize("Hi")).toBe("Hi")
})

test("return reverse string", () => {
  expect(reverseString("hello")).toBe("olleh")
})

test("return reverse string", () => {
  expect(reverseString("Greetings from Earth")).toBe("htraE morf sgniteerG")
})

test("calculator should take two arguments and return the correct result of the function added", () => {
  expect(calculator.add(1, 1)).toBe(2)
})

test("calculator should take two arguments and return the correct result of the function added", () => {
  expect(calculator.subtract(1, 1)).toBe(0)
})

test("calculator should take two arguments and return the correct result of the function added", () => {
  expect(calculator.divide(1, 1)).toBe(1)
})

test("calculator should take two arguments and return the correct result of the function added", () => {
  expect(calculator.multiply(6, 11)).toBe(66)
})

test("Caesar chiper xyz should return abc", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc")
})

test("Caesar chiper HeLLo should return KhOOr", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr")
})

test("Caesar chiper 'Hello, World!' should return Khoor, Zruog!", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!")
})
