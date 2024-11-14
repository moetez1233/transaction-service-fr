import { Component } from '@angular/core';
import {SidebareComponent} from "../sidebare/sidebare.component";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-dashbord',
  standalone: true,
  imports: [MatCardModule
  ],
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.scss'
})
export class DashbordComponent {

}
