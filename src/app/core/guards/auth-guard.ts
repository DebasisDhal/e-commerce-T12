import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Storage } from '../features/auth/storage';

export const authGuard: CanActivateFn = (route, state) => {
  debugger;
  const router = inject(Router);
  const storage = inject(Storage);
  const token = storage.getToken();
  if( token != null){
    return true;
  }else{
    router.navigateByUrl('/login');
    return false;
  }
};
