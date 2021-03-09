import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-hover-effect-v11',
  templateUrl: './hover-effect-v11.component.html',
  styleUrls: ['./hover-effect-v11.component.css']
})
export class HoverEffectV11Component implements OnInit {

  @Input('title') title: string;
  @Input('image-source') source: string;
  @Input('image-alternate-text') alternateText: string;
  @Input('content') content: TemplateRef<any>;

  @Output() submit: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  clicked(image){
    this.submit.emit(image);
  }

}
