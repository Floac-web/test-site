import { Clients, FooterIcons, News, Services, type IIcons, type INews, type IRepo, type IServ } from "./like-db";



export function getServices():IRepo[] {
    return Services
}


export function getClients():IServ[]{
    return Clients
}

export function getNews():INews[]{
    return News
}

export function getFooterIconst():IIcons[]{
    return FooterIcons
}