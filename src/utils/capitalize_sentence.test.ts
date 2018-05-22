import { capitalize_sentence } from './capitalize_sentence'

describe('capitalize_word', () => {
  it('should capitalize the first word', () => {
    expect(capitalize_sentence('word')).toBe('Word')
  })
  it('should not capitalize other words', () => {
    expect(capitalize_sentence('word word')).toBe('Word word')
  })
  it('should return an empty string for falsy values', () => {
    expect(capitalize_sentence()).toBe('')
    expect(capitalize_sentence('')).toBe('')
  })
})