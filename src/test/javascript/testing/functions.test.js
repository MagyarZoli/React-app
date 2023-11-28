import timesTwo from "../../../main/javascript/testing/functions";

test("Multiples by two", () => {
  expect(timesTwo(4)).toBe(8);
});