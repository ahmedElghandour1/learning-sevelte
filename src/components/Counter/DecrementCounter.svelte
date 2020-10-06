<script>
  import { count } from "./../../store/store.ts";
</script>

<button on:click={() => count.update((n) => n - 1)}>-</button>
<button on:click={() => ($count -= 1)}>- with $</button>
