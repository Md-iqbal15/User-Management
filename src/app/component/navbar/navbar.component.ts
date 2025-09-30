import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
 
  ngOnInit(): void {
   
  }
  route=inject(Router)
funLogout(){
this.route.navigate(["login"])
}
}
