import { Component, Input, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { Step } from '../contentful/blog-post';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss'],
})
export class StepComponent implements OnInit {
  @Input() step: Entry<Step>;
  @Input() showImages = true;

  ngOnInit(): void {}
}
