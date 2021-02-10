import { Component } from '@angular/core';
import { PersonajesService } from './services/personajes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  arrPersonajes: any[];
  currentPage: number;
  numPage: number;


  constructor(private _personajesService: PersonajesService) {

    this.currentPage = 1;

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    this._personajesService.getAll().then(response => {
      this.arrPersonajes = response['results'];
      this.numPage = response['info']['pages'];
    }).catch(err => console.log(err));

  }

  async changePage(pPage) {

    this.currentPage += pPage;

    (this.currentPage < 1) ? this.currentPage = 1 : this.currentPage;

    const response = await this._personajesService.getAll(this.currentPage);
    this.arrPersonajes = response['results'];
    

  }

}
