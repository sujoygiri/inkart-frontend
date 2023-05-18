import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';

import { GlobalService } from '../global.service';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const globalService = inject(GlobalService)
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.authenticate().pipe(
    map((response:any) => {
      if(response.status === 'success'){
        globalService.userName = response.userName;
        router.navigate(['/home']);
        return false;
      }else{
        router.navigate(['/login']);
        return true;
      }
    }),
    catchError(() => {
      router.navigate(['/login']);
      return of(false);
    })
  );
};
