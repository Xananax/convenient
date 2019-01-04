import { dom_innerHeight } from './dom_innerHeight'
import { window, doc } from './fixtures.test'

describe( 'dom_innerHeight', () => {
  it( 'should return the height of an element', () => {
    const square = doc.getElementsByClassName('square')[0]
    const height = dom_innerHeight(square, window)
    expect(typeof height).toBe('number')
  })
})