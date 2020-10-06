<script>
  import { onMount } from "svelte";

  let auth = { loggedIn: false };
  let isRequired = true;
  let cats = [];
  onMount(() => {
    setTimeout(() => {
      cats = [
        { id: "J---aiyznGQ", name: "Keyboard Cat" },
        { id: "z_AbfPXTKms", name: "Maru" },
        { id: "OUtn3pvWmpg", name: "Henri The Existential Cat" },
      ];
    }, 3000);
  });
  function toggle() {
    auth.loggedIn = !auth.loggedIn;
  }

  let asyncNumber;
  let onClick = () => (asyncNumber = generateRandomNumber());
  onClick();

  function generateRandomNumber() {
    return new Promise((resolve, reject) => {
      const number = (Math.floor(Math.random()) + 1) * 100;
      setTimeout(() => {
        if (number > 100) {
          return reject("Out of the range");
        }
        resolve(number);
      }, 3000);
    });
  }
</script>

<button on:click={toggle}> {auth.loggedIn ? 'logout' : 'login'} </button>
{#if auth.loggedIn}
  <p>you are authed</p>
{/if}

{#if !auth.loggedIn}
  <p>you are not authed</p>
{/if}

{#if isRequired}required{:else}not isRequired{/if}
<br />
{#if isRequired}required{:else if !isRequired}not isRequired{/if}

<ul>
  {#each cats as { id, name }, i (id)}
    <li>
      <a href="https://www.youtube.com/watch?v={id}"> {i + 1}. {name} </a>
    </li>
  {:else}<span>Loading.....</span>{/each}
</ul>

<ul>
  {#each cats as cat, i}
    <li>
      <a href="https://www.youtube.com/watch?v={cat.id}">
        {i + 1}.
        {cat.name}
      </a>
    </li>
  {/each}
</ul>

<button on:click={onClick}>Generate number</button>
{#await asyncNumber}
  <p>...waiting</p>
{:then number}
  <p>{number}</p>
{:catch error}
  <p>{error}</p>
{/await}
