import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { BlogPost } from 'src/app/contentful/blog-post';
import { ContentfulApiService } from 'src/app/contentful/contentful-api.service';

@Component({
  selector: 'app-dev-index-component',
  templateUrl: './dev-index.component.html',
  styleUrls: ['./dev-index.component.scss'],
})
export class DevIndexComponent implements OnInit {
  blogPosts: Array<Entry<BlogPost>>;

  constructor(private contentfulApiService: ContentfulApiService) {}

  ngOnInit(): void {
    this.contentfulApiService.getBlogPosts().then((blogPosts) => {
      this.blogPosts = blogPosts.items;
      console.log(this.blogPosts);
    });
  }
}
