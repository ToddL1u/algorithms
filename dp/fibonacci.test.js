const fib = require('./fibonacci')
const SECONDS = 1000;
jest.setTimeout(10 * SECONDS)

describe('fibonacci', () => {
  test('fib(1) should be 1 ',  () => {
    expect(fib(1)).toBe(1)
  })

  test('fib(5) should be 8 ',  () => {
    expect(fib(5)).toBe(5)
  })

  test('fib(15) should be 610 ',  () => {
    expect(fib(15)).toBe(610)
  })

  test('fib(50) should be 610 ',  () => {
    expect(fib(50)).toBe(12586269025)
  })
})