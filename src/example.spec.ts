import { printName, sum } from "./example";

test("make sure the first name plus the last name equal the full name", () => {
  expect(printName("Hanna", "Baum")).toBe("Hanna Baum");
});

test("should add between two numbers", () => {
  expect(sum(1, 1)).toBe(2);
});
