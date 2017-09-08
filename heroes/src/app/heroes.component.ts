import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import { HeroAddressService} from './hero-address-service'

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  addresses: any[];
  selectedHero: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService,
    private heroAddressService: HeroAddressService
  ) { }

  getHeroes(): void {
    //this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  getHeroAddresses(): void{
    this.heroAddressService.getAddresses().subscribe(res => this.addresses = res);
    console.log(this.addresses);



  }

  ngOnInit(): void {
    this.getHeroes();
    this.getHeroAddresses();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
