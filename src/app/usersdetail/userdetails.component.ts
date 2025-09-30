import { Component, OnDestroy, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';


import { addUserData, deleteUserData, getUserRecord, loadUserDATA, updateUserData } from '../store/User.Action';
import { getUserDataList, selectUserRecord } from '../store/User.Selector';
import { UserService } from '../user.service';
import { NavbarComponent } from '../component/navbar/navbar.component';


@Component({
  selector: 'app-userdetails',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,NavbarComponent],
  templateUrl: './userdetails.component.html',
  styleUrl: './userdetails.component.css'
})
export class UserdetailsComponent implements OnInit,OnDestroy{
displayDetails:any
globalNuber!:number

editUserdetail:any
regForm!:FormGroup
updateBtn:boolean=false
submitBtn:boolean=true
  
  constructor(private store:Store,private userser:UserService){

  }

  ngOnInit(): void {
  
this.regForm=new FormGroup({
 
  username:new FormControl('',[Validators.required]),
  email:new FormControl('',[Validators.required]),
  jobrole:new FormControl('',[Validators.required])
})

    this.getUserDetails()
    
  }
  Register(){
   
    
    let data=this.regForm.value

    data.id=JSON.stringify(Math.floor((Math.random() * 100) + 1));
   
    

    this.store.dispatch(addUserData({data:data}))
    this.regForm.reset()

    
  }
  getUserDetails(){


this.store.dispatch(loadUserDATA())
this.store.select(getUserDataList).subscribe(resp=>{
 
  this.displayDetails=resp
})

  }

  updateData(id?:any){
  if(id){
    
    this.store.dispatch(getUserRecord({id:id}))
    this.store.select(selectUserRecord).subscribe(respdata=>{
      this.editUserdetail=respdata
      this.regForm.patchValue(respdata)
      this.updateBtn=true
      this.submitBtn=false
    })
  }else if(this.regForm.value){

    let data =this.regForm.value
 data.id=this.editUserdetail.id


this.store.dispatch(updateUserData({data:data}))
this.regForm.reset()
this.submitBtn=true
this.updateBtn=false
  }
  }


  deleteData(id:any){

if(confirm('Are you sure')){
  this.store.dispatch(deleteUserData({id:id}))
}

  }
  ngOnDestroy(): void {
   
  }


}
