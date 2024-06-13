import { Directive, ElementRef } from '@angular/core';
import { DataService } from '../service/data.service';

@Directive({
  selector: '[appProfileDirective]'
})
export class ProfileDirective {

  constructor(private elementRef: ElementRef, private service: DataService) {
    if(!this.service.isAdmin()) {
      this.elementRef.nativeElement.disabled = true;
    }
  }

}
