import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {


  public signupForm !: FormGroup;
  constructor( private formBuilder : FormBuilder,private http : HttpClient, private router : Router){}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullname : [''],
      email : [''],
      password : [''],
      mobile : ['']
    })
  }


  signUp(){
    this.http.post<any>("http://localhost:3000/signupUsers",this.signupForm.value)
    .subscribe(res=>{
      alert("Signup Successfull");
      this.signupForm.reset();
      this.router.navigate(["login"]);
    },err=>{
      alert("Something went wrong");
    })  
  }

  // signUp(){
  //   if(this.signupForm){
  //     this.http.post<any>("https://localhost:3000/signupUsers",this.signupForm.value)
  //     alert("Signup Successfull");
  //     this.signupForm.reset();
  //     this.router.navigate(["login"]);
  //   }else{
  //     alert("Something went wrong");
  //   }
  // }
}
