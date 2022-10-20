 import { Component, OnInit } from '@angular/core';
import {UpgradeAccountService} from "../../service/upgrade-account.service";
import {User} from "../../model/user";
import {render} from "creditcardpayments/creditCardPayments";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";


@Component({
  selector: 'app-upgrade-account',
  templateUrl: './upgrade-account.component.html',
  styleUrls: ['./upgrade-account.component.css']
})
export class UpgradeAccountComponent implements OnInit {
  idAccount: number = 1;
  user: User
  flag = true;
  invoiceCreate: FormGroup;
  prices: any;
  checkPrice = new FormControl("", [Validators.required])

  getErrorMessageCheckPrice(){
    if (this.checkPrice.hasError('required')){
      return "Không để trống"
    }
    return
  }
  //
  // checkRequiredPrice : any = false;
  //
  // submitButton(){
  //   if (!this.checkPrice.valid){
  //     this.checkRequiredPrice = true;
  //     this.checkPrice.markAllAsTouched()
  //     return;
  //   }
  // }
  constructor(private upgradeAccountService: UpgradeAccountService, private router: Router) {
  }

  ngOnInit(): void {
    this.findUserById();
  }

  findUserById() {
    this.upgradeAccountService.findByUserById(this.idAccount).subscribe(n => {
      this.user = n;
    })
  }

  invoice(){
    this.invoiceCreate = new FormGroup({
      id: new FormControl(""),
      price: new FormControl(this.prices),
      time: new FormControl(""),
      user: new FormGroup({
        idUser: new FormControl(this.user.idUser)
      })

    })
  }

  paypal(pricePaypal:any){
    if(this.flag){
      document.getElementById('myPaypal').innerHTML = "";
      render(
        {
          id: "#myPaypal",
          value: this.prices,
          currency: "USD",
          onApprove: (details) => {
            this.invoice();
            this.upgradeAccountService.saveInvoice(this.invoiceCreate.value).subscribe(n => {
              this.findUserById();
              this.hideModal();
            })
          }
        }
      );
    } this.flag = false

  }

  hideModal() {
    document.getElementById("closeModal").click();
  }

  callPaypal(value: any) {
    this.flag = true;
    this.paypal(value)
  }
}


