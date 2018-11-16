import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';
import { SharedModule } from './shared/shared.module';
import { PostListModule } from './post-list/post-list.module';
import { FavoritesProfilesModule } from './favorites-profiles/favorites-profiles.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MyProfilePageModule } from './my-profile-page/my-profile.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PostListModule,
    SharedModule,
    FavoritesProfilesModule,
    LoginModule,
    RegisterModule,
    HomeModule,
    MyProfilePageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
