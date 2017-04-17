import { Component } from '@angular/core';
import { NavController, NavParams,ModalController } from 'ionic-angular';

import {SalesOrderItemPage} from '../sales-order-item/sales-order-item'

/*
  Generated class for the SalesOrder page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sales-order',
  templateUrl: 'sales-order.html'
})
export class SalesOrderPage {

  items:any[]=[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl:ModalController
    ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalesOrderPage');
  }

  addItem(){
   
    let addModal =  this.modalCtrl.create(SalesOrderItemPage);
       addModal.onDidDismiss(item => {
      if (item) {
        this.items.push(item);
      }
    })
    addModal.present();
  }

}
