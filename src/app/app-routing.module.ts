import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {SigninComponent} from './components/signin/signin.component';
import {RegisterComponent} from './components/register/register.component';
import {
  PostCreatingComponent
} from './components/post-creating/post-creating.component';
import {
  PostDetailComponent
} from "./components/post-detail/post-detail.component";
import {authGuard} from './guard/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'write', component: PostCreatingComponent},
  {path: 'post/:title', component: PostDetailComponent},
  {path: 'signin', component: SigninComponent, canActivate: [authGuard]},
  {path: 'register', component: RegisterComponent, canActivate: [authGuard]},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
