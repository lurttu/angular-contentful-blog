import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxContentfulRichTextModule } from 'ngx-contentful-rich-text';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogPostListComponent } from './blog-post-list/blog-post-list.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { RecipeComponent } from './recipe/recipe.component';
import WordleService from './services/wordle.service';
import { StepComponent } from './step/step.component';
import { WordleComponent } from './wordle/wordle.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogPostListComponent,
    BlogPostComponent,
    RecipeComponent,
    StepComponent,
    WordleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxContentfulRichTextModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
  ],
  providers: [WordleService],
  bootstrap: [AppComponent],
})
export class AppModule {}
