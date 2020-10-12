export const fisherYatesShuffle = <T>(inputArray: T[]): T[] => {
  let mutableArray = [...inputArray]

  for (let i = 0; i <= mutableArray.length - 1; i++) {
    const swapIdx = randomIntInRange(i, mutableArray.length)
    const swap = mutableArray[i]
    mutableArray[i] = mutableArray[swapIdx]
    mutableArray[swapIdx] = swap
  }
  return mutableArray
}

export const randomIntInRange = (min: number, max: number) => {
  const clampMin = Math.ceil(min)
  const clampMax = Math.floor(max)
  return Math.floor(Math.random() * (clampMax - clampMin) + clampMin)
}

export type Comparator<T> = (a: T, b: T) => number // 1 if b < a, -1 if a < b

export const checkIfArrayInOrder = <T>(comparator: Comparator<T>) => (
  inputArray: T[]
) => {
  for (let i = 0; i < inputArray.length - 1; i++) {
    if (comparator(inputArray[i], inputArray[i + 1]) > 0) return false
  }
  return true
}

export const bogosort = <T>(comparator: Comparator<T>) => (inputArray: T[]) => {
  let shuffleCount = 0
  const inOrder = checkIfArrayInOrder(comparator)
  let mutableArray = inputArray
  while (!inOrder(mutableArray)) {
    shuffleCount++
    mutableArray = fisherYatesShuffle(mutableArray)
  }
  return { sorted: mutableArray, shuffleCount }
}
