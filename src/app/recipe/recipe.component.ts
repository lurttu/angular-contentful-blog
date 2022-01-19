import { Component, Input } from '@angular/core';
import { Entry } from 'contentful';
import { Recipe } from '../contentful/blog-post';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent {
  @Input() recipe: Entry<Recipe> | null;
}
