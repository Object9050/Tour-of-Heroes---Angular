import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
//nicht mehr benötigt. hero.service übernimmt dies // import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'techstarter-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{
  selectedHero?: Hero;
  
  heroes: Hero[] = [];
  
  constructor(private heroService: HeroService, private messageService: MessageService) {}
  
  ngOnInit(): void {
    this.getHeroes();
  }
  
  onSelect(hero2: Hero): void {
    this.selectedHero = hero2;
    this.messageService.add(`HeroesCompoment: Selected hero id=${hero2.id}`);
  }
  
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);;
  }

  // hero: Hero = { // <-- alt: erste Schritte
  //   id: 1,
  //   name: "Windstorm"
  // };
}
