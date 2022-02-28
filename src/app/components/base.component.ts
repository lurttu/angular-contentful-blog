import { Directive, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[baseComponent]',
})
export class BaseComponent implements OnDestroy {
  protected subscriptions = new Array<Subscription>();

  /**
   * Default destructor. Do not forget to call this, if your component inherits this base class, and implements
   * OnDestroy for other reasons
   */
  ngOnDestroy(): void {
    for (const sub of this.subscriptions) {
      sub.unsubscribe();
    }
  }
}
