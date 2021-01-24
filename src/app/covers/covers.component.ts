import { Component, OnInit } from '@angular/core';
import { CoversService } from '../covers.service';

@Component({
  selector: 'app-covers',
  templateUrl: './covers.component.html',
  styleUrls: ['./covers.component.css'],
})
export class CoversComponent {
  query: string;
  covers: Object;
  artist: string;
  name: string;

  constructor(private coversService: CoversService) {  }

  searchCovers(){
    this.coversService.searchCovers(this.query).subscribe(res => {
        this.covers = res;
        // console.log(this.covers[0].artist.name);
        console.log(res);
       
    });
  }

  nextPage(){
      this.coversService.nextPage(this.query).subscribe(res => {
      this.covers = res;
   });
  }

  previousPage(){
      this.coversService.previousPage(this.query).subscribe(res => {
      this.covers = res;
   });
  }
}
