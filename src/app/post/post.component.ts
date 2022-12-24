import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  @Input() user = { 'recent_posts': [], 'name': "", "id": '' };
  constructor() {
  }

  ngOnInit() {}

  addPost() {

  }
}
