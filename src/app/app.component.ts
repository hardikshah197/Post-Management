import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'post-management';
  currentUser = { 'recent_posts': [], 'name': '', 'id': '' };

  handleUserClick(clickedUser: { 'recent_posts': [], 'name': '', 'id': '' }): void {
    this.currentUser = clickedUser;
  }
}
