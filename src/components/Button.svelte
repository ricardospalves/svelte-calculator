<script lang="ts">
  type ButtonTypes = 'value' | 'operation' | 'action'

  export let value: string
  export let area = ''
  export let type: ButtonTypes
  export let onClick: (value: string) => void = () => {}
</script>

<button
  type="button"
  class={`${type}`}
  style={`--area: ${area}`}
  on:click={() => onClick(value)}
>
  {value}
</button>

<style>
  button {
    margin: 0;
    grid-area: var(--area);
    border: 1px solid;
    display: block;
    color: #000;
  }

  button:focus-visible {
    box-shadow: 0 0 0 .25rem rgba(30, 136, 229, 0.5);
  }

  .value {
    background-color: #FFF;
  }

  .operation {
    background-color: #2196f3;
  }

  .action {
    background-color: #ffeb3b;
  }
</style>
