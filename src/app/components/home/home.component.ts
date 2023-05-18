import { Component, OnInit } from '@angular/core';

import { GlobalService } from 'src/app/global.service';

interface Post {
  author: string;
  profile_image: string;
  title: string;
  content: string;
  image: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  posts: Post[] = [
    {
      author: 'Sara kane',
      profile_image: 'assets/images/profile1.jpg',
      title:
        'lorem epsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      image: 'assets/images/4.jpg',
    },
    {
      author: 'Jhon Doe',
      profile_image: 'assets/images/profile2.jpg',
      title:
        'lorem epsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      image: 'assets/images/1.jpg',
    },
    {
      author: 'Tomas Doe',
      profile_image: 'assets/images/profile3.jpg',
      title:
        'lorem epsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      image: 'assets/images/2.jpg',
    },
    {
      author: 'kate Smith',
      profile_image: 'assets/images/profile4.jpg',
      title:
        'lorem epsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      image: 'assets/images/3.jpg',
    },
  ];

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

  constructor(protected globalService: GlobalService) {}

  ngOnInit(): void {}
}
