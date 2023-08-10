export interface PostFetchResponseType {
  success:number;
  posts:[{
    title: string;
    description: string;
    image: string;
    link: string;
    createdAt: Date
  }]
}

export interface PostContentType {
  success:number;
  post:{
    title:string;
    content:string;
    createdAt:Date
  }
}
