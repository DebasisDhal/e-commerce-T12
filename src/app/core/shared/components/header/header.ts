import { Component, inject, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Toolbar } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButton } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FakestoreApi } from '../../../api/fakestore-api';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  imports: [Toolbar, ButtonModule, InputTextModule,RouterLink,CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit{


  ngOnInit(): void {
  
  }

    private master = inject(FakestoreApi);

  private readonly emptyCategories: string[] = [];

  pCategories = toSignal(
    this.master.allCategory(),
    { initialValue: this.emptyCategories }
  );
}
