import { Component, OnInit } from '@angular/core';
import { NodeRenderer } from 'ngx-contentful-rich-text';
import { HighlightService } from '../services/highlight.service';

@Component({
  template: `
    <ng-container *ngIf="checkIfCodeBlock()">
      <pre
        class="language-bash"
      ><code class="language-bash">{{content.value}}</code></pre>
    </ng-container>
    <p class="text-center">
      <ngx-contentful-rich-text [nodes]="content"></ngx-contentful-rich-text>
    </p>
  `,
})
export class CustomParagraphComponent extends NodeRenderer implements OnInit {
  public content: any;

  constructor(public highlightService: HighlightService) {
    super();
  }

  ngOnInit(): void {
    if (
      this.node.content.length === 1 &&
      (this.node.content[0] as any).marks.find(
        (mark: any) => mark.type === 'code'
      )
    ) {
      this.content = this.node.content.find(
        (content) =>
          content.nodeType === 'text' &&
          content.marks.find((mark: any) => mark.type === 'code')
      );
      this.highlightService.highlightAll();
    } else {
      this.content = this.node.content;
    }
  }

  public checkIfCodeBlock() {
    if (
      this.node.content.length === 1 &&
      (this.node.content[0] as any).marks.find(
        (mark: any) => mark.type === 'code'
      )
    ) {
      return true;
    } else {
      return false;
    }
  }
}
