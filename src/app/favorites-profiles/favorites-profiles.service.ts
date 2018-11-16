import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Profile } from './../model/profile';

@Injectable()
export class FavoritesProfilesService {

  constructor(private http: HttpClient) { }

  getProfileList(): Observable<Profile[]> {

    return this.http.get(environment.apiUrl + '5bb771fc2e00007400683ae3').pipe(map((data: any) => {

      return data.map((profileItem) => {
        const profile = new Profile();
        profile.link = profileItem.link;
        profile.picture = profileItem.picture;
        profile.name = profileItem.name;
        profile.location = profileItem.location;
        profile.status = profileItem.status;

        return profile;

      });

    }));
  }

}