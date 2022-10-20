import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
import {NewFeed} from "../../model/new-feed";
import {User} from "../../model/user";
import {FriendService} from "../../service/friend-request/friend.service";



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  suggestList : User[];
  listShow : NewFeed[]=[];
  id = 1;
  constructor(private service: UserService,
              private friendService:FriendService) {
  }

  ngOnInit(): void {
    this.friendService.getSuggestRequest(2).subscribe(suggest=>{
      this.suggestList = suggest;
    })
    this.service.getListPost(this.id).subscribe(data=>{
      console.log(data)
      this.listShow = data;

      for (let i = 0; i <this.listShow.length-1 ; i++) {
        this.listShow[i].mediaArr= this.listShow[i].media.split(",")
        if(this.listShow[i].mediaArr.length>1){
          this.listShow[i].mediaArr.pop()
        }
      }
      console.log(this.listShow)

    })
  }

}
