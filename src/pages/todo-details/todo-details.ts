import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {EditTodoPage} from '../edit-todo/edit-todo';
import {TodosPage} from '../todos/todos';

@Component({
  selector: 'page-todo-details',
  templateUrl: 'todo-details.html'
})
export class TodoDetailsPage {
  todo:any;
  constructor(public storage:Storage,public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.todo = {
      id: this.navParams.get('id'),
      text: this.navParams.get('text'),
      body: this.navParams.get('body'),
      due: this.navParams.get('due')
    }
    console.log(this.navParams);
  }

  onEditClick(){
    this.navCtrl.push(EditTodoPage, this.todo);
  }

  onDeleteClick(){
    this.storage.ready().then(() => {
      this.storage.get('todos').then((val) => {
        let todos = JSON.parse(val);
        for(let i = 0;i < todos.length;i++){
          if(todos[i].id == this.todo.id){
            todos.splice(i, 1);
          }
        }
        this.storage.set('todos', JSON.stringify(todos));

        this.navCtrl.push(TodosPage);
      });
    });
  }

}
