import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPostListComponent } from './blog-post-list/blog-post-list.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { DevIndexComponent } from './dev/components/dev-index/dev-index.component';
import { WordleComponent } from './wordle/wordle.component';

const routes: Routes = [
  { path: '', redirectTo: '/food', pathMatch: 'full' },
  {
    path: 'dev',
    loadChildren: () => import('./dev/dev.module').then((m) => m.DevModule),
  },
  { path: 'food', component: BlogPostListComponent },
  { path: 'recipe/:slug', component: BlogPostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
