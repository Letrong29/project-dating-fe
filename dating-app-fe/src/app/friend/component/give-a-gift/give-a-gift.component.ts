import {Component, OnInit} from '@angular/core';
import {Gift} from "../../model/gift";
import {GiftService} from "../../service/gift.service";
import {GiftUserService} from "../../service/gift-user.service";
import {Toast, ToastrService} from "ngx-toastr";
import {User} from "../../../user/model/user";

@Component({
  selector: 'app-give-a-gift',
  templateUrl: './give-a-gift.component.html',
  styleUrls: ['./give-a-gift.component.css']
})
export class GiveAGiftComponent implements OnInit {

  gifList: Gift[] = [];
  idGift: number;
  idUserReceiver=6;
  idUserSender=6;
  quantity = 1;

  user: User;
  coin: number;
  price: number;
  gift: Gift;

  constructor(private giftService: GiftService,
              private giftUserService: GiftUserService,
              private toast: ToastrService) {
  }

  ngOnInit(): void {
    this.getAllGift()
  }

  getAllGift() {
    this.giftService.getAllGift().subscribe(gift => {
      this.gifList = gift;
    });
  }

  GiveAGiftUser(id: number) {


    this.giftUserService.findByIdGift(id).subscribe((gift:any)=>{
      this.price = gift.price;
      this.giftUserService.findByIdUser(this.idUserSender).subscribe((user:any)=>{
        this.coin = user.coin;
        if(this.coin < this.price){
          this.toast.error("Số tiền không đủ ! Bạn cần nạp thêm !", "Thông báo !")
        }else {
          this.giftUserService.GiveAGiftUser(id, this.idUserReceiver, this.idUserSender, this.quantity).subscribe(() => {
            this.toast.success("Tặng quà thành công", "Thông báo !")
          })
        }
      });
    });




  }



}
