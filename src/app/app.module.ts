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
import { BaseComponent } from './components/base.component';
import { CustomParagraphComponent } from './components/custom-paragraph.component';
import { EmbeddedAssetComponent } from './components/embedded-asset.component';
import { HomeComponent } from './home/home.component';
import { RecipeComponent } from './recipe/recipe.component';
import { HighlightService } from './services/highlight.service';
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
    EmbeddedAssetComponent,
    HomeComponent,
    CustomParagraphComponent,
    BaseComponent,
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
  providers: [WordleService, HighlightService],
  bootstrap: [AppComponent],
})
export class AppModule {}
