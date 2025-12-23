import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Divider } from 'primeng/divider';

@Component({
  selector: 'app-footer',
  imports: [CardModule,Divider],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

}
