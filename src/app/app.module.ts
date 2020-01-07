import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe} from './pokemon-type-color.pipe';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    DetailPokemonComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
