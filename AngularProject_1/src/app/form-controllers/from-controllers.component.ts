import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'prj-from-controllers',
  template: `
    <p>
      from-controllers Works! input-box
    </p>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class FromControllersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
