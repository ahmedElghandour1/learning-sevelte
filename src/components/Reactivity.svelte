<script>
  /*
  $: is called labeled statement
  usually used in javascript with for loops to break or continue a statment
  
  var i, j;
  loop1: for (i = 0; i < 3; i++) {
    //The first for statement is labeled "loop1"
    loop2: for (j = 0; j < 3; j++) {
      //The second for statement is labeled "loop2"
      if (i === 1 && j === 1) {
        continue loop1;
      }
      console.log("i = " + i + ", j = " + j);
    }
  }
  */

  let count = 0;
  $: doubled = count * 2;
  function handleClick() {
    count += 1;
  }
  let condition = "";
  $: if (count === 10) {
    alert("xxxxxxx");
  }

  $: {
    if (count >= 20) {
      count = 0;
      condition = "reseted";
    } else {
      if (condition === "reseted") {
        setTimeout(() => (condition = "running"), 1000);
      } else condition = "running";
    }
  }
</script>

<button on:click={handleClick}>
  clicked
  {count}
  {count === 1 ? 'time' : 'times'}
  -
  {condition}
</button>
<div>{doubled}</div>
