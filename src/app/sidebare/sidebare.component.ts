import {Component, computed, EventEmitter, input, Input, Output} from '@angular/core';
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {ListTransactionComponent} from "../list-transaction/list-transaction.component";
import {DashbordComponent} from "../dashbord/dashbord.component";
import {AddTransactionComponent} from "../add-transaction/add-transaction.component";
import {ListUsersComponent} from "../list-users/list-users.component";
import {CommonModule} from "@angular/common";
import {TransactionDetailsComponent} from "../transaction-details/transaction-details.component";

@Component({
  selector: 'app-sidebare',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    ListTransactionComponent,
    DashbordComponent,
    AddTransactionComponent,
    ListUsersComponent,
    TransactionDetailsComponent
  ],
  templateUrl: './sidebare.component.html',
  styleUrl: './sidebare.component.scss'
})
export class SidebareComponent {
  userConnected= input<String | null>(null);
  transDetail:any;


  listAction = input<any>(null);
  sideBareAccess = computed<any>(() => this.listAction())


  componentToShow='dashbord'

  navigate(item: any) {
  this.componentToShow = item.value;

  }
  getTransDetail(element:{}){
    this.transDetail=element;
    this.componentToShow = 'transDetail';
  }
  getRetunrFromDetailsTrans(elem:Boolean){
    this.componentToShow = 'listTransaction';
  }

}
