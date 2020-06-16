import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signupForm: FormGroup;
  errorMsg:string;

  constructor(private http:HttpClient, private router:Router) { 
    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      passwordverify: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.signupForm);
    this.http.post(environment.baseUrl + "/signup", this.signupForm.value).subscribe((res:any)=> {
      console.log(res);
      if(res.error) {
        return this.errorMsg = res.error;
      }
      this.router.navigate(['/login'])
    },
    error => {
      console.log(error)
    })
  }

}
