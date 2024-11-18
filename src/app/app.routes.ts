import { Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {SidebareComponent} from "./sidebare/sidebare.component";
import {DashbordComponent} from "./dashbord/dashbord.component";
import {AddTransactionComponent} from "./add-transaction/add-transaction.component";
import {ListUsersComponent} from "./list-users/list-users.component";
import {ListTransactionComponent} from "./list-transaction/list-transaction.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'transactions', component: ListTransactionComponent },
  { path: 'addTransaction', component: AddTransactionComponent },
  { path: 'dashbord', component: DashbordComponent },
  { path: 'users', component: ListUsersComponent },
  { path: 'stackWaze', component: HomeComponent }
];
