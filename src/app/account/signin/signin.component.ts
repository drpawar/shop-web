import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;
  errorMsg:string;
  request

  constructor(private http:HttpClient, private router:Router) { 
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
   }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.loginForm);
    this.http.post(environment.baseUrl + "/login", this.loginForm.value).subscribe((res:any)=> {
      console.log(res);
      if(res.error) {
        return this.errorMsg = res.error;
      }
      
      this.router.navigate(['/'])
    },
    error => {
      console.log(error)
    })
  }

}
