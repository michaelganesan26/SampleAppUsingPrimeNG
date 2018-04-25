import { Injectable } from '@angular/core';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';


export interface IHero{

  id:number;
  name:string;
}

@Injectable()
export class HeroesService {
   
  heroes:IHero[]=[];

  constructor() {
    this.initData();
   }


   getData():Observable<IHero>{

      return Observable.from(this.heroes);

   }


   initData(){

     this.heroes.push({id:1,name:"Flash"});
     this.heroes.push({id:2,name:'Green Lantern'});
     this.heroes.push({id:3,name:'Arrow'});
   }


}
