import {Component, Inject, OnInit} from '@angular/core';
import {WebcamImage} from "ngx-webcam";
import {finalize} from "rxjs/operators";
import {UpdateAvatarService} from "../../service/update-avatar.service";
import {AngularFireStorage} from "@angular/fire/storage";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {Observable, Subject} from "rxjs";
import {TokenStorageService} from "../../../service/authentication/token-storage.service";

@Component({
  selector: 'app-update-avatar',
  templateUrl: './update-avatar.component.html',
  styleUrls: ['./update-avatar.component.css']
})
export class UpdateAvatarComponent implements OnInit {

  createForm: FormGroup;
  selectFile: any;
  imageSrc;
  url: string;
  stream: any = null;
  status: string;
  trigger: Subject<void> = new Subject<void>();
  previewImage: string = '';


  get $trigger(): Observable<void> {
    return this.trigger.asObservable();
  }

  constructor(private updateAvatarService: UpdateAvatarService, @Inject(AngularFireStorage) private storage: AngularFireStorage,
              private router: Router,private tokenStorageService:TokenStorageService) {
    this.createForm = new FormGroup({
      idUser: new FormControl(''),
      avatar: new FormControl('')
    });
  }

  ngOnInit(): void {

  }

  updateAvatar(event: any): void {
    if (event != null) {
      if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];
        const render = new FileReader();
        render.onload = e => this.imageSrc = render.result;
        render.readAsDataURL(file);
      }
    }
    this.selectFile = event.target.files[0];
  }

  cancelAvatarUpload() {
    this.imageSrc = null;
    this.selectFile = null;
    this.stream = null
    this.previewImage = null;
  }

  createAvatar() {
    const nameFile = Date.now() + this.selectFile.name;
    const fileRef = this.storage.ref(nameFile);
    this.storage.upload(nameFile, this.selectFile).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          console.log(url);
          this.createForm.patchValue(({avatar: url}));
          this.updateAvatarService.getUpdateAvatar(this.createForm.value).subscribe(next => {

            }, error => {
            }, () => {
              this.cancelAvatarUpload()
            }
          );
        });
      })
    ).subscribe();
  }

  checkWebcam() {
    navigator.mediaDevices.getUserMedia({
      video:
        true
    }).then((res) => {
      console.log('response', res);
      this.stream = res;
      this.status = 'Đang bật camera';
    }).catch(err => {
      console.log(err);
      this.status = err;
      if (err?.message === 'Permission denied') {
        this.status = 'Vui lòng bật camera';
      }
    });
  }

  snapshot(event: WebcamImage) {
    const image = event;
    const arr = image.imageAsDataUrl.split(",");
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    const file: File = new File([u8arr], 'test', {type: 'image/jpeg'});
    this.previewImage = event.imageAsDataUrl;
    this.selectFile = file
    // const img = new WebcamImage(event.imageAsDataUrl, 'image/jpeg' , event.imageData);
  }

  capture() {
    this.trigger.next();
    this.stream = null;
    this.imageSrc = null;
  }


}
