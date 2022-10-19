import {Component, OnInit} from '@angular/core';
import {Gift} from "../../model/gift";
import {GiftService} from "../../service/gift.service";

@Component({
  selector: 'app-give-a-gift',
  templateUrl: './give-a-gift.component.html',
  styleUrls: ['./give-a-gift.component.css']
})
export class GiveAGiftComponent implements OnInit {

  gifList: Gift[] = [];

  constructor(private giftService: GiftService) {
  }

  ngOnInit(): void {
    this.getAllGift()
  }

  getAllGift() {
    this.giftService.getAllGift().subscribe(gift => {
      this.gifList = gift;
      console.log(this.gifList)
    });
  }

}
