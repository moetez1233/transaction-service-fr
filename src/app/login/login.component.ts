import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserConnexionService} from "../services/user-connexion.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  constructor(private fb:FormBuilder,private route:Router,private userService:UserConnexionService) {
  }
  showAlert:Boolean=false;
loginForm!:FormGroup;
  userSigned!:any;
  ngOnInit() {
    this.userSigned= this.userService.getData();

    this.loginForm = this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }
  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }

  login() {
    const userFiltred = this.userSigned.filter((u: { email: string; password: string; }) =>
      u.email === this.email?.value && u.password === this.password?.value )

    if(userFiltred.length>0){
      this.route.navigate(['/stackWaze'], {
        queryParams: { email: this.email?.value, role: userFiltred[0].role },
      });
    }else {
      this.showAlert=true;
    }



  }

}
