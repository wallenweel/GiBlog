export default (
  [state, setState]: [string[], React.Dispatch<React.SetStateAction<string[]>>],
  reducer = (p: any, c: any) => ({ ...p, [`data-ui-${c}-on`]: '' })
) => {
  const attributes = state.reduce(reducer, {})
  const setAttributes = (name: string, turnOn?: boolean): boolean => {
    const attr = name.toLowerCase()
    const toggle = (status: boolean): boolean => {
      if (status) setState([...state, attr])
      else setState(state.filter(n => n !== attr))
      return status
    }
    return turnOn !== undefined ? toggle(turnOn) : toggle(!state.includes(attr))
  }
  const removeAttribute = (name?: string) => {
    if (name) return setState(state.filter(n => n !== name.toLowerCase()))
    return setState(state.slice(0, state.length - 1))
  }

  return [attributes, setAttributes, removeAttribute]
}
