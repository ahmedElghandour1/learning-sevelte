<script>
  export let number = 20;
</script>

<h1>{number} <input type="range" max="100" bind:value={number} /></h1>
