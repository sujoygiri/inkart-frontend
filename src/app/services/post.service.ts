import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  PostContentType,
  PostFetchResponseType
} from "../types/post-fetch-response.type";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url: string = 'http://localhost:8080/api/post/';

  constructor(private http:HttpClient) { }

  fetchPost():Observable<PostFetchResponseType>{
    return this.http.get<PostFetchResponseType>(this.url+'fetch-post',{withCredentials:true})
  }

  savePost(postData:string){
    return this.http.post(this.url+'save-post',{postData},{withCredentials:true});
  }

  getPostContent(param:string):Observable<PostContentType>{
    return this.http.get<PostContentType>(this.url + `post-content/` + param)
  }
}
