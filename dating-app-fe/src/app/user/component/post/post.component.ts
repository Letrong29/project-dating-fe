import { Component, OnInit } from '@angular/core';
import {User} from "../../model/user";
import {NewFeed} from "../../model/new-feed";
import {UserServiceService} from "../../service/user-service.service";
import {FriendService} from "../../service/friend.service";
import {SuggestService} from "../../service/suggest.service";


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  suggestList : User[];
  listShow : NewFeed[]=[];
  id ;
  constructor(private service: UserServiceService,
              private friendService: FriendService,
              private suggestService : SuggestService ) {
  }

  ngOnInit(): void {
    this.suggestService.getSuggestRequest(2).subscribe(suggest=>{
      this.suggestList = suggest;
    })

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

  add(myId: any, idUser: number) {
    alert(myId);
    alert(idUser);
    this.suggestService.addRequest(myId, idUser)

  }

}
