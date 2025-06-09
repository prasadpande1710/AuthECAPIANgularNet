import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TodosReducer } from './store/reducers/todo.reducer';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './component/todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   StoreModule.forRoot({ todos: TodosReducer }),
   StoreDevtoolsModule.instrument({
    maxAge:25
   })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
