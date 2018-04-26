import { Component, OnInit } from '@angular/core';
import { Calendar } from 'primeng/calendar';
import { Listbox } from 'primeng/listbox';
import {InputText} from 'primeng/inputtext'
import { City } from '../utilities/variables';




@Component({
  selector: 'app-fluidlayout',
  templateUrl: './fluidlayout.component.html',
  styleUrls: ['./fluidlayout.component.scss']
})

export class FluidlayoutComponent implements OnInit {

  cities: City[];
  selectedCity: City;
  currentDate:Date;


  constructor() { }

  ngOnInit() {
    this.initializeData();
  }

  initializeData() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];

  }


}
