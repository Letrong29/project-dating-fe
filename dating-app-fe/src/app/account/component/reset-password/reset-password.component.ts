import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {ResetPasswordService} from "../../service/reset-password.service";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  idAccount: number;
  password: FormGroup;

  constructor(private resetPassword: ResetPasswordService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.password = new FormGroup({
      password: new FormControl('', [Validators.required])
    });
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.idAccount = +paramMap.get('idAccount');
      this.resetPassword.findByPassword(this.idAccount).subscribe(account => {
        this.password.patchValue(account);
      })
    })
  }

  ngOnInit(): void {

  }

}
