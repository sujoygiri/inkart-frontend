import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';

import { GlobalService } from '../global.service';
import { AuthService } from '../services/auth.service';
import { ServerAuthResponse } from '../types/auth-data.type';

export const authGuard: CanActivateFn = (route, state) => {
  const globalService = inject(GlobalService)
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.authenticate().pipe(
    map((response:ServerAuthResponse) => {
      if(response.status === 'success'){
        globalService.isLoggedIn = true
        globalService.userName = response.userName;
        globalService.profilePic = response.profile_pic
        router.navigate(['/home']);
        return false;
      }else{
        return true;
      }
    }),
    catchError(() => {
      return of(true);
    })
  );
};
