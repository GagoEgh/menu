import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHtmlelemt]'
})
export class HtmlelemtDirective implements OnInit {

  @Input() description=''
  constructor(
    private _el: ElementRef
  ) { }

  ngOnInit(): void {
    this._el.nativeElement.innerHTML=this.description;  
  }


}
