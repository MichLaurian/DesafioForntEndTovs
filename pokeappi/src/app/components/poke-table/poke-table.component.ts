import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-poke-table',
  templateUrl: './poke-table.component.html',
  styleUrls: ['./poke-table.component.scss']
})
export class PokeTableComponent implements OnInit {

  pokemons:any[] = [];


// injeted a service
  constructor(private dataService: PokemonService) { }

  ngOnInit(): void {
    this.dataService.getPokemon()
    .subscribe((response : any) =>{
      response.results.forEach((results: { name: string; }) => {
        this.dataService.getMoreData(results.name)
        .subscribe((uniqResponse:any)=>{
          this.pokemons.push(uniqResponse);
          console.log(this.pokemons)
        })
      });
    });
  }

}
