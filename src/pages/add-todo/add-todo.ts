import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {TodosPage} from '../todos/todos';
/*
  Generated class for the AddTodo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-todo',
  templateUrl: 'add-todo.html'
})
export class AddTodoPage {
  todos:any;
  todo:any;

  constructor(public storage:Storage,public navCtrl: NavController, public navParams: NavParams) {
    this.todo = {
      id: '',
      text:'',
      body:'',
      due:''
    }
  }

  ionViewDidLoad() {
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

  guidGenerator() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

  onAddSubmit(){
    this.todo.id = this.guidGenerator();
    this.todos.push(this.todo);

    this.storage.ready().then(() => {
      // Set todo
      this.storage.set('todos', JSON.stringify(this.todos));

      // Redirect
      this.navCtrl.push(TodosPage);
    });
  }

}
