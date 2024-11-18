import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {Observable} from "rxjs";
import {UserConnexionService} from "../services/user-connexion.service";
@Component({
  selector: 'app-sing-up',
  standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
      MatSelectModule,
      MatFormFieldModule, MatInputModule,
    ],
  templateUrl: './sing-up.component.html',
  styleUrl: './sing-up.component.scss'
})
export class SingUpComponent implements OnInit{
  constructor(private fb:FormBuilder,private route:Router,private userService:UserConnexionService) {
  }
  logUpForm!:FormGroup
  ngOnInit() {
    this.logUpForm = this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required],
      role:['',Validators.required],
    })
  }

  signUp() {
    console.log(this.logUpForm.value)
    this.userService.addItem(this.logUpForm.value)
    this.route.navigateByUrl('/login')
  }

}
