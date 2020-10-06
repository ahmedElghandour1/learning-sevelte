<script>
  let name = "";
  setTimeout(() => (name = "test"), 2000);
  let number = 0;
  let accept = false;
  let radioGroup = 1;
  const meals = ["checken", "beaf", "burger"];
  let selectedMeal = ["burger"];
  let selectedSingleMeal;
</script>

<div style="margin-bottom: 100px">
  <input type="text" bind:value={name} placeholder="Enter your name" />

  <input bind:value={number} type="range" min="0" max="100" />
  {number}

  <label for="accept">
    Accept<input bind:checked={accept} type="checkbox" id="accept" />
    <div><small> {accept} </small></div>
  </label>
  <br />
  <label>
    <input type="radio" bind:group={radioGroup} value={1} />
    first
  </label>
  <label>
    <input type="radio" bind:group={radioGroup} value={2} />
    second
  </label>
  <label>
    <input type="radio" bind:group={radioGroup} value={3} />
    third
  </label>
  {radioGroup}
  <br />
  {#each meals as meal}
    <label>
      <input type="checkbox" bind:group={selectedMeal} value={meal} />
      {meal}
    </label>
  {/each}
  <br />
  {selectedMeal}
  <br />
  <select multiple bind:value={selectedMeal}>
    {#each meals as meal, i}
      <option value={meal}>{i + 1}. {meal}</option>
    {/each}
  </select>
  <br />
  <select bind:value={selectedSingleMeal}>
    <option value>Select meal</option>
    {#each meals as meal, i}
      <option value={meal}>{i + 1}. {meal}</option>
    {/each}
  </select>
  {selectedSingleMeal}
</div>
