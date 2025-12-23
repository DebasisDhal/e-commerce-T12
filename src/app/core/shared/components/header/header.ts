import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Toolbar } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButton } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [Toolbar, ButtonModule, InputTextModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit{


  ngOnInit(): void {
  
  }
}
