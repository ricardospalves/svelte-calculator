<script lang="ts">
  export let value: string
</script>

<div>
  {value}
</div>

<style>
  div {
    grid-area: display;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: .5rem;
    border: 1px solid;
    text-align: right;
    font-size: 2rem;
    line-height: 1;
  }
</style>
