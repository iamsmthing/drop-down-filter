import { Component,OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {SelectItem} from 'primeng/api';
import {SelectItemGroup} from 'primeng/api';

interface City {
    name: string,
    code: string
}
interface Option {
    label: string;
    value: any;
  }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit { 
    
    cities: City[];

    selectedCity1: City;

    selectedCity2: City;

    selectedCity3: string;

    selectedCountry: string;

    options: Option[] = [
        { label: 'Option 1', value: 1 },
        { label: 'Option 2', value: 2 },
        { label: 'Option 3', value: 3 },
        { label: 'Option 4', value: 4 },
        { label: 'Option 5', value: 5 },
      ];
    
      selectedOptions1: any = [];
      selectedOptions2: any = [];
      array1:any=this.options;
      array2:any=this.options;
    
      onDropdownChange(event: any, dropdown: string): void {
        const value = event.value;
        if (dropdown === 'dropdown1') {
         console.log(value);
         this.array1=this.options.filter(data=>data.value!=value);
          console.log("array1:",this.array1);
        } else {
            this.array2=this.options.filter(data=>data.value!=value);
            console.log("array2:",this.array2);
        }
      }

    countries: any[];
    ngOnInit(): void {
       console.log(this.array1,this.array2);
        }

    groupedCities: SelectItemGroup[];

    items: SelectItem[];

    item: string;

    constructor() {
        this.items = [];
        for (let i = 0; i < 10000; i++) {
            this.items.push({label: 'Item ' + i, value: 'Item ' + i});
        }

        this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];

        this.groupedCities = [
            {
                label: 'Germany', value: 'de', 
                items: [
                    {label: 'Berlin', value: 'Berlin'},
                    {label: 'Frankfurt', value: 'Frankfurt'},
                    {label: 'Hamburg', value: 'Hamburg'},
                    {label: 'Munich', value: 'Munich'}
                ]
            },
            {
                label: 'USA', value: 'us', 
                items: [
                    {label: 'Chicago', value: 'Chicago'},
                    {label: 'Los Angeles', value: 'Los Angeles'},
                    {label: 'New York', value: 'New York'},
                    {label: 'San Francisco', value: 'San Francisco'}
                ]
            },
            {
                label: 'Japan', value: 'jp', 
                items: [
                    {label: 'Kyoto', value: 'Kyoto'},
                    {label: 'Osaka', value: 'Osaka'},
                    {label: 'Tokyo', value: 'Tokyo'},
                    {label: 'Yokohama', value: 'Yokohama'}
                ]
            }
        ];

        this.countries = [
            {name: 'Australia', code: 'AU'},
            {name: 'Brazil', code: 'BR'},
            {name: 'China', code: 'CN'},
            {name: 'Egypt', code: 'EG'},
            {name: 'France', code: 'FR'},
            {name: 'Germany', code: 'DE'},
            {name: 'India', code: 'IN'},
            {name: 'Japan', code: 'JP'},
            {name: 'Spain', code: 'ES'},
            {name: 'United States', code: 'US'}
        ];
    }

}
