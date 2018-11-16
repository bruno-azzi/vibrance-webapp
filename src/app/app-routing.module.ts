import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FavoritesProfilesComponent } from './favorites-profiles/favorites-profiles.component';
import { PostListComponent } from './post-list/post-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MyProfilePageComponent } from './my-profile-page/my-profile-page.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const appRoutes: Routes = [
    { path: 'register', component: RegisterComponent },
    {
        path: 'home', component: HomeComponent, children: [
            {
                path: 'latest',
                component: PostListComponent
            },
            {
                path: 'favorites',
                component: FavoritesProfilesComponent
            },
            {
                path: 'all',
                component: PostListComponent
            }
        ]
    },
    { path: 'my-profile', component: MyProfilePageComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: '', component: LoginComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}