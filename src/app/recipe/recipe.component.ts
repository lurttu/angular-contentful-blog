import { Component, Input, OnInit } from '@angular/core';
import { BLOCKS } from '@contentful/rich-text-types';
import { Entry } from 'contentful';
import { NodeRenderer, NodeRendererResolver } from 'ngx-contentful-rich-text';
import { Recipe } from '../contentful/blog-post';

@Component({
  template: `<img src="{{ fields.file.url }}?w=300&h=217" class="image" />`,
})
export class EmbeddedAssetComponent extends NodeRenderer implements OnInit {
  fields: any;

  ngOnInit(): void {
    this.fields = this.node.data.target.fields;
  }
}

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit {
  @Input() recipe: Entry<Recipe> | null;
  nodeRenderers: Record<string, NodeRendererResolver> = {
    [BLOCKS.EMBEDDED_ASSET]: (node) => EmbeddedAssetComponent,
  };

  ngOnInit(): void {}
}
