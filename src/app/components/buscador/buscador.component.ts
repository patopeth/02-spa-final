import { HeroesService } from '../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {

  heroes: any[] = [];
termino: string;

  constructor(private _activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService,
    private _router: Router) {

   }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
       this.heroes = this._heroesService.buscarHeroes(params['termino']);
    });
  }

  verHeroe(id: number) {
    this._router.navigate(['/heroe', id]);
  }

}
