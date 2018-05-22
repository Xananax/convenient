import { arrayLike_to_array } from './arrayLike_to_array'
import { window, doc } from './fixtures.test'

describe('arrayLike_to_array',() => {
  it('should convert NodeLists to arrays', () => {
    const nodeList = doc.querySelectorAll("p")
    expect(nodeList).toBeInstanceOf(window.NodeList)
    expect(arrayLike_to_array(nodeList)).toBeInstanceOf(Array)
  })
  it('should convert FileLists to arrays', () => {
    const fileInput = doc.getElementById('file') as HTMLInputElement
    if(fileInput){
      const filesList = fileInput.files as FileList
      expect(filesList).toBeInstanceOf(window.FileList)
      expect(arrayLike_to_array(filesList)).toBeInstanceOf(Array)
    }
  })
  it('should shallow copy arrays', () => {
    const arr = [1,2,3,4]
    const arr2 = arrayLike_to_array(arr)
    expect(arr).toEqual(arr2)
    expect(arr).toBe(arr)
    expect(arr).not.toBe(arr2)
  })
})