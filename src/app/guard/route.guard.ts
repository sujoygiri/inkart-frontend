import { Inject, inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';

import { GlobalService } from '../global.service';

export const routeGuard: CanActivateFn = (route, state) => {
  const globalService = inject(GlobalService)
  console.log(globalService.isLoggedIn);
  
  return true;
};
