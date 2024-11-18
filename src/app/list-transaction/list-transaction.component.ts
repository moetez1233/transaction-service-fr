import {Component, EventEmitter, Output} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import {MatIcon} from "@angular/material/icon";
import {UserConnexionService} from "../services/user-connexion.service";
export interface PeriodicElement {
  position:number;
  transactionType: string;
  timestamp: string;
  accountNumber: string;
  description: string;
  name: string;
  email: string;
  phone: string;
  view: any;
}

const ELEMENT_DATA: PeriodicElement[]  = [
  {
    transactionType: 'CREDIT',
    timestamp: '2024-11-18T10:00:00',
    accountNumber: '123456789',
    description: 'Salary deposit',
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+123456789',
    position:1,
    view:''
  },
  {
    transactionType: 'DEBIT',
    timestamp: '2024-11-18T14:00:00',
    accountNumber: '987654321',
    description: 'Grocery shopping',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '+987654321',
    position:2,
    view:''
  },
  {
    transactionType: 'CREDIT',
    timestamp: '2024-11-18T16:00:00',
    accountNumber: '112233445',
    description: 'Project bonus',
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    phone: '+1122334455',
    position:3,
    view:''
  },
  {
    transactionType: 'DEBIT',
    timestamp: '2024-11-18T18:00:00',
    accountNumber: '445566778',
    description: 'Electricity bill',
    name: 'Robert Brown',
    email: 'robert.brown@example.com',
    phone: '+4455667788',
    position:4,
    view:''
  },
  {
    transactionType: 'CREDIT',
    timestamp: '2024-11-18T20:00:00',
    accountNumber: '556677889',
    description: 'Tax refund',
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    phone: '+5566778899',
    position:5,
    view:''
  },
  {
    transactionType: 'DEBIT',
    timestamp: '2024-11-19T08:00:00',
    accountNumber: '667788990',
    description: 'Gym subscription',
    name: 'Michael Wilson',
    email: 'michael.wilson@example.com',
    phone: '+6677889900',
    position:6,
    view:''
  },
  {
    transactionType: 'CREDIT',
    timestamp: '2024-11-19T09:00:00',
    accountNumber: '778899001',
    description: 'Freelance payment',
    name: 'Sophia Lee',
    email: 'sophia.lee@example.com',
    phone: '+7788990011',
    position:7,
    view:''
  },
  {
    transactionType: 'DEBIT',
    timestamp: '2024-11-19T10:00:00',
    accountNumber: '889900112',
    description: 'Insurance premium',
    name: 'James Taylor',
    email: 'james.taylor@example.com',
    phone: '+8899001122',
    position:8,
    view:''
  },
  {
    transactionType: 'CREDIT',
    timestamp: '2024-11-19T11:00:00',
    accountNumber: '990011223',
    description: 'Investment dividend',
    name: 'Olivia Martin',
    email: 'olivia.martin@example.com',
    phone: '+9900112233',
    position:9,
    view:''
  },
  {
    transactionType: 'DEBIT',
    timestamp: '2024-11-19T12:00:00',
    accountNumber: '101122334',
    description: 'Car fuel',
    name: 'William Moore',
    email: 'william.moore@example.com',
    phone: '+1011223344',
    position:10,
    view:''
  },
];

@Component({
  selector: 'app-list-transaction',
  standalone: true,
  imports: [MatCardModule, MatTableModule, MatIcon],
  templateUrl: './list-transaction.component.html',
  styleUrl: './list-transaction.component.scss'
})
export class ListTransactionComponent {
  constructor(private userService:UserConnexionService) {
  }
  @Output() transactionDetail = new EventEmitter<any>();
  roleUserConnected = this.userService.getRoleUser();

  displayedColumns: string[] = ['position','name', 'email', 'phone','view'];
  dataSource = ELEMENT_DATA;

  showDetails(element:any) {
    console.log(element)
    this.transactionDetail.emit(element)
  }
}
