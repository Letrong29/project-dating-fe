import { Component, OnInit } from '@angular/core';
import {User} from "../../model/user";
import {UpdateAvatarService} from "../../service/update-avatar.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-update-status-active',
  templateUrl: './update-status-active.component.html',
  styleUrls: ['./update-status-active.component.css']
})
export class UpdateStatusActiveComponent implements OnInit {

  user: User;
  updateForm: FormGroup;

  constructor(private updateAvatarService: UpdateAvatarService) {

  }

  ngOnInit(): void {

  }

  updateActive(event) {
    this.updateForm = new FormGroup({
      idUser: new FormControl(),
      statusActive: new FormGroup({
        id: new FormControl(event)
      })
    })
    this.updateAvatarService.getUpdateActive(this.updateForm.value).subscribe(next => {
    })
  }

}
