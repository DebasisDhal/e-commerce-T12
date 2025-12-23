import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-home-page',
  imports: [CardModule,ButtonModule,DividerModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

}
