import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  // const localData = sessionStorage.getItem('loggedInUser');
  const localData = true;

  if (localData) {
    return true;
  } else {
    router.navigate(['home']);
    return false;
  }
};
