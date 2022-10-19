import {Component, OnInit} from '@angular/core';
import {User} from "../../model/user";
import {Hobbit} from "../../model/hobbit";
import {Post} from "../../model/post";
import {UserService} from "../../service/user.service";
import {HobbitService} from "../../service/hobbit.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {SendRequestService} from "../../../service/friend-service/send-request.service";
import {TypeUser} from "../../model/type-user";

@Component({
  selector: 'app-personal-page',
  templateUrl: './personal-page.component.html',
  styleUrls: ['./personal-page.component.css']
})
export class PersonalPageComponent implements OnInit {
  relationship: string;
  isOwn: boolean;
  myIdUser = 1;
  idUser: number;
  user: User;
  hobbitList: Hobbit[] = [];
  userAddressArr: string[] = [];

  constructor(private userService: UserService,
              private hobbitService: HobbitService,
              private sendRequestService: SendRequestService,
              private activatedRoute: ActivatedRoute) {

    this.activatedRoute.paramMap.subscribe((paraMap: ParamMap) => {
      this.idUser = +paraMap.get('id');
    })

    if (this.idUser == this.myIdUser) {
      this.isOwn = true;
      console.log('own: ' + this.isOwn)
    } else {
      this.sendRequestService.checkFriend(this.myIdUser, this.idUser).subscribe(result => {
        console.log(result)
        this.relationship = result;
      })

    }

  }

  ngOnInit(): void {

    this.userService.getUserById(this.idUser).subscribe((userDb) => {
      console.log(userDb)
      this.user = userDb;
      this.user.typeUser = {};
      this.user.typeUser.idTypeUser = userDb.idTypeUser;
      console.log(this.user)
      this.userAddressArr = this.user.address.split(',');
      this.user.address = this.userAddressArr[this.userAddressArr.length - 1]
    })
    this.hobbitService.getHobbitByIdUser(this.idUser).subscribe(hobbits => {
      this.hobbitList = hobbits;
      console.log(this.hobbitList)
    })


  }

  addRequest() {
    this.sendRequestService.addRequest(this.myIdUser, this.idUser).subscribe(() => {
      this.relationship = "Đã gửi lời mời kết bạn";
    }, err => {
      console.log(err)
    })
  }

  removeRequest() {
    this.sendRequestService.removeRequest(this.myIdUser, this.idUser).subscribe(() => {
      this.relationship = "Chưa có quan hệ";
    }, err => {
      console.log(err)
    })
  }
}
