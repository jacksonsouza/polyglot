const poly = require("../pairsum"),
      expect = require('chai').expect;

describe("Pairsum: Simple", () => {
  it("should return a 2D array with pairs adding up to the specified sum", () => {

    const result = poly.pairsum(Array.from({length: 10}, (x, i) => i), 7);
    const output = [[0,7],[1,6],[2,5],[3,4]]

    expect(result).to.eql(output)

    console.log(result)
  })
})