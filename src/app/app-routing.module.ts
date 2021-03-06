import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlogPostComponent} from './blog-post/blog-post.component'
import {BlogPostListComponent} from './blog-post-list/blog-post-list.component'

const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'posts', component: BlogPostListComponent },
  { path: 'post/:slug', component: BlogPostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
