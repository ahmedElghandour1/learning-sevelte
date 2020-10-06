<script>
  import { createEventDispatcher } from "svelte";
  import InnerEventEmiter from "./InnerEventEmiter.svelte";

  const position = { x: 0, y: 0 };
  function onMouseMove(e) {
    position.x = e.clientX;
    position.y = e.clientY;
  }
  const dispatch = createEventDispatcher();
  const onNotice = (e) =>
    dispatch("notice", {
      ...position,
    });
</script>

<button on:click> click to see event fired from App component </button>
<div on:mouseover={onNotice}>
  <div>with inline event handler</div>
  <div
    on:mousemove={(e) => {
      position.x = e.clientX;
      position.y = e.clientY;
    }}
    style="padding: 60px;border: 1px solid;margin-bottom: 100px">
    mouse position over this div is X:
    {position.x}, Y:
    {position.y}
  </div>

  <div>with function handler and event modifier</div>

  <div
    on:mousemove|once={onMouseMove}
    style="padding: 60px;border: 1px solid;margin-bottom: 100px">
    mouse position over this div is X:
    {position.x}, Y:
    {position.y}
  </div>
</div>

<InnerEventEmiter on:eventForwarding />
