import {Component, OnInit} from '@angular/core';
<<<<<<< HEAD
import {Router} from "@angular/router";
import {User} from "../../../user/model/user";
import {FriendService} from "../../friend-service/friend-service.service";
import {TokenStorageService} from "../../../service/authentication/token-storage.service";
import {AuthenticationService} from "../../../service/authentication/authentication.service";
=======
import {FriendService} from "../../../service/friend-service/friend.service";
import {Router} from "@angular/router";
import {User} from "../../../user/model/user";
>>>>>>> 837a7259821805991205a53ebe16b717b4a82283

@Component({
  selector: 'app-friend-request',
  templateUrl: './friend-request.component.html',
  styleUrls: ['./friend-request.component.css']
})
export class FriendRequestComponent implements OnInit {
<<<<<<< HEAD
  myIdAccount: number;
  myId: number ;
  requestList: User[];

user: User
  constructor(private friendService: FriendService,
              private router: Router,
              private token: TokenStorageService,
              private  auth: AuthenticationService) {
    this.myIdAccount = this.token.getUser().idAccount;
    this.auth.getUserByAccount(this.myIdAccount).subscribe(data=>{
      this.user = data
      this.myId = this.user.idUser;},e=>{},()=> {
      this.friendService.getRequest(this.myId).subscribe(data => {
        this.requestList = data;
      })
    })
  }

  ngOnInit(): void {

=======
  myId:number = 1;
  requestList: User[];

  constructor(private friendService: FriendService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.friendService.getRequest(1).subscribe(data => {
      this.requestList = data;
      console.log(typeof this.requestList[5].gender);
    })
>>>>>>> 837a7259821805991205a53ebe16b717b4a82283
  }


  accept(myId: number, idFriend: number) {
<<<<<<< HEAD
    this.friendService.accept(myId, idFriend).subscribe(n => {

      this.friendService.getRequest(this.myId).subscribe(data => {
=======
    this.friendService.accept(myId,idFriend).subscribe(n=>{

      this.friendService.getRequest(1).subscribe(data => {
>>>>>>> 837a7259821805991205a53ebe16b717b4a82283
        this.requestList = data;
      })
    })
  }

  denied(myId: number, idFriend: number) {
<<<<<<< HEAD
    this.friendService.denied(myId, idFriend).subscribe(n => {

      this.friendService.getRequest(this.myId).subscribe(data => {
=======
    this.friendService.denied(myId,idFriend).subscribe(n=>{

      this.friendService.getRequest(1).subscribe(data => {
>>>>>>> 837a7259821805991205a53ebe16b717b4a82283
        this.requestList = data;
      })
    })
  }
}
