import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'prj-angular-lifecycle',
  template: `
    <p>
      angular-lifecycle Works!
    </p>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AngularLifecycleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
