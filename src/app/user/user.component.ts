import { Component, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  users = [];
  @Output() handleUserClick = new EventEmitter();
  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.fetchUser();
  }

  fetchUser() {
    this.userService.getUsers()
    .subscribe(data => {
      this.users = data;
    })
  }

  handleClick(user: Object) {
    this.handleUserClick.emit(user);
  }

}
