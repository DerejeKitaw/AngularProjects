import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'prj-calender',
  template: `
    <p>
      calender Works!
    </p>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class CalenderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
