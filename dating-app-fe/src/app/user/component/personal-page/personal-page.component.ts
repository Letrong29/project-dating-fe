import {Component, Inject, OnInit} from '@angular/core';
import {User} from "../../model/user";
import {Hobbit} from "../../model/hobbit";
import {UserService} from "../../service/user.service";
import {HobbitService} from "../../service/hobbit.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {SendRequestService} from "../../../service/friend-service/send-request.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {finalize} from "rxjs/operators";
import {AngularFireStorage} from "@angular/fire/storage";
import {PostService} from "../../service/post.service";

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
  postCreate : FormGroup;
  fileList: any = "";
  links: any[] = [];
  submitter = false;

  constructor(private userService: UserService,
              private hobbitService: HobbitService,
              private sendRequestService: SendRequestService,
              private activatedRoute: ActivatedRoute,
              @Inject(AngularFireStorage) private storage: AngularFireStorage,
              private postService: PostService) {

    this.activatedRoute.paramMap.subscribe((paraMap: ParamMap) => {
      this.idUser = +paraMap.get('id');
    })

    if (this.idUser == this.myIdUser) {
      this.isOwn = true;
      console.log('own: ' + this.isOwn)
    } else {
      this.sendRequestService.checkFriend(this.myIdUser, this.idUser).subscribe(result => {
        console.log('dfvfdv' +result)
        this.relationship = result;
      })
    }

    this.postCreate = new FormGroup({
      idPost : new FormControl(""),
      content: new FormControl("",[Validators.required]),
      media: new FormControl(""),
      user: new FormGroup({
        idUser: new FormControl(this.myIdUser)
      })
    })
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

  show(event: any) {
    this.links = event.target.files;
    console.log(this.links)
  }

  uploadFile(img: any) {
    return new Promise((resolve, reject) => {
      const nameImg = Date.now() + img.name;
      const fileRef = this.storage.ref(nameImg);
      this.storage.upload(nameImg, img).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            this.postCreate.patchValue({img: url});
            resolve(true)
            this.fileList += url + ",";
          });
        })
      ).subscribe()
    });
  }

  async handleFiles(){
    for (let i = 0 ; i < this.links.length ; i++)
    {
      await this.uploadFile(this.links[i])
    }
  }

  savePost() {
    this.submitter = true;
    this.handleFiles().then(() => {
      this.postCreate.value.media = this.fileList
      this.postService.create(this.postCreate.value).subscribe();
    })
  }
}
