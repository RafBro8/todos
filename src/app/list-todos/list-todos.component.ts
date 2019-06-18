import { Component, OnInit } from '@angular/core';
import {Todo} from './model/todo';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    new Todo(1, 'Learn to Code', false, new Date()),
    new Todo(2, 'Find girlfriend', false, new Date()),
    new Todo(3, 'Live alone', false, new Date()),
    // {id: 1, description: 'Learn to Code'},
    // {id: 2, description: 'Find girlfriend'},
    // {id: 3, description: 'Live alone'}
  ];

  // todo = {
  //   id : 1,
  //   description: 'Learn to Code'
  // };

  constructor() { }

  ngOnInit() {
  }

}
