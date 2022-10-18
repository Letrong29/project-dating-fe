import {Component, OnInit} from '@angular/core';
import {FriendListService} from "../../../service/friend-service/friend-list.service";
import {User} from "../../../user/model/user";

@Component({
  selector: 'app-friendlist',
  templateUrl: './friendlist.component.html',
  styleUrls: ['./friendlist.component.css']
})
export class FriendlistComponent implements OnInit {
  listFriend: any;

  constructor(private friendListService: FriendListService) {
  }

  ngOnInit(): void {
    this.friendListService.getFriendList(1,'').subscribe(n => {
      this.listFriend = n.content;
      console.log(n.content)
    })


  }
}
