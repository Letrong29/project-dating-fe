import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
import {Post} from "../../model/post";
import {NewFeed} from "../../model/new-feed";
import {SuggestService} from "../../../service/request/suggest.service";
import {User} from "../../model/user";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  suggestList : User[];
  listShow : NewFeed[];
  size=4;
  myId = 1;
  constructor(private service: UserService,
              private suggestService:SuggestService) {
  }

  ngOnInit(): void {
    this.suggestService.getSuggestRequest(2).subscribe(suggest=>{
      this.suggestList = suggest;
    })
    this.service.getListPost(this.myId).subscribe(data=>{
      this.listShow = data;
      console.log(this.listShow)
    })
  }

  add(myId: any, idUser: number) {
    alert(myId);
    alert(idUser);
    this.suggestService.addRequest(myId, idUser)

  }
}
