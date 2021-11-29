import { Component, OnInit } from '@angular/core';
import {WineService} from '../shared/wine.service';
import { NgForm } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {Wine} from '../shared/wine.model'
declare var M: any;
@Component({
  selector: 'app-wine',
  templateUrl: './wine.component.html',
  styleUrls: ['./wine.component.css'],
  providers:[WineService]
})
export class WineComponent implements OnInit {

  constructor(public wineService:WineService) {}

  ngOnInit(): void {
    this.resetForm();
    this.refreshWineList(); 
  }

 resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.wineService.selectedWine = {
      _id: "",
      extract: "",
      year: "",
      price: "",
      country: ""
    }
  }

  onSubmit(form: NgForm){
    if(form.value._id==""){
    this.wineService.postWine(form.value).subscribe((res)=>{
      this.resetForm(form);
      this.refreshWineList();
       M.toast({ html: 'Saved successfully', classes: 'rounded' });
    }); 
    }
    else{
      this.wineService.putWine(form.value).subscribe((res)=>{
      this.resetForm(form);
      this.refreshWineList();
       M.toast({ html: 'Updated successfully', classes: 'rounded' });
    }); 
    }
  }
  refreshWineList(){
    this.wineService.getWineList().subscribe((res)=>{
      this.wineService.wines=res as Wine[];
    })
  }
  onEdit(wine:Wine){
    this.wineService.selectedWine=wine;
  }
  onDelete(_id:string,form:NgForm){
    if(confirm('Are you sure you want to delete this record?')==true){
      this.wineService.deleteWine(_id).subscribe((res)=>{
        this.refreshWineList();
        this.resetForm();
          M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }
}
