import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserConnexionService {

  private dataSource = new BehaviorSubject<any[]>([]); // Initialize with an empty array
  data$ = this.dataSource.asObservable(); // Observable for components to subscribe to

  private userRole = new BehaviorSubject<String>("");

  constructor() {}

getRoleUser(){
    return this.userRole.value
}
updateRole(role:String){
    this.userRole.next(role);
}
  // Get the current data
  getData(): any[] {
    return this.dataSource.value;
  }

  // Add an item to the array
  addItem(item: any): void {
    const currentData = this.dataSource.value;
    this.dataSource.next([...currentData, item]);
  }
}
