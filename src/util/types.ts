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

export type ArrayOfValueTypes = ValueSymbolObject[]
export type KeyOrKeys = ValueSymbolObject | ArrayOfValueTypes
export type KeyOrValue = KeyOrKeys | FunctionOrValueOrElement
export type KeyValuePairs = KeyOrValue[]