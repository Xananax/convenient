import { clamp } from './clamp'

describe('clamp', () => {
  it('returns a function that takes a single argument', () => {
    const clamp5 = clamp(5)
    expect(clamp5).toHaveProperty('length')
    expect(clamp5.length).toBe(1)
  })
  it('returns a number clamped to the provided range', () => {
    const clamp5 = clamp(5)
    expect(clamp5(10)).toBe(5)
    expect(clamp5(3)).toBe(3)
    expect(clamp5(-6)).toBe(0)
  })
  it('can optionally accept a `minimum` boundary', () => {
    const _clamp = clamp(5, -5)
    expect(_clamp(10)).toBe(5)
    expect(_clamp(3)).toBe(3)
    expect(_clamp(-4)).toBe(-4)
    expect(_clamp(-6)).toBe(-5)
  })
})