const sum = require("./sum")
const capitalize = require("./capitalize")
const reverseString = require("./reverseString")

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
