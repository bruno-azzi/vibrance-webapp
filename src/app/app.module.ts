import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';
import { SharedModule } from './shared/shared.module';
import { PostListModule } from './post-list/post-list.module';
import { FavoritesProfilesModule } from './favorites-profiles/favorites-profiles.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MyProfilePageModule } from './my-profile-page/my-profile.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { LoginService } from './login/login.service';
import { PostListService } from './post-list/post-list.service';

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
    MyProfilePageModule
  ],
  providers: [
    AuthenticationGuard,
    LoginService,
    PostListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
