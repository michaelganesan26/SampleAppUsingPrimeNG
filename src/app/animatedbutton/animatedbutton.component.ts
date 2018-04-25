import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { HeroesService, IHero } from './../service/heroes.service';
import { Component, OnInit } from '@angular/core';
import { NgForOf, NgIf } from "@angular/common";
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-animatedbutton',
  templateUrl: './animatedbutton.component.html',
  styleUrls: ['./animatedbutton.component.scss'],
  animations: [
    trigger('animateString', [
      state('inactive', style({
        backgroundColor: '#eee',
        color: "violet",
        fontWeight: "900",
        fontSize: "2.0em",
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#cfd8dc',
        color: 'red',
        transform: 'scale(1.0)'
      })),
      transition('inactive=>active', animate('100ms ease-in')),
      transition('active=>inactive', animate("100ms ease-out"))
    ])]
})

export class AnimatedbuttonComponent implements OnInit {

  textStringState: string = "inactive";
  data$: Observable<IHero>;
  heroes: IHero[] = [];
  subscription$: Subscription;


  constructor(private heros$: HeroesService) { }

  ngOnInit() {

    this.subscription$ = this.heros$.getData().subscribe((hero: IHero) => {
         this.heroes.push(hero);
          
    });

  }

  //Toggle the button state
  toggleState(event: any) {

    this.textStringState = this.textStringState === "active" ? "inactive" : "active";

  }


}
