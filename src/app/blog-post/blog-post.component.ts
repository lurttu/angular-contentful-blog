import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { BLOCKS } from '@contentful/rich-text-types';
import { Entry } from 'contentful';
import { NodeRendererResolver } from 'ngx-contentful-rich-text';
import { BaseComponent } from '../components/base.component';
import { CustomParagraphComponent } from '../components/custom-paragraph.component';
import { EmbeddedAssetComponent } from '../components/embedded-asset.component';
import { BlogPost, Recipe } from '../contentful/blog-post';
import { ContentfulApiService } from '../contentful/contentful-api.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
})
export class BlogPostComponent extends BaseComponent implements OnInit {
  blogPost: Entry<BlogPost>;
  imageUrl: string;
  isDevPost = false;
  recipe: Entry<Recipe> | null;
  nodeRenderers: Record<string, NodeRendererResolver> = {
    [BLOCKS.EMBEDDED_ASSET]: (node) => EmbeddedAssetComponent,
    [BLOCKS.PARAGRAPH]: (node) => CustomParagraphComponent,
  };

  constructor(
    private route: ActivatedRoute,
    private meta: Meta,
    private title: Title,
    private contentfulApiService: ContentfulApiService
  ) {
    super();
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.route.data.subscribe((data) => {
        if (data && data.devPost) {
          this.isDevPost = true;
        }
      })
    );

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
