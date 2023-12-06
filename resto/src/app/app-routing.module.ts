import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddRestoComponent} from './add-resto/add-resto.component';
import {ListRestoComponent} from './list-resto/list-resto.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {UpdateRestoComponent} from './update-resto/update-resto.component';
import { AuthGuard } from './auth.guard';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  {
    component : AddRestoComponent,
    path : "add",
    canActivate: [AuthGuard]
  },
  {
    component : ListRestoComponent,
    path : "list-resto",
    canActivate: [AuthGuard],
  },
  {
    component : RegisterComponent,
    path : "register"
  },
  {
    component : UpdateRestoComponent,
    path : "update-resto/:id",
    canActivate: [AuthGuard],
  },
  {
    component : UpdateRestoComponent,
    path : "update-resto",
    canActivate: [AuthGuard],
  },
  {component: LogoutComponent,
    path: 'logout',
    canActivate: [AuthGuard],
  },
  {
    component : LoginComponent,
    path : ""
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
