const { helloNpm } = require(".");

describe("helloNpm", () => {
  it("should return void", () => {
    expect(helloNpm()).toBe();
  });
});
