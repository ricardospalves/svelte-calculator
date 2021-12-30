<script lang="ts">
  import Calculator from './components/Calculator.svelte'

  export let appName: string
</script>

<main>
  <h1>
    {appName}
  </h1>

  <Calculator />
</main>
