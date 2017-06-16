import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import {IonicStorageModule} from '@ionic/storage';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AddTodoPage } from '../pages/add-todo/add-todo';
import { EditTodoPage } from '../pages/edit-todo/edit-todo';
import { TodosPage } from '../pages/todos/todos';
import { TodoDetailsPage } from '../pages/todo-details/todo-details';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    AddTodoPage,
    EditTodoPage,
    TodosPage,
    TodoDetailsPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    AddTodoPage,
    EditTodoPage,
    TodosPage,
    TodoDetailsPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
