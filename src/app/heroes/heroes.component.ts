import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'techstarter-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  
  
  
  // hero: Hero = { // <-- alt: erste Schritte
  //   id: 1,
  //   name: "Windstorm"
  // };
}
