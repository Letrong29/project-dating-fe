import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
import {NewFeed} from "../../model/new-feed";
import {FormControl, FormGroup} from "@angular/forms";
import {finalize} from "rxjs/operators";
import {AngularFireStorage} from "@angular/fire/storage";

import {Post} from "../../model/post";
import {Router} from "@angular/router";



@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css']
})
export class DetailPostComponent implements OnInit {
 details: NewFeed;
 img: string[];
 arrayImg: any[]=[];
  linkUp:string ='';
 id= 1;
 formUpdate : FormGroup;
 modalInfo: NewFeed = {};

  constructor(private  service : UserService,
              private storage:AngularFireStorage,private router:Router) {
    this.service.getNewFeed(this.id).subscribe(data=>{
      this.details = data;
      console.log(this.details)
      this.img = this.details.media.split(",")
    },()=>{},()=>{
      this.formUpdate = new FormGroup({
        idPost: new FormControl(this.details.idPost),
        content: new FormControl(this.details.content),
        idUser: new FormControl(this.details.idUser)
      })
    })
  }

  ngOnInit(): void {
  }

  showMany(event: any) {
    this.arrayImg = event.target.files
    console.log(this.arrayImg)
  }

  async takeImg(){
    for (let i=0;i< this.arrayImg.length;i++){
      await this.createImg(this.arrayImg[i])
    }

  }

   createImg(imgIn: any){
     return new Promise((resolve,rejects)=>{
       const n = Date.now();
       const nameImg = `img/${n}`+ imgIn.name;
       const fileRef = this.storage.ref(nameImg);
       const task = this.storage.upload(nameImg, imgIn);
       task.snapshotChanges().pipe(finalize(()=>{
           fileRef.getDownloadURL().subscribe( url =>{
             this.formUpdate.patchValue(({media:url}))
             resolve(true)
             this.linkUp += (url+",");
           })
         })
       ).subscribe(()=>{})
     })
  }


  updatePost(){
    this.takeImg().then(()=>{
      if (this.linkUp == ""){
        this.formUpdate.value.media= this.details.media
      } else {
        this.formUpdate.value.media= this.linkUp
      }
      console.log(this.formUpdate.value)
      this.service.updatePost(this.formUpdate.value).subscribe(()=>{
           this.router.navigateByUrl("");
      });
    })
  }


  modalTakeInfo(details: NewFeed) {
      this.modalInfo = details;
    console.log(this.modalInfo)
  }

  onSubmit() {
    this.updatePost()
  }
}
