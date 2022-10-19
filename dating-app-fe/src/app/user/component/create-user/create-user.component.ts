import {Component, Inject, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {Hobbit} from '../../model/hobbit';
import {HobbitService} from '../../../service/hobbit.service';
import {TargetService} from '../../../service/target.service';
import {Target} from '../../model/target';
import {formatDate} from '@angular/common';
import {UserService} from '../../../service/user.service';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  img: any = "";
  registerUser: FormGroup;

  hobbitList: Hobbit[] = [];

  targetList: Target[] = [];
  constructor(private hobbitService: HobbitService,
              private targetService: TargetService,
              private userService: UserService,
              @Inject(AngularFireStorage) private storage: AngularFireStorage
  ) {
    this.registerUser = new FormGroup({
      idUser: new  FormControl('22'),

      avatar: new FormControl(''),

      nameGroup: new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
      }),

      dateOfBirth: new FormControl(''),

      gender: new FormControl(''),

      address: new FormControl(''),

      job: new FormControl(''),

      married: new FormControl('')
    })
  }


  ngOnInit(): void {
    this.hobbitService.get().subscribe(next => {
      this.hobbitList = next;
    })

    this.targetService.get().subscribe(next => {
      this.targetList = next;
    })

  }

  save() {
    const nameImg = Date.now() + this.img.name;
    const fileRef = this.storage.ref(nameImg);
    this.storage.upload(nameImg, this.img).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          this.registerUser.patchValue({img: url});
          let user = this.registerUser.value;
          let firstName = this.registerUser.controls.nameGroup.get('firstName').value;
          let lastName = this.registerUser.controls.nameGroup.get('lastName').value;
          user.name = firstName + " " + lastName;
          user.avatar = url;
          this.userService.update(user).subscribe(() => {
          })
        })
      })
    ).subscribe()

  }

  showAvatar($event: any) {
      this.img = $event.target.files[0]
      console.log(this.img);
  }
}
