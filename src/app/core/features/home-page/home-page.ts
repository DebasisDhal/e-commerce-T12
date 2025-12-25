import { Component, inject, OnInit, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { FakestoreApi } from '../../api/fakestore-api';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home-page',
  imports: [CardModule, ButtonModule, DividerModule, CommonModule, RouterLink],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {


  private master = inject(FakestoreApi);

  private readonly emptyCategories: string[] = [];

  pCategories = toSignal(
    this.master.allCategory(),
    { initialValue: this.emptyCategories }
  );
}
  