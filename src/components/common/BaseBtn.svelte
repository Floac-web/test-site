<script>
  export let text = "btn";
</script>

<button>{text}</button>

<style lang="scss">
  button {
    border: 1px solid $primary-black;
    background-color: $primary-white;
    padding: 30px 50px;
    border-radius: 18px;

    font-family: 'Work Sans', sans-serif;
    font-style: normal;
    color: $primary-black;
    font-weight: 600;
    font-size: 19px;
    line-height: 20px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    cursor: pointer;
  }
</style>
