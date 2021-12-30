export class CalculatorModel {
  #value: string
  #accumulator: number
  #clean: boolean
  #operation: string

  constructor(
    value: string = '',
    accumulator: number = null,
    operation: string = '',
    clean = false
  ) {
    this.#value = value
    this.#accumulator = accumulator
    this.#clean = clean
    this.#operation = operation
  }

  get value() {
    return this.#value || '0'
  }

  typedNumber(newValue: string) {
    const value = this.#clean ? newValue : this.#value + newValue

    return new CalculatorModel(
      value,
      this.#accumulator,
      this.#operation,
      false
    )
  }

  typedDot() {
    const value = this.#value.includes('.') ? this.#value : this.#value + '.'

    return new CalculatorModel(
      value,
      this.#accumulator,
      this.#operation,
      false
    )
  }

  clean() {
    return new CalculatorModel()
  }

  typedOperation(nextOperation: string = '') {
    return this.calculate(nextOperation)
  }

  calculate(nextOperation: string = '') {
    const accumulator = !this.#operation
      ? window.parseFloat(this.#value)
      : eval(`${this.#accumulator} ${this.#operation} ${this.#value}`);
    const value = !this.#operation ? this.#value : `${accumulator}`

    return new CalculatorModel(
      value,
      accumulator,
      nextOperation,
      nextOperation ? true : false
    )
  }
}
