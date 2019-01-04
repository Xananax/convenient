import { get_file_extension } from './get_file_extension'

describe( 'get_file_extension', () => {
  it( `should return an file's extension`, () => {
    expect(get_file_extension('file.jpg')).toEqual('jpg')
  })
  it( `should return an file's extension even if the name contains dots`, () => {
    expect(get_file_extension('file.a.b.c.d.jpg')).toEqual('jpg')
  })
  it( `should return nothing if the file has no extension`, () => {
    expect(get_file_extension('file')).toEqual('')
    expect(get_file_extension('.file')).toEqual('')
    expect(get_file_extension('.file.jpg')).toEqual('jpg')
  })
  it( `should return an file's extension as lowercase`, () => {
    expect(get_file_extension('file.JPG')).toEqual('jpg')
  })
})