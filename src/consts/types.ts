
export type State = {
    items:ItemsType[]
    pages:number
    author:string
    index:number
}


export type ItemsType = {
    accessInfo:object
    etag:string
    id:string
    kind:string
    searchInfo:searchInfoType
    saleInfo:SalesType
    selfLink:string
    volumeInfo:bookInfoType
}

export type SalesType ={
    country:string
    saleability:string
}

export type searchInfoType ={
    textSnippet:string
}

export type bookInfoType = {
    authors:string
    canonicalVolumeLink:string
    categories:string
    contentVersion:string
    description:string
    imageLinks:imageLinksInfoType
    industryIdentifiers:string
    infoLink:string
    language:string
    maturityRating:string
    pageCount:string
    panelizationSummary:string
    previewLink:string
    printType:string
    publishedDate:string
    publisher:string
    readingModes:string
    subtitle:string
    title:string
}

export type imageLinksInfoType = {
    smallThumbnail:string
    thumbnail:string
}

export const styleForCard = {
    justifyContent:'center',
    width:'360px',
    minHeight:'250px',
    borderRadius:15,
    margin:'20px',
    backgroundColor:'blue',
}
