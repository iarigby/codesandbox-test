import * as homework from "../src/index";
describe("test case", () => {
  it("should correctly sum", () => {
    expect(homework.sum(2, 3)).toEqual(5);
  });
  it("any number plus 0 should be that number", () => {
    expect(homework.sum(3, 0)).toEqual(3);
  });
});
