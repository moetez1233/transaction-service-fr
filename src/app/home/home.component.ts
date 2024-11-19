import {Component, OnInit} from '@angular/core';
import {SidebareComponent} from "../sidebare/sidebare.component";
import {ActivatedRoute, Router} from "@angular/router";
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
  constructor(private activatedRoute:ActivatedRoute,private route:Router,private userService:UserConnexionService) {
  }
  userConnected='';

  sideBarAction =[
    {name:'Dashbord',icone:'home',value:'dashbord',role:'all'},
    {name:'List Transaction',icone:'list',value:'listTransaction',role:'all'},
    {name:'New Transaction',icone:'person_add',value:'newTransaction',role:'super_admin'},
    {name:'List users',icone:'supervisor_account',value:'listUser',role:'super_admin'}
  ]

  ngOnInit(): void {
   // const navigation = this.route.getCurrentNavigation();
 //   const state = navigation?.extras.state;
    const roleUserConnected = sessionStorage.getItem("role")|| "";
    this.userConnected = sessionStorage.getItem("email") || "";
    this.userService.updateRole(roleUserConnected);
    if(roleUserConnected.length>0){
      this.sideBarAction =this.sideBarAction.filter((nav:{role:string}) => (nav.role === roleUserConnected || nav.role == 'all'))
    }else {
      this.sideBarAction = []
    }


  }
}
