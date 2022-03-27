import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UsersService} from '../../../../services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  data:any
  id:any

  constructor(private route:ActivatedRoute,
    private usersService:UsersService) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.getOneUser();
  }

  getOneUser(){
    this.usersService.getOneUser(this.id).subscribe(data=>{
      this.data=data;
      console.log(this.data)
    })
  }
 


}