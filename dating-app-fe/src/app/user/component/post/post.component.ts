import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
import {Post} from "../../model/post";
import {NewFeed} from "../../model/new-feed";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  listShow : NewFeed[];
   id = 1;
  constructor(private service: UserService) {
  }

  ngOnInit(): void {
    this.service.getListPost(this.id).subscribe(data=>{
      this.listShow = data;
      console.log(this.listShow)
    })
  }

}
