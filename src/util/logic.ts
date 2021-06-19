export type ValueSymbolObject =
  | string
  | number
  | boolean
  | symbol
  | object
  | null
  | undefined
  | void
export type ValueOrElement = ValueSymbolObject | Element | React.ReactNode
export type FunctionOrValueOrElement = Function | ValueOrElement

export const fnOrValue = (element: FunctionOrValueOrElement, param?: any) => {
  if (typeof element === 'function') {
    return (element as Function)(param)
  }
  return element
}

export type ArrayOfValueTypes = ValueSymbolObject[]
export type KeyOrKeys = ValueSymbolObject | ArrayOfValueTypes
export type KeyOrValue = KeyOrKeys | FunctionOrValueOrElement
export type KeyValuePairs = KeyOrValue[]

const inline = {
  fnOrValue,

  /**
   * Returns a matching element from k1, v1, k2, v2... args following the defaultElement.
   * Each key argument can be an array of alternative keys for the corresponding element.
   * @param key - key: Selector value
   * @param defaultElement - defaultElement: Default return value
   */
  switch(
    rootKey: ValueSymbolObject,
    defaultValue: FunctionOrValueOrElement,
    ...pairs: KeyValuePairs
  ) {
    const matchSingleKey = (key: Function | ValueSymbolObject) => {
      if (typeof key === 'function') {
        return (key as Function)(rootKey)
      }
      return key === rootKey
    }

    const matchKey = (key: KeyOrKeys) => {
      if (Array.isArray(key)) {
        return (key as ArrayOfValueTypes).some(matchSingleKey)
      }
      return matchSingleKey(key)
    }

    for (let i = 0; i < pairs.length; i += 2) {
      const key = pairs[i] as KeyOrKeys
      if (matchKey(key)) {
        return fnOrValue(pairs[i + 1], key)
      }
    }

    // return default value
    return fnOrValue(defaultValue, rootKey)
  },

  range(...args: number[]) {
    if (args.length < 1) throw new Error('Usage: range(n) or range(s, e)')
    if (args.length > 2) throw new Error('Usage: range(n) or range(s, e)')

    const { start, end } =
      args.length === 1
        ? { start: 1, end: args[0] }
        : { start: args[0], end: args[1] }

    const n = Math.max(start, end) - Math.min(start, end) + 1
    const arr = new Array(n)
    const step = end > start ? 1 : -1

    let i = 0
    let j = n
    let k = start

    while (j--) {
      arr[i++] = k
      k += step
    }

    return arr
  }
}

export default inline
