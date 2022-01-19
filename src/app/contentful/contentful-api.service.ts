import { Injectable } from '@angular/core';
import {
  ContentfulClientApi,
  createClient,
  Entry,
  EntryCollection,
} from 'contentful';
import { environment } from '../../environments/environment';
import { BlogPost } from './blog-post';

@Injectable({
  providedIn: 'root',
})
export class ContentfulApiService {
  private clientApi: ContentfulClientApi;

  constructor() {
    this.clientApi = createClient({
      space: environment.contentful.space,
      accessToken: environment.contentful.accessToken,
    });
  }

  /**
   * Get a single blog post by its slug
   *
   * @param slug The slug for the blog post
   */
  getBlogPost(slug: string): Promise<Entry<BlogPost>> {
    return this.getBlogPosts({
      'fields.slug': slug,
    }).then((response) => response.items[0]);
  }

  /**
   * Get listing of all blog posts
   *
   * @param query Filter object
   */
  getBlogPosts(query?: object): Promise<EntryCollection<BlogPost>> {
    return this.clientApi.getEntries<BlogPost>(
      Object.assign({}, query, { content_type: 'blogPost', include: 10 })
    );
  }
}
