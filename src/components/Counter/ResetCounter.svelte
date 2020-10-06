<script>
  import { count } from "./../../store/store.ts";

  count;
</script>

<button on:click={() => count.set(0)}>Reset</button>
<button on:click={() => ($count = 0)}>Reset with $</button>
