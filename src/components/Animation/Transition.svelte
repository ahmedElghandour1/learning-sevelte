<script>
  import { linear, bounceInOut } from "svelte/easing";
  import {
    fade,
    blur,
    crossfade,
    draw,
    fly,
    scale,
    slide,
  } from "svelte/transition";
  let isvisible = false;
  let isvisible1 = false;
  let isvisible2 = false;
  let isvisible3 = false;
  let showItems = true;
  let i = 5;
  let items = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
  ];
  function gumb(node, { duration }) {
    return {
      duration,
      css: (t) => {
        const eased = bounceInOut(t);
        console.log(eased);
        return `
              transform: translateY(-${eased * 500}px);
              `;
      },
    };
  }
</script>

<style>
  .flex {
    display: flex;
    justify-content: space-between;
  }
  .row {
    padding: 0.5em 0;
    border-top: 1px solid #eee;
  }
</style>

<div class="flex">
  <div>
    <label>
      <input type="checkbox" bind:checked={isvisible} />
      {isvisible ? 'Visible' : 'Invisible'}
    </label>
    {#if isvisible}
      <div transition:fade>Fade in & out (visible)</div>
    {:else}
      <div transition:fly={{ y: 50, duration: 500 }}>
        Fade in & out (invisible)
      </div>
    {/if}
  </div>
  <div>
    <label>
      <input type="checkbox" bind:checked={isvisible1} />
      {isvisible1 ? 'Visible' : 'Invisible'}
    </label>
    {#if isvisible1}
      <div transition:fly={{ y: 50, duration: 500 }}>
        Fade in & out (visible)
      </div>
    {:else}
      <div transition:fly={{ x: 50, duration: 500 }}>
        Fade in & out (invisible)
      </div>
    {/if}
  </div>
  <div>
    <label>
      <input type="checkbox" bind:checked={isvisible2} />
      {isvisible2 ? 'Visible' : 'Invisible'}
    </label>
    {#if isvisible2}
      <div in:fly={{ y: 50, duration: 500 }} out:fade>
        Fade in & out (visible)
      </div>
    {/if}
  </div>
</div>
<br /><br /><br /><br /><br />
<div>
  <label>
    <input type="checkbox" bind:checked={isvisible3} />
    {isvisible2 ? 'Visible' : 'Invisible'}
  </label>
  {#if isvisible3}
    <div in:gumb={{ duration: 2000 }} out:fade>Fade in & out (visible)</div>
  {/if}
</div>

<label> <input type="checkbox" bind:checked={showItems} /> show list </label>

<label> <input type="range" bind:value={i} max="10" /> </label>

{#if showItems}
  {#each items.slice(0, i) as item}
    <div class="row" transition:fly={{ x: -20, duration: 400 }}>{item}</div>
  {/each}
{/if}
{#if showItems}
  {#each items.slice(0, i) as item}
    <div class="row" transition:fly|local={{ x: -20, duration: 400 }}>
      {item}
    </div>
  {/each}
{/if}
