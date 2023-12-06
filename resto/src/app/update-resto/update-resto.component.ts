import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestoService } from '../resto.service';

interface Restaurant {
  name: string;
  address: string;
}

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {
  alert: boolean = false;

  editresto: FormGroup;

  constructor(private router: ActivatedRoute, private resto: RestoService) {
    this.editresto = new FormGroup({
      name: new FormControl(''),
      address: new FormControl(''),
      email: new FormControl('')
    });
  }

  ngOnInit(): void {
    console.log(this.router.snapshot.params['id']);
    this.resto.gettResto(this.router.snapshot.params['id']).subscribe((result:any) => {
      this.editresto = new FormGroup({
        name: new FormControl(result.name),
        address: new FormControl(result.address),
        email: new FormControl(result.email)
      });
    });
  }

  updateresto(){
    // console.log(this.addresto.value);
    this.resto.putResto(this.router.snapshot.params['id'] ,this.editresto.value).subscribe((result)=>{
      this.alert=true;
    })
    this.editresto.reset({})
  }

  closeAlert(){
    this.alert=false
  }
}

