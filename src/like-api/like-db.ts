import uiDesignServiceImg from "../assets/services/la_edit.png"
import brandingServiceImg from "../assets/services/la_gitter.png"
import logoDesignServiceImg from "../assets/services/la_jira.png"

import firstClientImg from "../assets/clients/logo4.png"
import secondClientImg from "../assets/clients/logo3.png"
import thirdClientImg from "../assets/clients/logo6.png"
import fourthClientImg from "../assets/clients/logo2.png"
import fifthClientImg from "../assets/clients/logo1.png"

import firstNewsImg from "../assets/news/annie-spratt-PM4Vu1B0gxk-unsplash.png"
import secondNewsImg from "../assets/news/pexels-jeffrey-czum-2363814.png"
import thirdNewsImg from "../assets/news/pexels-lumn-587958.png"

export interface IRepo{
    title: string,
    desctiption: string,
    imgUrl: string,
}


export const Services: IRepo[] = [
    {title: "UI/UX design", desctiption: "Perferendis doloribus asperiores repellat quia voluptas aspernatur te natus accusan maiores alias consequatur aut aut.", imgUrl: `${uiDesignServiceImg}` },
    {title: "Branding", desctiption: "Asperiores repellat quia voluptas aut aspernatur te natus accusan maiores alias consequatur aut perferendis dolor.", imgUrl: `${brandingServiceImg}`},
    {title: "Logo Design", desctiption: "Maiores alias consequatur aut aut repellat perferendi doloribus asperiores voluptas aspernatur te natus accusan.", imgUrl: `${logoDesignServiceImg}`}

]


export interface IServ{
    imgUrl: string,
}

export const Clients:IServ[] = [
    {imgUrl: firstClientImg,},
    {imgUrl: secondClientImg,},
    {imgUrl: thirdClientImg,},
    {imgUrl: fourthClientImg,},
    {imgUrl: fifthClientImg,},
]

export interface INews{
    type: string,
    date: string,
    title: string,
    imgUrl: string
}

export const News:INews[] = [
    {type: "Design", date: "Sept 12, 2022", title: "Graphic Designing Useful Tips & Best Practices", imgUrl: firstNewsImg},
    {type: "Branding", date: "Sept 12, 2022", title: "Best way to do branding of digital products", imgUrl: secondNewsImg},
    {type: "Graphic Design", date: "Sept 12, 2022", title: "Top 10 graphic designs review in 2022", imgUrl: thirdNewsImg},
]


export interface IIcons{
    svg: string
}

export const FooterIcons: IIcons[] = [
    {svg: `<svg x="0px" y="0px" width="18px" height="18px"
    viewBox="0 0 310 310">
<g>
   <path id="XMLID_835_" d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064
       c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996
       V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545
       C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703
       c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"/>
</g>


</svg>`},
    {svg: `<svg width="18px" height="18px"
    viewBox="0 0 382 382">
<path d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889
   C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056
   H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806
   c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1
   s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73
   c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079
   c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426
   c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472
   L341.91,330.654L341.91,330.654z"/>

</svg>`},
{svg: `<svg width="18px" height="18px" viewBox="0 0 20 20"><path d="M8.617 13.227C8.091 15.981 7.45 18.621 5.549 20c-.586-4.162.861-7.287 1.534-10.605-1.147-1.93.138-5.812 2.555-4.855 2.975 1.176-2.576 7.172 1.15 7.922 3.891.781 5.479-6.75 3.066-9.199C10.369-.275 3.708 3.18 4.528 8.245c.199 1.238 1.478 1.613.511 3.322-2.231-.494-2.897-2.254-2.811-4.6.138-3.84 3.449-6.527 6.771-6.9 4.201-.471 8.144 1.543 8.689 5.494.613 4.461-1.896 9.293-6.389 8.945-1.218-.095-1.728-.699-2.682-1.279z"/></svg>`},
{svg: `<svg width="18px" height="18px"
viewBox="0 0 512.002 512.002">
<path d="M500.398,94.784c-8.043,3.567-16.313,6.578-24.763,9.023c10.004-11.314,17.631-24.626,22.287-39.193
c1.044-3.265-0.038-6.839-2.722-8.975c-2.681-2.137-6.405-2.393-9.356-0.644c-17.945,10.643-37.305,18.292-57.605,22.764
c-20.449-19.981-48.222-31.353-76.934-31.353c-60.606,0-109.913,49.306-109.913,109.91c0,4.773,0.302,9.52,0.9,14.201
c-75.206-6.603-145.124-43.568-193.136-102.463c-1.711-2.099-4.347-3.231-7.046-3.014c-2.7,0.211-5.127,1.734-6.491,4.075
c-9.738,16.709-14.886,35.82-14.886,55.265c0,26.484,9.455,51.611,26.158,71.246c-5.079-1.759-10.007-3.957-14.711-6.568
c-2.525-1.406-5.607-1.384-8.116,0.054c-2.51,1.439-4.084,4.084-4.151,6.976c-0.012,0.487-0.012,0.974-0.012,1.468
c0,39.531,21.276,75.122,53.805,94.52c-2.795-0.279-5.587-0.684-8.362-1.214c-2.861-0.547-5.802,0.456-7.731,2.638
c-1.932,2.18-2.572,5.219-1.681,7.994c12.04,37.591,43.039,65.24,80.514,73.67c-31.082,19.468-66.626,29.665-103.939,29.665
c-7.786,0-15.616-0.457-23.279-1.364c-3.807-0.453-7.447,1.795-8.744,5.416c-1.297,3.622,0.078,7.66,3.316,9.736
c47.935,30.735,103.361,46.98,160.284,46.98c111.903,0,181.907-52.769,220.926-97.037c48.657-55.199,76.562-128.261,76.562-200.451
c0-3.016-0.046-6.061-0.139-9.097c19.197-14.463,35.724-31.967,49.173-52.085c2.043-3.055,1.822-7.094-0.545-9.906
C507.7,94.204,503.76,93.294,500.398,94.784z"/>
</svg>`},
{svg: `<svg width="18px" height="18px"
viewBox="0 0 236.777 236.777" >

<path d="M205.664,39.868c36.805,11.184,31.443,45.56,29.976,80.073c-0.779,18.334,1.971,46.889-6.05,63.939
   c-5.133,10.863-15.446,11.275-26.034,11.734c-52.022,2.429-104.916,4.584-156.892,2.2c-29.426-1.375-49.272-10.221-45.651-39.051
   c-2.338-27.776-0.275-57.156,2.613-84.427c1.513-14.209,4.583-28.463,19.801-33.138c10.725-3.346,24.476,0.092,35.659-0.367
   c14.438-0.55,28.738-2.567,43.222-2.75c33.276-0.458,66.552,0.229,99.828,0.413C203.693,38.493,204.793,39.089,205.664,39.868z
    M155.063,111.966c-12.925-7.104-25.942-14.071-39.143-20.626c-8.434-4.217-16.913-8.388-25.53-12.329
   c-0.367-0.183-1.742-0.642-3.254-1.192c3.713,24.796,0.458,52.114-0.596,77.506C110.053,141.85,132.695,127.183,155.063,111.966z"
   />

</svg>`}
]
