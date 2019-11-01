import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../../core/services/auth/auth.service';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {

  formSignIn : FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.getValidations();
   }

  ngOnInit() {
  }

  getValidations() {
    this.formSignIn = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  irRegistrar() {
    this.router.navigate(['login/register']);
  }
  
  loginUser(){
    if(this.formSignIn.valid){
      const user = this.formSignIn.value;
      console.log(user);
      this.authService.login(user.email, user.first_name).subscribe(
        res => {
          console.log(res);
          //this.router.navigate(['home']);
        },
        error => console.log(error)
      );
    }
  }

}
