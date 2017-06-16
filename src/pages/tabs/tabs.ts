import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import {AddTodoPage} from '../add-todo/add-todo';
import {TodosPage} from '../todos/todos';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = TodosPage;
  tab2Root: any = AddTodoPage;
  tab3Root: any = AboutPage;

  constructor() {

  }
}
