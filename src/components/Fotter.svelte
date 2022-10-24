<script lang="ts">
  import { getFooterIconst } from "../like-api/like-requests";
  import BaseInput from "./common/BaseInput.svelte";
  import FooterSocial from "./common/FooterSocial.svelte";
  import Logo from "./common/Logo.svelte";
  import SubscribeBtn from "./common/SubscribeBtn.svelte";

  const FooterSocials = getFooterIconst();
</script>

<footer class="footer">
  <div class="container">
    <div class="footer__wrapper">
      <div class="footer__subscribe subscribe">
        <Logo />
        <div class="subscribe__text">
          Subscribe to newsletter to get some updates related with branding,
          designs and more.
        </div>
        <form action="" class="subscribe__form">
          <BaseInput />
          <SubscribeBtn />
        </form>
      </div>
      <ul class="footer__hrefs">
        <li><a href="#" />Home</li>
        <li><a href="#" />About</li>
        <li><a href="#" />Services</li>
        <li><a href="#" />Portfolio</li>
      </ul>
      <ul class="footer__hrefs">
        <li><a href="#" />Blogs</li>
        <li><a href="#" />Contact</li>
      </ul>
      <div class="footer__description">
        <p>
          Just feel free to contact if you wanna collaborate with me, or simply
          have a conversation.
        </p>
        <strong>templatesjungle@gmail.com</strong>
      </div>
    </div>
  </div>
</footer>
<div class="bottom-footer">
  <div class="container">
    <div class="bottom-footer__wrapper">
      <nav class="bottom-footer__links">
        <ul>
          {#each FooterSocials as social}
            <li><FooterSocial svg={social.svg} /></li>
          {/each}
        </ul>
      </nav>
      <div class="bottom-footer__text">
        &copy;2022, Portfo by <span>TemplatesJungle.</span>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .footer__wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-bottom: 100px;

    .footer__hrefs {
      margin-top: 136px;
      display: flex;
      flex-direction: column;
      gap: 15px;

      font-family: "Work Sans", sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 39px;

      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: $secondary-black;
      cursor: pointer;

      transition: color .1s linear;
    }

    .footer__hrefs:hover {
        color: $primary-green;
    }

    .footer__description {
      margin-top: 136px;
      font-family: "Work Sans", sans-serif;

      p {
        width: 460px;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 32px;

        color: $secondary-black;
        margin-bottom: 22px;
      }

      strong {
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 38px;

        color: $secondary-black;
      }
    }
  }

  .subscribe {
    width: 340px;

    .subscribe__text {
      margin: 30px 0px 20px 0px;
      font-family: "Work Sans", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 32px;

      color: $secondary-black;
    }

    .subscribe__form {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
  }

  .bottom-footer {
    padding: 40px 0px;
    border-top: 1px solid $primary-black;

    .bottom-footer__wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .bottom-footer__links ul {
      display: flex;
      gap: 40px;
    }

    .bottom-footer__text {
      font-family: "Work Sans", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 21px;

      color: $secondary-black;
    }

    .bottom-footer__text span{
      color: $primary-black;
      font-weight: 600;
      text-decoration: underline;
    }
  }
</style>
