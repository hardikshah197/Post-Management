import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  @Input() user = { 'recent_posts': [], 'name': "", "id": '' };
  currentPost: {
    'Title': string,
    'content': string,
    'createdAt': string,
  } = { 'Title': "", 'content': "", 'createdAt': "" };
  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {}

  openPost(post: {
    'Title': string,
    'content': string,
    'createdAt': string,
  }, content: any) {
    this.currentPost = post;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			() => {},
			() => {},
		);
	}
}
