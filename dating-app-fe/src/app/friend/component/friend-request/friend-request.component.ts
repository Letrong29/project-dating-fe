import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../../../user/model/user";
import {FriendService} from "../../friend-service/friend-service.service";

@Component({
  selector: 'app-friend-request',
  templateUrl: './friend-request.component.html',
  styleUrls: ['./friend-request.component.css']
})
export class FriendRequestComponent implements OnInit {
  myId: number = 3;
  requestList: User[];

  constructor(private friendService: FriendService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.friendService.getRequest(1).subscribe(data => {
      this.requestList = data;
      console.log(typeof this.requestList[5].gender);
    })
  }


  accept(myId: number, idFriend: number) {
    this.friendService.accept(myId, idFriend).subscribe(n => {

      this.friendService.getRequest(1).subscribe(data => {
        this.requestList = data;
      })
    })
  }

  denied(myId: number, idFriend: number) {
    this.friendService.denied(myId, idFriend).subscribe(n => {

      this.friendService.getRequest(1).subscribe(data => {
        this.requestList = data;
      })
    })
  }
}
