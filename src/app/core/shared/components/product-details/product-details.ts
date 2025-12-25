import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FakestoreApi } from '../../../api/fakestore-api';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule,RouterLink],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit{
selectedImage:any;
images:any;
  selectedData$!:Observable< any>;


constructor(private master:FakestoreApi, private route:ActivatedRoute){}

ngOnInit(): void {
  this.onDetailsData();
}

onDetailsData(){
  this.selectedData$ = this.route.queryParams.pipe(
    switchMap(params => {
      const pId = params['id'];
      return this.master.pDetais(pId);
    })
  );
}
}
