import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-hover-effect-v3',
  templateUrl: './hover-effect-v3.component.html',
  styleUrls: ['./hover-effect-v3.component.css']
})
export class HoverEffectV3Component implements OnInit {

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
