import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { authGuard } from './guard/auth.guard';
import { routeGuard } from './guard/route.guard';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { RegisterComponent } from './components/register/register.component';
import {
  PostCreatingComponent
} from './components/post-creating/post-creating.component';
import {
  PostDetailComponent
} from "./components/post-detail/post-detail.component";
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // Auth related routes
  { path: 'login', component: SigninComponent, canActivate: [authGuard] },
  { path: 'signup', component: RegisterComponent, canActivate: [authGuard] },
  // Articale related routes
  { path: 'write', component: PostCreatingComponent, canActivate:[routeGuard] },
  { path: 'post/:title', component: PostDetailComponent },
  // User related routes
  {path:'user/:username',component:UserProfileComponent},
  // Invalid route
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
