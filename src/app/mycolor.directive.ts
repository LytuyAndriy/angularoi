import { Directive,ElementRef,Renderer2,HostListener} from '@angular/core';

@Directive({
  selector: '[appMycolor]'
})
export class MycolorDirective {
 color:string='red';
  constructor(private element:ElementRef,private render:Renderer2) 
  {
  	this.changeColor()
  }
@HostListener('click') onClick(){
	this.color='green';
	this.changeColor();
}
changeColor(){
	this.render.setStyle(this.element.nativeElement,'color',this.color);
}
}
