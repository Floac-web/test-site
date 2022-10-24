<script lang="ts">
  export let imgSrc: string;
  export let title: string;
  export let desctiption: string;
</script>

<div class="service__wrapper">
  <div class="service__img">
    <img src={imgSrc} alt="service" />
  </div>
  <div class="service__title">{title}</div>
  <div class="service__description">{desctiption}</div>
</div>

<style lang="scss">
  .service__wrapper {
    width: 460px;
    padding: 40px;
    background-color: $primary-white;
    border: 1px solid $primary-black;
    border-radius: 18px;

    .service__img {
      width: 40px;
      height: 40px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .service__title {
      margin-top: 28px;
      margin-bottom: 14px;
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      line-height: 36px;
      text-transform: capitalize;

      color: $primary-black;
    }

    .service__description {
      font-family: "Work Sans", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 32px;
      color: $secondary-black;
    }
  }
</style>
