import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DevIndexComponent } from './components/dev-index/dev-index.component';
import { DevRoutingModule } from './dev-routing.module';

@NgModule({
  imports: [CommonModule, DevRoutingModule],
  declarations: [DevIndexComponent],
})
export class DevModule {}
