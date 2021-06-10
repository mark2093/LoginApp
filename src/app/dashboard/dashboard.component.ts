import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  employees: any[] = [];
  username: any;

  constructor(private router: Router) { }

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
    }];
    this.username = localStorage.getItem("username");
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

}
