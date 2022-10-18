import { Component, OnInit } from '@angular/core';
import {User} from "../../model/user";
import {Hobbit} from "../../model/hobbit";
import {Post} from "../../model/post";
import {UserService} from "../../service/user.service";
import {HobbitService} from "../../service/hobbit.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {SendRequestService} from "../../../service/friend-service/send-request.service";

@Component({
  selector: 'app-personal-page',
  templateUrl: './personal-page.component.html',
  styleUrls: ['./personal-page.component.css']
})
export class PersonalPageComponent implements OnInit {
  relationship;
  isOwn:boolean;
  myIdUser =1;
  idUser:number;
  user:User={};
  hobbitList:Hobbit[] = [];
  postList:Post[] = [];
  userAddressArr:string[] = [];
  constructor(private userService:UserService,
              private hobbitService:HobbitService,
              // private postService: PostService,
              private sendRequestService :SendRequestService,
              private activatedRoute:ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paraMap:ParamMap)=>{
      this.idUser= +paraMap.get('id');
    })
    if (this.idUser==this.myIdUser) {
      this.isOwn = true;
      console.log('own: ' +this.isOwn)
    } else {
      this.sendRequestService.checkFriend(this.idUser,this.myIdUser).subscribe(result=>{
        console.log(result )



        this.relationship = result;
        // console.log(this.relationship)
      })
    }

  }

  ngOnInit(): void {
    this.userService.getUserById(this.idUser).subscribe((userDb)=>{
      console.log(userDb)
      this.user = userDb;
      this.userAddressArr= this.user.address.split(',');
      this.user.address = this.userAddressArr[this.userAddressArr.length -1]
    })
    this.hobbitService.getHobbitByIdUser(this.idUser).subscribe(hobbits=>{
      this.hobbitList = hobbits;
      console.log(this.hobbitList)
    })



  }

  addRequest() {
    this.sendRequestService.addRequest(this.myIdUser, this.idUser).subscribe((next)=>{
      console.log(next)
      this.relationship = 51;

    }, err => {
      console.log(err)
    })
  }
}
