import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GlobalService } from 'src/app/global.service';
import {PostService} from "../../services/post.service";
import {PostFetchResponseType} from "../../types/post-fetch-response.type";

interface Post {
  title: string;
  description: string;
  image: string;
  link: string;
  createdAt: Date;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  posts:Post[] = []
  topics: string[] = [
    'Data Science',
    'Productivity',
    'Self Improvement',
    'Writing',
    'Technology',
    'Machine Learning',
    'Relationships',
  ];
  isLoggedIn: boolean = false;
  userName: string = '';

  constructor(
    protected globalService: GlobalService, 
    private postService:PostService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.postService.fetchPost().subscribe({
      next:(response: PostFetchResponseType)=>{
        this.posts = response.posts
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  goToSignInPage(){
    this.router.navigate(['login'])
  }

  closeModal(){
    this.globalService.showSigninNeededModal = false;
  }

}
