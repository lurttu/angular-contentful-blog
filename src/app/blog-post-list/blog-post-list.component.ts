import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';

import { BlogPost } from '../contentful/blog-post';
import { ContentfulApiService } from '../contentful/contentful-api.service';

@Component({
  selector: 'app-blog-post-list',
  template: `
    <article *ngFor="let blogPost of blogPosts">
      <h2>
        <a class="underline--magical--link" [routerLink]="['/post',blogPost.fields.slug]">{{ blogPost.fields.title }}</a>
      </h2>
      <p>{{ blogPost.fields.description }}</p>
    </article>
  `,
  styleUrls: ['./blog-post-list.component.sass'],
})
export class BlogPostListComponent implements OnInit {
  blogPosts: Array<Entry<BlogPost>>;

  constructor(private contentfulApiService: ContentfulApiService) {}

  ngOnInit(): void {
    this.contentfulApiService
      .getBlogPosts()
      .then((blogPosts) => {this.blogPosts = blogPosts.items});
  }
}