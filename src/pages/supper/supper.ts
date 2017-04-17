import { Component } from '@angular/core';
import { NavController, NavParams,ModalController } from 'ionic-angular';
import {SupperItemPage } from '../supper-item/supper-item';


/*
  Generated class for the Supper page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-supper',
  templateUrl: 'supper.html'
})
export class SupperPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl:ModalController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SupperPage');
  }

   addItem() {
    let addModal = this.modalCtrl.create(SupperItemPage);

    addModal.onDidDismiss(item => {
      if (item) {
        
      }
    })
    addModal.present();
  }

}
