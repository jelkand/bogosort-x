import {
  bogosort,
  checkIfArrayInOrder,
  Comparator,
  fisherYatesShuffle,
} from '.'

describe('bogosort', () => {
  const intComparator: Comparator<number> = (a: number, b: number) => {
    if (a > b) return 1
    if (a < b) return -1
    return 0
  }
  describe('fisher yates shuffle', () => {
    it('should permute an array', () => {
      const inputArray = [1, 2, 3, 4, 5, 6]
      const shuffled = fisherYatesShuffle(inputArray)
      expect(shuffled).not.toBe(inputArray)
    })
  })

  describe('should verify that an array is in order', () => {
    const inputArray = [1, 2, 3, 4, 5, 6]
    const checker = checkIfArrayInOrder(intComparator)

    it('should return true when checking an in order array', () => {
      const inOrderActual = checker(inputArray)
      expect(inOrderActual).toBe(true)
    })

    it('should return false when checking an out of order array', () => {
      const outofOrderActual = checker(inputArray.reverse())
      expect(outofOrderActual).toBe(false)
    })
  })

  describe('bogosort method', () => {
    it('should eventually sort an array', () => {
      const inputArray = [3, 2, 1]

      const { sorted, shuffleCount } = bogosort(intComparator)(inputArray)
      console.log('sorted')
      expect(sorted).toEqual([1, 2, 3])
      expect(shuffleCount).toBeGreaterThanOrEqual(1)
    })
  })
})
