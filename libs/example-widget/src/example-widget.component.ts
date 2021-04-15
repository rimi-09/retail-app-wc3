import { Component, OnInit } from '@angular/core';
import '@backbase/backbase-theme'

@Component({
  selector: 'xe-example-widget',
  template: `
    <p>
      example-widget works!
    </p>
  `,
  styles: []
})
export class ExampleWidgetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
