<script lang="ts">
  export let type: string;
  export let title: string;
  export let date: string;
  export let imgUrl: string;
</script>

<div class="news">
  <img src={imgUrl} alt="news" />
  <div class="news__overlay">
    <div class="news__description">
      <div class="news__sup-title">
        <div class="news__type">{type}</div>
        <div>/</div>
        <div class="news__date">{date}</div>
      </div>
      <div class="news__title">{title}</div>
    </div>
  </div>
</div>

<style lang="scss">
  .news {
    position: relative;
    cursor: pointer;
    width: 460px;
    height: 596px;
    border-radius: 0px 0px 8px 8px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .news__overlay {
      position: absolute;
      width: 100%;
      height: 50%;
      left: 0px;
      bottom: 0px;

      background: linear-gradient(
        180deg,
        rgba(245, 245, 241, 0) 0%,
        rgba(245, 245, 241, 0.9) 100%
      );
    }

    .news__description {
      width: 100%;
      max-width: 380px;

      position: absolute;
      left: 0px;
      right: 0px;
      margin: 0 auto;
      bottom: 45px;
    }

    .news__sup-title {
      font-family: "Work Sans", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 21px;
      display: flex;
      gap: 10px;

      color: $secondary-black;
    }

    .news__title {
        margin-top: 16px;
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      line-height: 36px;
      text-transform: capitalize;

      color: $primary-black;
    }
  }
</style>
