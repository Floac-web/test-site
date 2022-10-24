<script>
  export let title = "base title";
  export let desctiption = "base description";
  export let alignText = "center";
</script>

<div class="container">
  <div class={`header__text ${alignText}`}>
    <h3>{title}</h3>
    <p>{desctiption}</p>
  </div>
</div>

<style lang="scss">
  .header__text{
    width: 500px;
  }
  .center{
      text-align: center;
      width: 600px;
      margin: 0 auto;
  }

  h3 {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 68px;
    line-height: 82px;
    letter-spacing: -0.04em;
    text-transform: capitalize;
    margin-bottom: 14px;

    color: $primary-black;
  }

  p {
    font-family: 'Work Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;

    color: $secondary-black;
  }
</style>
