import { Routes } from '@angular/router';
import { Header } from './core/shared/components/header/header';
import { Component } from '@angular/core';
import { HomePage } from './core/features/home-page/home-page';
import { Layout } from './core/features/layout/layout';

export const routes: Routes = [
    {
        path:'',
        component:Layout,
        children:[
            {
                path:'',
                component: HomePage
            }
        ]
    }
];
