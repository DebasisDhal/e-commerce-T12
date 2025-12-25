import { Routes } from '@angular/router';
import { Header } from './core/shared/components/header/header';
import { Component } from '@angular/core';
import { HomePage } from './core/features/home-page/home-page';
import { Layout } from './core/features/layout/layout';
import { Login } from './core/features/auth/login/login';
import { authGuard } from './core/guards/auth-guard';
import { Products } from './core/features/products/products';
import { ProductDetails } from './core/shared/components/product-details/product-details';

export const routes: Routes = [
   
   {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
   },
    {
        path:'login',
        component:Login
    },
    {
        path:'',
        component:Layout,
        canActivate:[authGuard],
        children:[
            {
                path:'home',
                component: HomePage
            },
            {
                path:'products',
                component: Products
            },{
                path:'p-details',
                component:ProductDetails
            }
        ]
    }
];
