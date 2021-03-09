import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

images: any[] = [
  { src: '/assets/images/image (1).jpg', alt: 'image (1).jpg', title: 'Hover Effect' },
  { src: '/assets/images/image (2).jpg', alt: 'image (2).jpg', title: 'Hover Effect' },
  { src: '/assets/images/image (3).jpg', alt: 'image (3).jpg', title: 'Hover Effect' },
  { src: '/assets/images/image (4).jpg', alt: 'image (4).jpg', title: 'Hover Effect' },
  { src: '/assets/images/image (5).jpg', alt: 'image (5).jpg', title: 'Hover Effect' },
  { src: '/assets/images/image (6).jpg', alt: 'image (6).jpg', title: 'Hover Effect' },
  { src: '/assets/images/image (7).jpg', alt: 'image (7).jpg', title: 'Hover Effect' },
  { src: '/assets/images/image (8).jpg', alt: 'image (8).jpg', title: 'Hover Effect' },
  { src: '/assets/images/image (9).jpg', alt: 'image (9).jpg', title: 'Hover Effect' },
  { src: '/assets/images/image (10).jpg', alt: 'image (10).jpg', title: 'Hover Effect' },
  { src: '/assets/images/image (11).jpg', alt: 'image (11).jpg', title: 'Hover Effect' },
  { src: '/assets/images/image (12).jpg', alt: 'image (12).jpg', title: 'Hover Effect' },
  { src: '/assets/images/image (13).jpg', alt: 'image (13).jpg', title: 'Hover Effect' },
  { src: '/assets/images/image (14).jpg', alt: 'image (14).jpg', title: 'Hover Effect' },
  { src: '/assets/images/image (15).jpg', alt: 'image (15).jpg', title: 'Hover Effect' },
  { src: '/assets/images/image (16).jpg', alt: 'image (16).jpg', title: 'Hover Effect' },
];

  constructor() { }

  ngOnInit(): void {
  }

  clickMe(rowIndex, image) {
    console.log(rowIndex, image);
  }

  clicked(args: any) {
    console.log('emitted data', args);
  }

}
