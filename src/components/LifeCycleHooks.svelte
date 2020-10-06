<script lang="typescript">
  import {
    afterUpdate,
    beforeUpdate,
    createEventDispatcher,
    onMount,
    tick,
  } from "svelte";
  let count = 0;
  let selectedColor;
  let colors = ["red", "green", "yellow", "blue"];
  async function randomColor() {
    const index = Math.floor(Math.random() * colors.length);
    colors;
    console.log(index);
    selectedColor = colors[index];
    const computedStyles = window.getComputedStyle(this);
    await tick();
    /*
    without tick() the old color will be 
    consoled coz dom is not updated yet
    */
    console.log(computedStyles.backgroundColor);
  }
  onMount(() => {
    console.log("mounted");
    return () => {
      alert("from the returned function inside onMount");
    };
  });
  beforeUpdate(() => {
    console.log("before dom is updated");
  });
  afterUpdate(() => {
    console.log("after dom is updated");
  });
  const dispatcher = createEventDispatcher();
</script>

<h1>Life CycleHook</h1>
<button on:click={() => dispatcher('destroy')}>click to distroy </button>
<button on:click={() => count++}>{count}</button>
<div
  on:click={randomColor}
  style="padding: 10px;background-color: {selectedColor}">
  {selectedColor || 'hi man'}
</div>
<hr />
