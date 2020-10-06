<script lang="ts">
  let width: number;
  let height: number;
  let size: number = 30;
  let text = "edit me";
  let div: HTMLDivElement;
  setTimeout(() => {
    div.style.backgroundColor = "red";
  }, 2000);
</script>

<style>
  input[type="text"] {
    margin-bottom: 50px;
  }
  .bordered {
    border: 1px solid black;
  }
  div {
    display: inline-block;
  }
</style>

<p>size: {width}px x {height}px</p>

<input type="text" bind:value={text} />
<input type="range" bind:value={size} max="100" />
<div
  bind:this={div}
  bind:clientHeight={height}
  bind:clientWidth={width}
  class="bordered">
  <span style="font-size: {size}px">{text}</span>
</div>
