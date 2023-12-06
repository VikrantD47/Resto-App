import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css'],
})
export class ListRestoComponent implements OnInit {
  constructor(private resto: RestoService) {} 
  alert:boolean=false;
  collection :any= [];
  ngOnInit(): void {
    this.resto.getList().subscribe((data: any) => {
      console.log(data)
      this.collection = data;
    });
  }
  deleteResto(item:any){
    this.collection.splice(item-1,1);
    this.resto.deleteResto(item).subscribe((result)=>{
      console.log("result", result);
      this.alert=true;
    })
  }
  closeAlert(){
    this.alert=false
  }
}
