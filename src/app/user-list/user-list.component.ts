import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from './shared/interfaces/user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {

  @Input() users: IUser[] = [{id: 1,name: 'Nicolas', phone: '11985684547', address: { street: 'rua fulano' }}];

  @Output() onClickUser = new EventEmitter<IUser>();

  constructor() {}

  ngOnInit(): void {}

  onClickUserFunction(user: IUser) {
    console.log(user);
    this.onClickUser.emit(user);
  }
}
