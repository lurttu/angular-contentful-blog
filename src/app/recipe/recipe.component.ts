import { Component, Input, OnInit } from '@angular/core';
import { BLOCKS } from '@contentful/rich-text-types';
import { Entry } from 'contentful';
import { NodeRenderer, NodeRendererResolver } from 'ngx-contentful-rich-text';
import { EmbeddedAssetComponent } from '../components/embedded-asset.component';
import { Recipe } from '../contentful/blog-post';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit {
  @Input() recipe: Entry<Recipe> | null;
  public imagesVisible = true;
  nodeRenderers: Record<string, NodeRendererResolver> = {
    [BLOCKS.EMBEDDED_ASSET]: (node) => EmbeddedAssetComponent,
  };

  ngOnInit(): void {}

  public imageToggle(): void {
    this.imagesVisible = !this.imagesVisible;
  }
}
