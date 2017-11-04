import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'prj-heros',
  template: `
    <p>
      heros Works!
    </p>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class HerosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
