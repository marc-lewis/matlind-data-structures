import dataStructures from './data-structures'

describe('reverseArray()', () => {
  it('should return a new array that\'s reversed', () => {
    const arrayToReverse = [1, 2, 3];
    const reversedArray = dataStructures.reverseArray(arrayToReverse)
    expect(reversedArray).toEqual([3, 2, 1])
  })
})

describe('sumArray()', () => {
  it('should return the sum of the items in an array', () => {
    const arrayToReduce = [4, 5, 6]
    const sum = dataStructures.sumArray(arrayToReduce)
    expect(sum).toBe(15)
  })
})

describe('multiplyArrayItemsBy2()', () => {
  it('should return a new array where each number is multiplied by 2', () => {
    const arrayToMap= [2, 4, 6]
    const mappedArray = dataStructures.multiplyArrayItemsBy2(arrayToMap)
    expect(mappedArray).toEqual([4, 8, 12])
  })
})

describe('returnOnlyEvenNumbers()', () => {
  it('should return a new array of only the even numbers in the array passed', () => {
    const arrayToFilter = [1, 2, 3, 4]
    const filteredArray = dataStructures.returnOnlyEvenNumbers(arrayToFilter)
    expect(filteredArray).toEqual[2, 4]
  })
})

describe('extractStringsFromDataProp()', () => {
  it('return the strings in object.data in an array', () => {
      const objToFilter = {
        data: [1, '2', 3, '4', 'foo']
      }
      const filteredObject = dataStructures.extractStringsFromDataProp(objToFilter)
      expect(filteredObject).toEqual['2', '4', 'foo']
  })
})

