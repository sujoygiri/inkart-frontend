import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { RegisterComponent } from './components/register/register.component';
import { authGuard } from './guard/auth.guard';

const routes: Routes = [
  // {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'',component:HomeComponent},
  {path:'signin',component:SigninComponent,canActivate:[authGuard]},
  {path:'register',component:RegisterComponent,canActivate:[authGuard]},
  {path:'**',redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
