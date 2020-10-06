<script>
  import { createEventDispatcher, onMount } from "svelte";

  const dispatch = createEventDispatcher();
  onMount(() => {
    dispatch("eventForwarding", {
      forwarded: "hi..haaai..haaaaaai",
    });
  });
</script>
