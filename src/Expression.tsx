function Expression({
  expression,
  setExpression,
  numSets
}) {

  const handleChange = (ev: KeyboardEvent ) => {
    const { value } = (ev.target as HTMLInputElement)
    if (!validChar(value)) {
      // throw error
    }
    if (isSetChar(value, numSets) && !setExists(value, numSets)) {
      // throw error
    }
    setExpression(value)
  }

  return (
    <input
      name="expression"
      placeholder="Expression"
      value={expression}
      onChange={handleChange}
    />
  )
}

export default Expression