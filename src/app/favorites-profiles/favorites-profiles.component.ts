import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { FavoritesProfilesService } from './favorites-profiles.service';
import { Profile } from './../model/profile';

@Component({
  selector: 'app-favorites-profiles',
  templateUrl: './favorites-profiles.component.html',
  styleUrls: ['./favorites-profiles.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FavoritesProfilesComponent implements OnInit {

  profileList: Profile[];

  constructor(private favoritesProfilesService: FavoritesProfilesService) { }

  ngOnInit() {
    this.favoritesProfilesService.getProfileList().subscribe((data) => {
      this.profileList = data
    }, error => {
      console.log(error);
    })
  }

}
