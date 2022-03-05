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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends BaseComponent implements OnInit {
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
    this.subscriptions.push();
  }
}
