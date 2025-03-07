class InvalidCharsError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'InvalidCharsError'
  }
}

export const validChar = (char: string) =>
  /[A-Z][a-z]()∪∩-∖/.test(char)

export const isSetChar = (char: string, numSets: number) =>
  /[A-Z]/.test(char) ||
  (/[a-z]/.test(char) &&
    (char !== 'n' && numSets > 12) &&
    (char !== 'u' && numSets > 19))

export const setExists = (char: string, numSets: number) =>
  letterToSet(char.toUpperCase()) < numSets

export const parseExpression = (expression: string) => {
  const validChars = /^[A-Z()∪∩∖]*/
  expression = expression.replace(/\s/g, '')
  if (!validChars.test(expression)) {
    throw new InvalidCharsError('Invalid characters in expression')
  }

}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
export const setToLetter = (index: number) =>
  (index + 10).toString(36).toUpperCase()

export const letterToSet = (letter: string) =>
  letter.charCodeAt(0) - 65

/**
 * Checks if the given expression has balanced parentheses.
 *
 * @param expression - The expression to check for balanced parentheses.
 * @returns True if the expression has balanced parentheses, false otherwise.
 */
export const hasBalancedParens = (expression: string) => {
  let unclosedParens = 0
  expression
    .split('')
    .forEach(char => {
      if (char === '(') {
        ++unclosedParens
      } else if (char === ')') {
        --unclosedParens
      }
    })
  return unclosedParens === 0
}