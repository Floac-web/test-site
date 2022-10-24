<script lang="ts">
  import { getClients } from "../like-api/like-requests.js";
  import ClientItem from "./common/ClientItem.svelte";
  import SectionHeader from "./common/SectionHeader.svelte";
    const clients = getClients()
    console.log(clients)
</script>





<div class="clients">
    <SectionHeader 
    title = "Our clients"
    desctiption = "We have worked with great clients for which we are very proud."
    alignText = "center"
    />
    <div class="container">
        <ul class="clients__wrapper">
            {#each clients as client}
                <li><ClientItem imgUrl={client.imgUrl}/></li>
            {/each}
        </ul>
    </div>
</div>

<style lang="scss">
    .clients{
        padding: 140px 0px;
        background: linear-gradient(180deg, rgba(245, 245, 241, 0) 0%, #F5F5F1 100%);

        .clients__wrapper{
            display: flex;
            justify-content: space-between;
        }
    }
</style>