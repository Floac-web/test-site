<script>
import BaseSvg from "../../assets/social/la_facebook-f.svg"
    
    export let itemImg;
</script>

<a href="#">
    <img src={itemImg || BaseSvg} alt="">
</a>

<style lang="scss">
    a{
        border: 1px solid $primary-black;
        display: inline-block;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: $primary-white;
        display: flex;
        cursor: pointer;

        img{
            width: 26px;
            height: 26px;
            margin: auto;
        }
    }
</style>