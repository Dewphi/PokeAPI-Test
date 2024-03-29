import { Component } from '@angular/core';
import { PokeapiService } from '../services/pokeapi.service';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule, MatFabButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [ 
    MatInputModule, 
    MatButtonModule, 
    MatFabButton, 
    MatFormFieldModule, 
    FormsModule,
    CommonModule ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  pokemonId: any;
  pokemonDetails: any;

  constructor(private pokeapiService: PokeapiService) { }

  // getting the pokemon details by the id from the input field
  getPokemonDetails(): void {
    this.pokeapiService.getPokemonDetails(this.pokemonId).subscribe((data: any) => {
      this.pokemonDetails = data;
    });
  }
}