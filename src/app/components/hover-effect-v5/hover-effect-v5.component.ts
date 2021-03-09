import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-hover-effect-v5',
  templateUrl: './hover-effect-v5.component.html',
  styleUrls: ['./hover-effect-v5.component.css']
})
export class HoverEffectV5Component implements OnInit {

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
