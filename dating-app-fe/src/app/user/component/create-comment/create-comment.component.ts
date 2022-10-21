import {Component, OnInit} from '@angular/core';
import {Post} from "../../model/post";
import {FormControl, FormGroup} from "@angular/forms";
import {User} from "../../model/user";
import {Router} from "@angular/router";
import {CommentService} from "../../service/comment.service";

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent implements OnInit {

  post: Post[];
  createForm: FormGroup = null;
  user: User;

  constructor(private commentService: CommentService, private router: Router) {

  }

  ngOnInit(): void {

  }

  createComment() {
    console.log(this.createForm.value)
    this.commentService.getCreate(this.createForm.value).subscribe(n => {

    }, err => {

    }, () => {

    })
  }

  addComment(idPost: number) {
    this.createForm = new FormGroup({
      idComment: new FormControl(''),
      content: new FormControl(),
      user: new FormGroup({
        idUser: new FormControl(4)
      }),
      post: new FormGroup({
        idPost: new FormControl(idPost)
      })
    })
  }
}
