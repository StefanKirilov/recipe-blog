import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../user/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  checkElement :any;

  constructor(private userService: UserService, private router:Router, private elRef: ElementRef){}

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/home']);
  }

  uncheck(event: any): void {
    this.checkElement = document.querySelector('#check');
    this.checkElement.checked = false;

  }
}
