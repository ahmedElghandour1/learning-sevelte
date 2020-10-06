<script>
  import User from "./components/User.svelte";
  import Reactivity from "./components/Reactivity.svelte";
  import Logic from "./components/Logic.svelte";
  import Events from "./components/Events.svelte";
  import Bindings from "./components/Bindings.svelte";
  import Media from "./components/Media.svelte";
  import Dimensions from "./components/Dimensions.svelte";
  import ComponentBindings from "./components/ComponentBindings.svelte";
  import { tick } from "svelte";
  import Counter from "./components/Counter/Counter.svelte";
  import LifeCycleHooks from "./components/LifeCycleHooks.svelte";
  import Motion from "./components/Animation/Motion.svelte";
  import Transition from "./components/Animation/Transition.svelte";
  let spread = {
    person: { name: "Ahmed", age: 27 },
  };
  let name = "World";
  setTimeout(() => {
    name = "Worldssssssssssss";
  }, 3000);
  let componentNumber = 10;
  let bindingsCompInstance;
  (async function () {
    await tick();
    console.log(bindingsCompInstance);
  })();
  let destroy;
</script>

<style>
  h1 {
    color: blue;
    text-align: center;
  }
</style>

<h1 title={name}>hello {name}!</h1>
<p>
  {@html '<b>html binding</b> blabla'}
</p>
<hr />
<User person={{ name: 'Ahmed', age: 27 }} />
<User {...spread} />
<User />
<hr />
<Reactivity />
<hr />
<Logic />
<hr />
<Events
  on:click={(e) => {
    alert(e);
  }}
  on:eventForwarding={(e) => {
    console.log(e.detail.forwarded);
  }}
  on:notice={(e) => {
    console.log(e);
  }} />
<hr />
<Bindings bind:this={bindingsCompInstance} />
<hr />
<div>Media is here</div>
<!-- <Media /> -->
<hr>
<Dimensions />
<hr />
<ComponentBindings bind:number={componentNumber} />
<h2>
  {componentNumber}<input type="range" max="100" bind:value={componentNumber} />
</h2>
<hr />
<Counter />
<hr />
{#if !destroy}
  <LifeCycleHooks on:destroy={() => (destroy = true)} />
{/if}
<hr />
<div class="border">
  <h1>Animation</h1>
  <Motion />
</div>
<hr />
<Transition />
<br /><br /><br /><br /><br />
