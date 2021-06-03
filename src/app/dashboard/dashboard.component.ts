import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  employees: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.employees = [{
      name: 'John Green',
      profile: 'Developer',
      place: 'Dallas Taxas USA'
    },{
      name: 'Dori Smith',
      profile: 'Developer',
      place: 'Dallas Taxas USA'
    },{
      name: 'Iris Manes',
      profile: 'Developer',
      place: 'Dallas Taxas USA'
    },{
      name: 'Johnathan',
      profile: 'Developer',
      place: 'Dallas Taxas USA'
    },{
      name: 'Liz Hill',
      profile: 'Developer',
      place: 'Dallas Taxas USA'
    }]
  }

}
