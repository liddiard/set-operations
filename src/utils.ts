class InvalidCharsError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'InvalidCharsError'
  }
}



export const parseExpression = (expression: string) => {
  const validChars = /^[A-Z()∪∩∖]*/
  expression = expression.replace(/\s/g, '')
  if (!validChars.test(expression)) {
    throw new InvalidCharsError('Invalid characters in expression')
  }
  
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
export const setToLetter = (index: number) => {
  (index + 10).toString(36).toUpperCase()
}

export const letterToSet = (letter: string) => {
  letter.charCodeAt(0) - 65
}