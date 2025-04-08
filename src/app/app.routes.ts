import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '',
        title: 'App Home Page',
        component: HomeComponent,
    },
    {
        path: 'login',
        title: 'App Log In Page',
        component: LoginComponent,
    },
    {
        path: 'signup',
        title: 'App Sign Up Page',
        component: SignupComponent,
    },
    {
        path: 'dashboard',
        title: 'App Sign Up Page',
        component: DashboardComponent,
    },
];
