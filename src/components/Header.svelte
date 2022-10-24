<script>
  import burgerMenuBtnImg from "../assets/burger__menu.png";
  import BaseBtn from "./common/BaseBtn.svelte";
  import bottomArrowImg from "../assets/arrow.png";
  import Logo from "./common/Logo.svelte";
  import SocialItem from "./common/socialItem.svelte";
  import facebookSvg from "../assets/social/la_facebook-f.svg";
  import behanceSvg from "../assets/social/la_behance.svg";
  import instagramSvg from "../assets/social/la_instagram.svg";
  import pinterestSvg from "../assets/social/la_pinterest.svg";
  import twitterSvg from "../assets/social/la_twitter.svg";
</script>

<header class="header">
  <div class="header__navbar navbar">
    <Logo />
    <div class="navbar__popup-btn">
      <img src={burgerMenuBtnImg} alt="burger-menu-btn" />
    </div>
  </div>
  <div class="header__content content">
    <div class="content__container container">
      <div class="content__wrapper">
        <div class="content__desctiption">
          <div class="content__title"><h1>Chris lee creative design</h1></div>
          <div class="content__text">
            <p>
              Make designs specially illustrations, logos, UI/UX, apps &
              websites, social media, magazines & banners.
            </p>
          </div>
          <BaseBtn text="Contact us" />
        </div>
        <ul class="content__social">
          <li><SocialItem itemImg={facebookSvg} /></li>
          <li><SocialItem itemImg={instagramSvg} /></li>
          <li><SocialItem itemImg={behanceSvg} /></li>
          <li><SocialItem itemImg={twitterSvg} /></li>
          <li><SocialItem itemImg={pinterestSvg} /></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="header__bottom-arrow">
    <img src={bottomArrowImg} alt="" />
  </div>
</header>

<style lang="scss">
  .header {
    position: relative;
    width: 100%;
    height: 51vw;
    max-height: 993px;
    padding-top: 60px;
    background-image: url(/src/assets/Bg.jpg);
    background-size: cover;
    background-repeat: no-repeat;

    .header__bottom-arrow {
      position: absolute;
      display: block;
      bottom: -35px;
      right: 0px;
      left: 0px;
      margin: 0 auto;

      cursor: pointer;
      height: 71px;
      width: 262px;
    }
  }
  .header__navbar {
    max-width: 1700px;
    margin: 0 auto;
  }
  .navbar {
    width: 98%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .navbar__popup-btn {
      cursor: pointer;
    }
  }

  .header__content {
    padding-top: 147px;
  }

  .content__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .content__desctiption {
      max-width: 800px;
    }

    .content__title h1 {
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: 800;
      font-size: 108px;
      line-height: 114px;

      letter-spacing: -0.04em;
      text-transform: capitalize;
    }

    .content__text {
      margin-top: 16px;
      margin-bottom: 45px;
      font-family: "Work Sans", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 48px;
      max-width: 720px;

      color: $primary-black;
    }

    .content__social {
      display: flex;
      flex-direction: column;
      gap: 14px;
    }
  }

  @media screen and (max-width: 1600px){
    .header{width: 1600px; height: 815px;}
  }
</style>
