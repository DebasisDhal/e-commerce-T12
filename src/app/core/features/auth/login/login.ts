import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputText } from "primeng/inputtext";
import { ButtonDirective } from "primeng/button";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { isValidDate } from 'rxjs/internal/util/isDate';
import { validate } from '@angular/forms/signals';
import { MessageModule } from 'primeng/message';
import { Auth } from '../auth';
import { Storage } from '../storage';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';

@Component({
  selector: 'app-login',
  imports: [CardModule, InputText, ButtonDirective,ReactiveFormsModule,MessageModule,Toast],
  providers:[MessageService],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit{

  loginForm!:FormGroup;
  formSubmited:boolean=false;
  
  constructor(private fb:FormBuilder,private auth:Auth,private storge:Storage,private route:Router,private messageService: MessageService){}

  ngOnInit(): void {
    this.onLogin();
  }


  onLogin(){

    this.loginForm = this.fb.group({
      userName:['',Validators.required],
      password: ['',Validators.required]
    })
  }


  onSubmit(){
    console.log(this.loginForm.value);
    this.formSubmited =true;
    if(this.loginForm.invalid){
      return;
    }
    const payload = {
      username: this.loginForm.value.userName,
      password: this.loginForm.value.password
    };
    
    this.auth.onLogin(payload).subscribe({
      next:(res:any)=>{
        this.showSuccess();
        this.storge.setToken(res);
        this.route.navigate(['home'])

      },
      error: (err) =>{
        this.showWarn();
      }
    })

     this.loginForm.reset();
      this.formSubmited = false;
    console.log(this.loginForm.value);


  
  }

  isInvalid(controlName:string){
    const control = this.loginForm.get(controlName);
    return control?.invalid && (control.touched || this.formSubmited)
  }
    showWarn() {
        this.messageService.add({ severity: 'warn', summary: 'Login Failed', detail: 'Wrong Credential' });
    }
      showSuccess() {
        this.messageService.add({ severity: 'success', summary: 'Login Success', detail: 'Welcome' });
    }
}
