import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MyProfilePageComponent } from './my-profile-page/my-profile-page.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthenticationGuard } from './guards/authentication.guard';

const appRoutes: Routes = [
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { 
        path: 'home', 
        loadChildren: 'src/app/home/home.module#HomeModule', 
        canActivate: [AuthenticationGuard]
    },
    { 
        path: 'my-profile', 
        canActivate: [AuthenticationGuard], 
        canLoad: [AuthenticationGuard], 
        component: MyProfilePageComponent 
    },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}