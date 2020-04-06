/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokemon-app';
}*/

import { Component, OnInit } from '@angular/core';

import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';

@Component({
  selector: 'pokemon-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit { 
  name = 'Angular'; 

  private pokemons: Pokemon[];
  private title: string = "Liste des pokémons";

  ngOnInit(){
    this.pokemons = POKEMONS;
  }

  selectPokemon(pokemon: Pokemon){
    alert("Vous avez cliqué sur " + pokemon.name);
  }
}
