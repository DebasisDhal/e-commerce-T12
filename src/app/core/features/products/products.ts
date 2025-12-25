import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FakestoreApi } from '../../api/fakestore-api';
import { CardModule } from 'primeng/card';
import { async, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CardModule, CommonModule, RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit{
  products$!: Observable<any[]>;
  

  constructor(private route:ActivatedRoute, private master: FakestoreApi){}
  queryData = '';
ngOnInit(): void {
 
   this.onDataList();
}

onDataList(){
  this.route.queryParams.subscribe(params =>{
    this.queryData = params['category'];
    this.products$ = this.master.baseOnCategory(this.queryData);
   });
}

}
