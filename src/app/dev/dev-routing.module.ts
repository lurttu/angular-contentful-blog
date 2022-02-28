import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPostComponent } from '../blog-post/blog-post.component';
import { DevIndexComponent } from './components/dev-index/dev-index.component';

const routes: Routes = [
  {
    path: '',
    component: DevIndexComponent,
    data: {
      title: 'Dev Blog',
    },
  },
  {
    path: ':slug',
    component: BlogPostComponent,
    data: {
      devPost: true,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevRoutingModule {}
