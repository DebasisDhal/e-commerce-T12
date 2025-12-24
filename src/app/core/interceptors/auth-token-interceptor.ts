import { HttpInterceptorFn } from '@angular/common/http';
import { Storage } from '../features/auth/storage';
import { inject } from '@angular/core';



export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {
debugger;
  const storage = inject(Storage)
  const token = storage.getToken();

  if(token){
    req = req.clone({
      setHeaders:{
        Authorization: `Bearer ${token}`
      }
    });
  }

  return next(req);
};
