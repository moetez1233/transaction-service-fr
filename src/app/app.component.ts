import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {SidebareComponent} from "./sidebare/sidebare.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatCardModule, MatButtonModule, MatDividerModule, MatIconModule, SidebareComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'transaction-service-fr';
  sideBarAction = [
    {name:'Dashbord',icone:'home'},
    {name:'List Transaction',icone:'list'},
    {name:'New Transaction',icone:'person_add'},
    {name:'List users',icone:'supervisor_account'}
  ]
}
