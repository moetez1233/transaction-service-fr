import { Component } from '@angular/core';
import {SidebareComponent} from "../sidebare/sidebare.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SidebareComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  sideBarAction = [
    {name:'Dashbord',icone:'home',value:'dashbord'},
    {name:'List Transaction',icone:'list',value:'listTransaction'},
    {name:'New Transaction',icone:'person_add',value:'newTransaction'},
    {name:'List users',icone:'supervisor_account',value:'listUser'}
  ]
}
