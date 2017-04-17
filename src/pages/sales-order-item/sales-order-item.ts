import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

import { Item } from '../../models/item';

/*
  Generated class for the SalesOrderItem page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sales-order-item',
  templateUrl: 'sales-order-item.html'
})
export class SalesOrderItemPage {

  item:Item ;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {
     this.item=new Item({
       "customer":"",
       "date":"2017-4-1",
       "man":"man"
     });

    console.log(this.item); 

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalesOrderItemPage');
  }

    cancel() {
    this.viewCtrl.dismiss();
  }

 
  done() {    
    this.viewCtrl.dismiss();
  }

}
