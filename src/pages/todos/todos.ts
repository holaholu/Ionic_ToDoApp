import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {TodoDetailsPage} from '../todo-details/todo-details';

@Component({
  selector: 'page-todos',
  templateUrl: 'todos.html'
})
export class TodosPage {
  todos:any;
  constructor(public storage:Storage,public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidEnter() {
    this.storage.ready().then(() => {
      this.storage.get('todos').then((val) => {
        if(val){
          this.todos = JSON.parse(val);
        } else {
          this.todos = [];
        }
      }).catch((err) => {
        console.log(err);
      });
    });
  }

  todoSelected(todo){
    this.navCtrl.push(TodoDetailsPage, todo);
  }

}
