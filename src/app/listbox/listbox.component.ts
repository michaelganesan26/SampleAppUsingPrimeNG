
import { Component, OnInit, ViewChild, Renderer2, ElementRef, OnDestroy, AfterViewInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/Subject';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';


interface City {
  name: string;
  code: string;
}


@Component({
  selector: 'app-listbox',
  templateUrl: './listbox.component.html',
  styleUrls: ['./listbox.component.scss']
})
export class ListboxComponent implements OnInit, OnDestroy, AfterViewInit {

  cities1: SelectItem[];
  cities2: City[];

  selectedCity1: City;
  selectedCity2: City;

  filterFlag:boolean=true;

  //Return the button element
  @ViewChild("btnCheckData") btnCheckData: ElementRef;

  button$: Observable<any>;
  buttonSubscription: Subscription;

  constructor() {

  }

  selectButton(event: MouseEvent) {

     this.displayData();


  }

  //display the selected data
  displayData() {
    if (this.selectedCity1 != null) {
      console.log(`Code: ${this.selectedCity1.code} Name:${this.selectedCity1.name}`);
    }

  }

  onSelectChange(event:any){

     console.log('Change event from select');
     this.displayData();


  }



  ngAfterViewInit() {

    this.button$ = Observable.fromEvent(this.btnCheckData.nativeElement, "click");
    this.buttonSubscription = this.button$.subscribe(x => {
       this.displayData();
    });
  }

  ngOnDestroy() {

    this.buttonSubscription.unsubscribe();


  }


  private initCities() {

    //SelectItem API with label-value pairs
    this.cities1 = [
      { label: 'Select City', value: null },
      { label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } },
      { label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } },
      { label: 'London', value: { id: 3, name: 'London', code: 'LDN' } },
      { label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } },
      { label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } }
    ];

    //An array of cities
    this.cities2 = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];

  }



  ngOnInit() {
    this.initCities();





  }

}
