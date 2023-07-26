import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [
  ]
})
export class LoginPageComponent implements OnInit {

  constructor(private authService:AuthService, 
      private router:Router
    ) { 

  }

  ngOnInit(): void {
  }

  onLogin():void {
    this.authService.login('criscahu@hotmail.com','123456')
    .subscribe(User=>{
      this.router.navigate(['/']);
    });
  }

}
