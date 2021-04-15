import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroupName, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'bb-xe-login-widget',
  templateUrl: './xe-login-widget.component.html',
  styles: []
})
export class XeLoginWidgetComponent implements OnInit {

  loginForm: FormGroup;

  myFormGroup: FormGroupName;
  
  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  navigate(event) {
    console.log("event"+event);
  }

}
