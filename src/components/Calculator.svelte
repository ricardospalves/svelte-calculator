<script lang="ts">
  import { CalculatorModel } from '../models/ModelCalculator'
  import Button from './Button.svelte'
  import Display from './Display.svelte'

  let calc = new CalculatorModel()

  const onValueClick = (value: string) => {
    calc = calc.typedNumber(value)
  }
  const onDotClick = () => {
    calc = calc.typedDot()
  }
  const onCleanClick = () => {
    calc = calc.clean()
  }
  const onOperationClick = (operator: string) => {
    calc = calc.typedOperation(operator)
  }
  const onCalculateClick = () => {
    calc = calc.calculate()
  }
</script>

<div class="calculator">
  <Display
    value={calc.value}
  />

  <Button
    area="ac"
    type="action"
    value="AC"
    onClick={onCleanClick}
  />

  <Button
    area="zero"
    type="value"
    value="0"
    onClick={onValueClick}
  />

  <Button
    area="one"
    type="value"
    value="1"
    onClick={onValueClick}
  />

  <Button
    area="two"
    type="value"
    value="2"
    onClick={onValueClick}
  />

  <Button
    area="three"
    type="value"
    value="3"
    onClick={onValueClick}
  />

  <Button
    area="four"
    type="value"
    value="4"
    onClick={onValueClick}
  />

  <Button
    area="five"
    type="value"
    value="5"
    onClick={onValueClick}
  />

  <Button
    area="six"
    type="value"
    value="6"
    onClick={onValueClick}
  />

  <Button
    area="seven"
    type="value"
    value="7"
    onClick={onValueClick}
  />

  <Button
    area="eight"
    type="value"
    value="8"
    onClick={onValueClick}
  />

  <Button
    area="nine"
    type="value"
    value="9"
    onClick={onValueClick}
  />

  <Button
    area="dot"
    type="value"
    value="."
    onClick={onDotClick}
  />

  <Button
    area="division"
    type="operation"
    value="/"
    onClick={onOperationClick}
  />

  <Button
    area="multiplication"
    type="operation"
    value="*"
    onClick={onOperationClick}
  />

  <Button
    area="minus"
    type="operation"
    value="-"
    onClick={onOperationClick}
  />

  <Button
    area="plus"
    type="operation"
    value="+"
    onClick={onOperationClick}
  />

  <Button
    area="equal"
    type="action"
    value="="
    onClick={onCalculateClick}
  />
</div>

<style>
  .calculator {
    flex-grow: 1;

    display: grid;
    gap: .5rem;
    grid-template-areas:
      "display display display display"
      "ac ac ac division"
      "seven eight nine multiplication"
      "four five six minus"
      "one two three plus"
      "zero dot equal equal";
    grid-template-rows: 4rem;
    grid-auto-rows: minmax(2.5rem, 1fr);
  }
</style>
