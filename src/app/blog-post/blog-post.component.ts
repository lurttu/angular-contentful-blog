import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Entry } from 'contentful';
import { BlogPost, Recipe } from '../contentful/blog-post';
import { ContentfulApiService } from '../contentful/contentful-api.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
})
export class BlogPostComponent implements OnInit {
  blogPost: Entry<BlogPost>;
  imageUrl: string;
  recipe: Entry<Recipe> | null;

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

      this.recipe = !!this.blogPost.fields.recipe
        ? this.blogPost.fields.recipe
        : null;

      this.imageUrl = `${this.blogPost.fields.featuredImage.fields.file.url}?w=1860&h=810`;

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
