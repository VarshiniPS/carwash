import { Component, OnInit } from '@angular/core';
import { OrderService} from '../order.service';
import { ServiceplanService} from '../serviceplan.service';
import { PersonaldetailService } from '../personaldetail.service';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
public formGroup:FormGroup;
public cartype=''; 
public serviceplanchosen='';
public personaldetails:any='';

  constructor(private orderservice: OrderService,private serviceplan:ServiceplanService,private personaldetail:PersonaldetailService ) { }

  ngOnInit(): void {
    this.orderservice.on<any>().subscribe(data=>{
        this.cartype=data;
        //this.serviceplan=data;
      });
      this.serviceplan.on<any>().subscribe(data=>{
        this.serviceplanchosen=data;
      });
      this.personaldetail.on<any>().subscribe(data=>{
        this.personaldetails=data;
      });
      this.initForm();
  }
  initForm(){
    this.formGroup=new FormGroup({
      email:new FormControl(this.formGroup),
      name:new FormControl('')
    });
  }
  

orderplaced(){
  alert('order placed');
console.log(this.formGroup.value);
}
}
