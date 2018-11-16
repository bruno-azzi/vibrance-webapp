import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PostListComponent } from '../post-list/post-list.component';
import { FavoritesProfilesComponent } from '../favorites-profiles/favorites-profiles.component';
import { HomeComponent } from './home.component';

const homeRoutes: Routes = [
  { path: '', component: HomeComponent, children: [
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
    },
    {
      path: '',
      redirectTo: 'latest',
      pathMatch: 'full'
    }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
