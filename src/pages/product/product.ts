import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';


import { ProductCreatePage } from '../product-create/product-create';


/*
  Generated class for the Product page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-product',
  templateUrl: 'product.html'
})
export class ProductPage {

  items: any[] =[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }

  addItem() {
    let addModal = this.modalCtrl.create(ProductCreatePage);

    addModal.onDidDismiss(item => {
      if (item) {
        this.items.push(item);
      }
    })
    addModal.present();
  }

}
