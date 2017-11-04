import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'prj-todolist',
  template: `
    <p>
      todolist Works!
    </p>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class TodolistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
