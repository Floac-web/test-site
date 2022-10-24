<script lang="ts">
  import {getNews} from "../like-api/like-requests.js";
  import NewsItem from "./common/NewsItem.svelte";
  import SectionHeader from "./common/SectionHeader.svelte";
    const news = getNews()
</script>



<div class="news">
    <SectionHeader
    title="Latest news"
    desctiption="Accusan maiores alias conseaut equatur aut perferendi."
    alignText="center"
    />
    <div class="container">
        <ul class="news__wrapper">
            {#each news as newsItem}
                <li><NewsItem imgUrl={newsItem.imgUrl}
                    title={newsItem.title}
                    date={newsItem.date}
                    type={newsItem.date}/></li>
            {/each}
        </ul>
    </div>
</div>

<style lang="scss">
    .news{
        padding: 180px 0px;

        .news__wrapper{
            padding: 60px 0px;
            display: flex;
            justify-content: space-between;
        }
    }
</style>