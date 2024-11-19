import {Component, EventEmitter, input, Output} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {PeriodicElement} from "../list-transaction/list-transaction.component";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-transaction-details',
  standalone: true,
  imports: [MatCardModule, MatIcon, MatButtonModule, MatDividerModule, MatIconModule, DatePipe],
  templateUrl: './transaction-details.component.html',
  styleUrl: './transaction-details.component.scss'
})
export class TransactionDetailsComponent {
 transaction = input<PeriodicElement>();
 @Output() returnFromDetailTransaction=new EventEmitter<Boolean>();

 goToListTra(){
   this.returnFromDetailTransaction.emit(true);
 }
}
