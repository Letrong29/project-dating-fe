import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ResetPasswordService} from "../../service/reset-password.service";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  jwtRequestForm: FormGroup;
  constructor(private route: ActivatedRoute,
              private resetPasswordService: ResetPasswordService,
              private toastr: ToastrService,
              private router: Router,
              private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute) {
    this.jwtRequestForm = new FormGroup({
      newPassword: new FormControl(''),
      password: new FormControl(''),
      // verificationCode: new FormControl(''),
    })
  }


  validationMessages = {
    password: [
      {type: 'required', message: 'Trường này không được để trống!'},
      {type: 'minlength', message: 'Mật khẩu cần nhiều hơn 8 ký tự'},
      {type: 'maxlength', message: 'Mật khẩu chỉ được ít hơn 32 ký tự'},
    ]
  };


  ngOnInit(): void {
    // this.jwtRequestForm = this.formBuilder.group({
    //   newPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(32)]],
    //   repeatNewPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(32)]],
    // });
    // this.route.queryParams.subscribe(params => {
    //   const password = params.password;
    //   if (password == null) {
    //     this.isSuccessful = false;
    //   }
    // });
  }

  // onSubmit() {
  //   if (this.formGroup.value.newPassword !== '' && this.formGroup.value.repeatNewPassword !== '') {
  //     if (this.formGroup.value.newPassword === this.formGroup.value.repeatNewPassword) {
  //       this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
  //         this.idAccount = paramMap.get('idAccount');
  //       });
  //       this.resetPasswordService.doResetPassword(this.formGroup.value.newPassword, this.idAccount).subscribe(data => {
  //         this.toastr.success('Mật khẩu đã được thay đổi!', 'Thành công');
  //         this.router.navigateByUrl('/login');
  //       });
  //     } else {
  //       this.toastr.error('Trường nhập lại mật khẩu và mật khẩu không giống nhau!', 'Lỗi: ', {
  //         timeOut: 3500,
  //         extendedTimeOut: 1500
  //       });
  //       this.isSubmited = false;
  //     }
  //   }
  // }

  onSubmit() {
    const a = this.jwtRequestForm.value;
    this.resetPasswordService.doResetPassword( a, 9).subscribe(() => {
      this.jwtRequestForm.reset();
      this.toastr.success('Đổi mật khẩu thành công', 'Thông báo');
    }, () => {
      this.toastr.error('Đổi mật khẩu thất bại', 'Thông báo');
    });
  }
}
