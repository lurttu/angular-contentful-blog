import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { BlogPost } from '../contentful/blog-post';
import { ContentfulApiService } from '../contentful/contentful-api.service';

@Component({
  selector: 'app-blog-post-list',
  templateUrl: './blog-post-list.component.html',
  styleUrls: ['./blog-post-list.component.scss'],
})
export class BlogPostListComponent implements OnInit {
  blogPosts: Array<Entry<BlogPost>>;

  constructor(private contentfulApiService: ContentfulApiService) {}

  ngOnInit(): void {
    this.contentfulApiService.getBlogPosts().then((blogPosts) => {
      this.blogPosts = blogPosts.items;
      console.log(this.blogPosts);
    });
  }
}
