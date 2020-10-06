<script lang="typescript">
  import { tweened, spring } from "svelte/motion";
  import { cubicOut, linear } from "svelte/easing";

  let duration = 10000;
  let value = 0;
  const progress2 = tweened(0, {
    duration(from, to) {
      console.log(from, to);

      const number = 100 * (100 - to);
      console.log(number);

      return number;
    },
    easing: linear,
  });
  const progress = spring(0, {
    damping: 1,
    stiffness: 0.39,
  });
  async function run() {
    const interval = setInterval(async () => {
      await progress.update((n) => {
        value = value + 1;
        if (value === 100) {
          clearInterval(interval);
        }
        return n + 1;
      });
      console.log("xxxxxxxxxxxxxxxxxxxx");
    });
  }
</script>

<style>
  progress {
    width: 100%;
    display: block;
  }
</style>

<progress on:click|once={run} value={$progress} max="100" />
<br /><br /><br /><br />
