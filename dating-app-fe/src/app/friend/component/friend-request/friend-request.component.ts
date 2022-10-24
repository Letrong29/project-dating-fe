import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../../../user/model/user";
import {FriendService} from "../../friend-service/friend-service.service";
import {TokenStorageService} from "../../../service/authentication/token-storage.service";

@Component({
  selector: 'app-friend-request',
  templateUrl: './friend-request.component.html',
  styleUrls: ['./friend-request.component.css']
})
export class FriendRequestComponent implements OnInit {
  myId: number ;
  requestList: User[];

  constructor(private friendService: FriendService,
              private router: Router,
              private token: TokenStorageService) {
    this.myId = this.token.getUser().idAccount;

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
