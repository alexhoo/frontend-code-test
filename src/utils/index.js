import { isStateTreeNode } from 'mobx-state-tree'
import {
  append,
  contains,
  curry,
  findIndex,
  ifElse,
  pipe,
  propEq,
  remove,
  __,
} from 'ramda'

export const toggleEltoInList = curry((elto, array) =>
  ifElse(
    contains(elto),
    pipe(findIndex(propEq('id', elto.id)), remove(__, 1, array)),
    append(elto)
  )(array)
)

const modelOf = type => {
  const fn = (props, propName) => {
    if (isStateTreeNode(props[propName]) && type.is(props[propName])) {
      return null
    }
    return new Error(`Invalid value for prop ${propName}`)
  }
  fn.isRequired = (props, propName) =>
    !(propName in props)
      ? new Error(`Missing prop ${propName} in props`)
      : fn(props, propName)

  return fn
}
export default modelOf
