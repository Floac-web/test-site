<script lang="ts">
  import SectionHeader from "./common/SectionHeader.svelte";
  import ServiceItem from "./common/ServiceItem.svelte";
  import {getServices} from '../like-api/like-requests.js'
  
  const servicesList = getServices()

</script>


<section class="services">
    <SectionHeader
    title={"Our services"}
    desctiption={"Voluptas sit aspernatur te natus accusan maiores alias consequatur aut equatur aut perferendi."}
    alignText={"left"}
    />
    <div class="container">
        <ul class="services__wrapper">
            {#each servicesList as service}
                <li><ServiceItem imgSrc={service.imgUrl} title={service.title}
                desctiption={service.desctiption} /></li>
            {/each}
        </ul>
    </div>
</section>

<style lang="scss">
    .services{
        padding-top: 140px; 

        .services__wrapper{
            padding: 60px 0px;
            display: flex;
            justify-content: space-between;
        }
    }
</style>