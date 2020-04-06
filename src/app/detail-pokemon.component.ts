import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';

@Component({
	selector: 'detail-pokemon',
	templateUrl: './detail-pokemon.component.html'
})
export class DetailPokemonComponent implements OnInit {

	pokemons: Pokemon[] = null; //list of all pokemons
	pokemon: Pokemon = null; //one pokemon to be shown

	constructor(private route: ActivatedRoute, private router: Router) {}

	ngOnInit(): void { // void : there isn't return value
		this.pokemons = POKEMONS; // recover all pokemons
		
		//snapshot : recover parameter (id) in a synchronous way
		let id = +this.route.snapshot.paramMap.get('id');// parameters of route related to the component
		for (let i = 0; i < this.pokemons.length; i++) {
			if (this.pokemons[i].id == id) {
				this.pokemon = this.pokemons[i];
			}
		}
	}

	goBack(): void {
		this.router.navigate(['/pokemons']);
	}

}
