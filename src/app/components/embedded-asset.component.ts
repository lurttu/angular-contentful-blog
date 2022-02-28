import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgZoom } from 'ng-zoom';
import { NodeRenderer } from 'ngx-contentful-rich-text';

@Component({
  template: `<img
    src="{{ fields.file.url }}?w={{ width }}&h={{ height }}"
    class="image"
    #imageEl
  />`,
  styleUrls: ['./embedded-asset.component.scss'],
})
export class EmbeddedAssetComponent
  extends NodeRenderer
  implements OnInit, AfterViewInit
{
  fields: any;
  width = 1270;
  height = 690;

  @ViewChild('imageEl')
  imageRef!: ElementRef<HTMLImageElement>;

  constructor(private ngz: NgZoom) {
    super();
  }

  ngOnInit(): void {
    this.fields = this.node.data.target.fields;
  }

  ngAfterViewInit(): void {
    this.ngz.listen(this.imageRef);
  }
}
