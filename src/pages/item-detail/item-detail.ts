import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Items } from '../../providers/providers';

@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  item: any;
  items: any[];
  idx: number = 0;
  itemsLen: number = 0;

  constructor(public navCtrl: NavController, navParams: NavParams, items: Items) {
    this.item = navParams.get('item') || items.defaultItem;
    this.items = navParams.get("items") || [];
    this.idx = navParams.get("idx") || 0;
    this.itemsLen = this.items.length - 1 || 0;
  }

  direction(dir: number): void {
    let num = this.idx + dir;
    if (num < 0 || num >= this.items.length) {
      return;
    }
    this.idx = num;
    this.item = this.items[this.idx];
  }
}
