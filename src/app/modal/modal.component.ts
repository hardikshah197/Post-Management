import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostService } from 'src/app/post.service';

@Component({
	selector: 'app-modal',
  	templateUrl: './modal.component.html',
  	styleUrls: ['./modal.component.css'],
})
export class ModalComponent {

	@Input() userId = "";
	title = "";
	content = "";

	constructor(private modalService: NgbModal, private postService: PostService) {}

	open(content: any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {},
			(reason) => {},
		);
	}

	handleTitleChange(event: any) {
		this.title = event.target.value;
	}

	handleContentChange(event: any) {
		this.content = event.target.value;
	}

	handleSubmit() {
		this.postService.createPost(this.userId, {
			"Title": this.title,
			"content": this.content
		}).subscribe(data => {
			alert("Post created successfully!");
			location.reload();
		}, err => {
			console.log(err);
			alert(err.error);
		})
	}
}
