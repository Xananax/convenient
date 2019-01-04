import { dom_innerWidth } from './dom_innerWidth'
import { window, doc } from './fixtures.test'

describe( 'dom_innerHeight', () => {
  it( 'should return the height of an element', () => {
    const square = doc.getElementsByClassName('square')[0]
    const width = dom_innerWidth(square, window)
    expect(typeof width).toBe('number')
  })
})