import add from "./add"

describe('add function', () => {
  it('should return sum for positive numbers', async () => {
    const total = add(100, 200)
    expect(total).to.equal(300)
  })

  it('should return sum for negative numbers', async () => {
    const total = add(100, -200)
    expect(total).to.equal(-100)
  })
});