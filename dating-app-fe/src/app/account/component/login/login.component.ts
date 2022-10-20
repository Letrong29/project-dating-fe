import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../../service/authentication/authentication.service";
import {Router} from "@angular/router";
import {TokenStorageService} from "../../../service/authentication/token-storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(12), Validators.maxLength(40)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]),
    remember: new FormControl()
  });
  username: string;
  roles: string[] = [];
  messageError: string;
  checkLogin: boolean = false ;

  constructor(private authenticationService: AuthenticationService,
              private tokenStorageService: TokenStorageService,
              private router: Router) {


  }

  ngOnInit(): void {
    if (this.tokenStorageService.getToken()) {
      this.authenticationService.isLoggedIn = true;
      this.checkLogin = true;
      this.roles = this.tokenStorageService.getUser().roles;
      this.username = this.tokenStorageService.getUser().username;
    }
    if(this.checkLogin) {
      this.router.navigateByUrl('/share/list')
    }
  }

  loginAccount() {
    if (this.loginForm.valid) {
      let username = this.loginForm.value.username;
      let password = this.loginForm.value.password;
      this.authenticationService.login(username, password).subscribe(next => {
        if(this.loginForm.value.remember) {
          this.tokenStorageService.saveTokenLocal(next.accessToken);
          this.tokenStorageService.saveUserLocal(next);
        } else {
          this.tokenStorageService.saveTokenSession(next.accessToken);
          this.tokenStorageService.saveUserSession(next);
        }

        this.authenticationService.isLoggedIn = true;
        this.checkLogin = true;
        this.username = this.tokenStorageService.getUser().username;
        this.roles = this.tokenStorageService.getUser().roles;
        this.loginForm.reset();
        this.router.navigateByUrl('/share/list');
      }, error => {
        this.authenticationService.isLoggedIn = false;
        this.messageError = 'Tên đăng nhập không tồn tại hoặc sai mật khẩu. Vui lòng nhập lại!!!'
      })
    }
  }

}
