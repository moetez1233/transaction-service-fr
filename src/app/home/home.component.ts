import {Component, OnInit} from '@angular/core';
import {SidebareComponent} from "../sidebare/sidebare.component";
import {ActivatedRoute} from "@angular/router";
import {UserConnexionService} from "../services/user-connexion.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SidebareComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  constructor(private activatedRoute:ActivatedRoute) {
  }
  userConnected='';

  sideBarAction =[
    {name:'Dashbord',icone:'home',value:'dashbord',role:'all'},
    {name:'List Transaction',icone:'list',value:'listTransaction',role:'all'},
    {name:'New Transaction',icone:'person_add',value:'newTransaction',role:'super_admin'},
    {name:'List users',icone:'supervisor_account',value:'listUser',role:'super_admin'}
  ]

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((val) => {
      const roleUserConnected = val['role'];
      this.userConnected = val['email'];
      console.log(roleUserConnected)
      console.log(this.userConnected)
      this.sideBarAction =this.sideBarAction.filter((nav:{role:string}) => (nav.role === roleUserConnected || nav.role == 'all'))

    })
  }
}
