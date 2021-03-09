import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-hover-effect-v12',
  templateUrl: './hover-effect-v12.component.html',
  styleUrls: ['./hover-effect-v12.component.css']
})
export class HoverEffectV12Component implements OnInit {

  @Input() twitter: string;
  @Input() facebook: string;
  @Input() instagram: string;
  @Input() dribbble: string;

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
