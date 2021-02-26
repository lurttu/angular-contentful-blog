import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Asset, Entry } from 'contentful';

import { BlogPost } from '../contentful/blog-post';
import { ContentfulApiService } from '../contentful/contentful-api.service';

@Component({
  selector: 'app-blog-post',
  template: `
    <ng-container *ngIf="blogPost; else loading">
      <h1>{{ blogPost.fields.title }}</h1>
      <img
        [src]="imageUrl"
        [alt]="blogPost.fields.featuredImage.fields.title"
      />
      <ngx-contentful-rich-text [document]="blogPost.fields.body">
      </ngx-contentful-rich-text>
      <a class="underline--magical--link" routerLink="/posts">Go back</a>
    </ng-container>
    <ng-template #loading>Loading...</ng-template>
  `,
  styleUrls: ['./blog-post.component.sass'],
})
export class BlogPostComponent implements OnInit {
  blogPost: Entry<BlogPost>;
  imageUrl: string; 

  constructor(
    private route: ActivatedRoute,
    private meta: Meta,
    private title: Title,
    private contentfulApiService: ContentfulApiService
  ) {}

  ngOnInit(): void {
    const slug: string = this.route.snapshot.paramMap.get('slug') || '';


    this.contentfulApiService.getBlogPost(slug).then((blogPost) => {
      this.blogPost = blogPost;

      this.imageUrl = `${this.blogPost.fields.featuredImage.fields.file.url}?w=1240&h=540`

      // Set the document title
      this.title.setTitle(blogPost.fields.title);

      // Add meta tags for SEO
      this.meta.addTags([
        {
          name: 'description',
          content: blogPost.fields.description,
        },
        {
          name: 'og:image',
          content: blogPost.fields.featuredImage.fields.file.url,
        },
      ]);
    });
  }
}