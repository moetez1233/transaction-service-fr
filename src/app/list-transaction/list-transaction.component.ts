import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-list-transaction',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './list-transaction.component.html',
  styleUrl: './list-transaction.component.scss'
})
export class ListTransactionComponent {

}
