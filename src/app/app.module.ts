import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [UserListComponent],
  imports: [BrowserModule],
  providers: [],
  entryComponents: [UserListComponent],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const myCustomElement = createCustomElement(UserListComponent, {
      injector: this.injector,
    });
    customElements.define('nc-user-list', myCustomElement);
  }
}
