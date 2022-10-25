import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../../../user/model/user";
import {FriendService} from "../../friend-service/friend-service.service";
import {TokenStorageService} from "../../../service/authentication/token-storage.service";
import {AuthenticationService} from "../../../service/authentication/authentication.service";

@Component({
  selector: 'app-friend-request',
  templateUrl: './friend-request.component.html',
  styleUrls: ['./friend-request.component.css']
})
export class FriendRequestComponent implements OnInit {
  myId: number ;
  requestList: User[];
user: User
  constructor(private friendService: FriendService,
              private router: Router,
              private token: TokenStorageService,
              private  auth: AuthenticationService) {
    this.myId = this.token.getUser().idAccount;
    this.auth.getUserByAccount(this.myId).subscribe(data=>{
      this.user = data
      this.myId = data.idUser;})

  }

  ngOnInit(): void {
    this.friendService.getRequest(this.myId).subscribe(data => {
      this.requestList = data;

    })
  }


  accept(myId: number, idFriend: number) {
    this.friendService.accept(myId, idFriend).subscribe(n => {

      this.friendService.getRequest(this.myId).subscribe(data => {
        this.requestList = data;
      })
    })
  }

  denied(myId: number, idFriend: number) {
    this.friendService.denied(myId, idFriend).subscribe(n => {

      this.friendService.getRequest(this.myId).subscribe(data => {
        this.requestList = data;
      })
    })
  }
}
