import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { IUser } from './shared/interfaces/user.interface';

@Component({
  selector: 'nc-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit, OnDestroy, OnChanges {

  private _users: IUser[] = [];


  /**
   * O micro front end não entende o array de forma normal, então passamos um array no formado JSON
   * ou seja passamos em string, e dps convertemos para objeto para que o javascript entenda.
   */
  @Input() set users(users: string | IUser[]) {
    if( typeof users === 'string' ) {
      const userParsed: IUser[] = JSON.parse(users) as IUser[];
      this._users = userParsed;
    } else {
      this._users = users;
    }
  }

  get users(): IUser[] {
    return this._users;
  }

  @Input() token!: string;

  constructor() {}


  ngOnChanges(changes: {[users: string]: SimpleChange}) {
    // check the object "changes" for new data
    console.log('users ngOnChanges=' + this.users);
  }
  
  ngOnInit(): void {
    window.addEventListener('user-list-on-click-user', this.onClickUser, true);
  }
  
  onClickUser(event: any) {
    console.log("disparei a função: ", event.detail);
  }
  
  onClickUserFunction(user: IUser) {
    const event = new CustomEvent('user-list-on-click-user', { detail: user });
    window.dispatchEvent(event);
  }
  
  ngOnDestroy(): void {
    window.removeEventListener('user-list-on-click-user', this.onClickUser, true);
  }
}
