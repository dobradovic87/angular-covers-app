import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CoversService {

private coversUrl = 'https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=';
private API_KEY = '8960814a99312e10f3209b628cd9784d';
public counter = 1;

constructor(private http: HttpClient) { }

searchCovers(searchQuery: string) {
    return this.http.get(this.coversUrl + searchQuery + '&api_key=' + this.API_KEY + '&format=json')
    .pipe(
      map((response: any) => {
        if(response.hasOwnProperty('topalbums') && response.topalbums.album.length > 0)
          return response.topalbums.album;
        else return response.message;
      })
    );
}

nextPage(searchQuery: string) {
  this.counter++;
  return this.http.get(this.coversUrl + searchQuery + '&api_key=' + this.API_KEY + '&format=json'+ '&page='+ this.counter)
  .pipe(
    map((response: any) => {
      if(response.hasOwnProperty('topalbums') && response.topalbums.album.length > 0)
        return response.topalbums.album;
      else return response.message;
    })
  );
}

previousPage(searchQuery: string) {
  if (this.counter > 1){
    this.counter--;
    return this.http.get(this.coversUrl + searchQuery + '&api_key=' + this.API_KEY + '&format=json'+ '&page='+ this.counter)
    .pipe(
      map((response: any) => {
        if(response.hasOwnProperty('topalbums') && response.topalbums.album.length > 0)
          return response.topalbums.album;
        else return response.message;
      })
    );
   }
  }  
}
