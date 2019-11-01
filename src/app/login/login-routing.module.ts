import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingInComponent } from './components/sing-in/sing-in.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  {path:'', component: SingInComponent},
  {path:'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
