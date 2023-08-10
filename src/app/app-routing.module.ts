import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { RegisterComponent } from './components/register/register.component';
import {
  PostCreatingComponent
} from './components/post-creating/post-creating.component';
import {
  PostDetailComponent
} from "./components/post-detail/post-detail.component";
import { authGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signin', component: SigninComponent, canActivate: [authGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [authGuard] },
  { path: 'write', component: PostCreatingComponent },
  { path: 'post/:title', component: PostDetailComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
