import { Routes } from '@angular/router';
import { LoginComponent } from './forms/login/login.component';
import { SignupComponent } from './forms/signup/signup.component';
import { AppComponent } from './app.component';
import { BinComponent } from './bin/bin.component';
import { AboutComponent } from './common/about/about.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'/home' ,pathMatch:'full'
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'about',
        loadComponent:()=>import('./common/about/about.component').then(mod=>mod.AboutComponent)
    },
    {
        path:'bin',
        component:BinComponent
    },
    
    {
        path:'signup',
        component:SignupComponent
    },
    {
        path:'login',
        component:LoginComponent
    }
];
