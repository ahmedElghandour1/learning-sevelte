<script>
  import { onDestroy } from "svelte";
  import { count, time, elapsed, altCount } from "./../../store/store.ts";
  import DecrementCounter from "./DecrementCounter.svelte";
  import IncrementCounter from "./IncrementCounter.svelte";
  import ResetCounter from "./ResetCounter.svelte";
  import { Subject } from "rxjs";
  let counter;
  let msgSubject = new Subject();
  msgSubject.next(10);
  const unsbscCount = count.subscribe((val) => (counter = val));
  onDestroy(() => {
    unsbscCount();
  });
</script>

<style lang="scss">
  div {
    span.rxjs {
      color: white;
      background-color: red;
    }
  }
</style>

<h1>
  {(function () {
    let now = new Date($time).toLocaleTimeString();
    return now;
  })()}
</h1>
<p>page is open since {$elapsed}</p>
<h1>The count is {counter}</h1>
<h1>The count is {$count}</h1>
<DecrementCounter />
<IncrementCounter />
<ResetCounter />
<div style="border: 1px solid">
  <p>Customisable store</p>
  <div>{$altCount}</div>
  <button on:click={altCount.inc}>+</button>
  <button on:click={altCount.dec}>-</button>
  <button on:click={altCount.reset}>reset</button>
</div>
<br />
<div style="border: 1px solid">
  <span class="rxjs">{$msgSubject}</span>
  this value came from rxjs's Subject with $ sign template auto subscription
  compatible
</div>
