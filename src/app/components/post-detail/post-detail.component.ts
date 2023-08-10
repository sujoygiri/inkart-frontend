import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {PostService} from "../../services/post.service";
import {PostContentType} from "../../types/post-fetch-response.type";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit{

  postTitle:string = ''
  // postContent:string = ''
  createdAt:Date = new Date();
  routeParam:string = ''

  @ViewChild('content')
  postContent!:ElementRef;
  constructor(private route:ActivatedRoute, private postService:PostService) { }

  ngOnInit() {
    this.route.params.subscribe({
      next:(param)=>{
        this.routeParam = param['title'].split('-').pop()
      }
    });
    this.postService.getPostContent(this.routeParam).subscribe({
      next:(response:PostContentType)=>{
        console.log(response)
        this.postTitle = response.post.title;
        this.postContent.nativeElement.innerHTML = response.post.content
        this.createdAt = response.post.createdAt;
      }
    })
  }
}
