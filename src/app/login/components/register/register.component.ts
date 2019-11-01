import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister : FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { 
    this.getValidations();
  }

  ngOnInit() {
  }

  getValidations() {
    this.formRegister = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  cancelar() {
    this.router.navigate(['login']);
  }
  
  RegisterUser(){
    console.log('regist');
  }

}
