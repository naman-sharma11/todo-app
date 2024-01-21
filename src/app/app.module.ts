import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoMainComponent } from './Components/todo-main/todo-main.component';
import { TodoAddComponent } from './Components/todo-add/todo-add.component';
import { TodoShowComponent } from './Components/todo-show/todo-show.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoMainComponent,
    TodoAddComponent,
    TodoShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
