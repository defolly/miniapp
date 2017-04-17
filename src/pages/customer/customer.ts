import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import{CustomerItemPage} from '../customer-item/customer-item';

/*
  Generated class for the Customer page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-customer',
  templateUrl: 'customer.html'
})
export class CustomerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl:ModalController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerPage');
  }

  addItem() {
    let addModal = this.modalCtrl.create(CustomerItemPage);

    addModal.onDidDismiss(item => {
      if (item) {
        
      }
    })
    addModal.present();
  }

}
