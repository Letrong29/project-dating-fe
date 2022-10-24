import {Component, OnInit} from '@angular/core';
import {FriendListService} from "../../friend-service/friend-list.service";
import {User} from "../../../user/model/user";
import {ToastrService} from "ngx-toastr";
import {FormControl, FormGroup} from "@angular/forms";
import {TokenStorageService} from "../../../service/authentication/token-storage.service";
import {AuthenticationService} from "../../../service/authentication/authentication.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-friendlist',
  templateUrl: './friendlist.component.html',
  styleUrls: ['./friendlist.component.css']
})
export class FriendlistComponent implements OnInit {
  listFriend: any;
  page: number = 0;
  idArr: number [] = [];
  check: any[] = [];
  size = 4;
  myIdUser;
  informationDelete: User[] = [];
  friendDeleted: User;
  name = '';
  account: any;
  searchForm = new FormGroup({
    name: new FormControl('')
  });


  constructor(private friendListService: FriendListService, private toast: ToastrService,
              private tokens: TokenStorageService, private auth: AuthenticationService) {


  }

  ngOnInit(): void {
    this.auth.getUserByAccount(this.tokens.getUser().idAccount).subscribe(data => {
      this.myIdUser = data.idUser;
      console.log(this.myIdUser)
      this.getAll(this.size);
    })

  }

  getAll(size: number) {

    return this.friendListService.getFriendList(this.myIdUser, this.page, this.name, size).subscribe(n => {
      if (n === null) {
        this.listFriend = [];
        this.toast.warning("Không có bạn bè", "Chú ý")
      } else {
        this.listFriend = n.content;
      }
      console.log(n)
    })
  }

  deleteFriendList() {

    Swal.fire({
      title: 'Bạn có muốn xoá không?',
      text: "Tiến trình không thể hoàn tác!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Đồng ý!',
      cancelButtonText: 'Từ chối'
    }).then((result) => {
      if (result.isConfirmed) {
        const id: number[] = [];
        for (const argument of this.informationDelete) {
          id.push(argument.idUser);
          console.log(id)
        }
        if (id.length > 0) {
          this.friendListService.deleteFriendList(this.myIdUser, id).subscribe(value => {
            this.name = '';
            this.getAll(this.size);
            Swal.fire(
              'Đã xoá!',
              'Đã xoá thành công.',
              'success'
            )
          }, error => {
            this.toast.error("Xóa bạn bè khỏi danh sách không thành công", "Xóa thất bại")
          })
        }

      }
    })

  }

  blockFriendList() {
    Swal.fire({
      title: 'Bạn có chặn tài khoản đã chọn không?',
      text: "Tiến trình không thể hoàn tác!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Đồng ý!',
      cancelButtonText: 'Từ chối'
    }).then((result) => {
      if (result.isConfirmed) {
        const id: number[] = [];
        for (const argument of this.informationDelete) {
          id.push(argument.idUser);
          console.log(id)
        }
        if (id.length > 0) {
          this.friendListService.blockFriendList(1, id).subscribe(value => {
            this.name = '';
            this.getAll(this.size);
            Swal.fire(
              'Đã chặn!',
              'Đă chặn xem bài đăng thành công.',
              'success'
            )
          }, error => {
            // alert("chan thanh cong")
            this.toast.error("Chặn bạn bè thất bại rồi", "Chặn thất bại")
          })
        }

      }
    })

  }


  checkbox(listFriend: number) {
    for (const item of this.informationDelete) {
      if (item.idUser === listFriend) {
        return true;
      }
    }
    return false;
  }

  checkList(listFriend: User) {
    this.friendDeleted = this.informationDelete.find(deleteObject => deleteObject.idUser === listFriend.idUser);
    if (this.friendDeleted) {
      this.informationDelete = this.informationDelete.filter(friendDelete => friendDelete.idUser !== this.friendDeleted.idUser);
    } else {
      this.informationDelete.push(listFriend)
    }
  }

  more() {
    this.size += 4;
    this.getAll(this.size);
  }


  search() {
    this.size = 4;
    this.name = this.searchForm.value.name.trim();
    this.getAll(this.size)
  }
}
