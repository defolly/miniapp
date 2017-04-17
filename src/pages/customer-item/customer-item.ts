import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';

/*
  Generated class for the CustomerItem page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-customer-item',
  templateUrl: 'customer-item.html'
})
export class CustomerItemPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerItemPage');
  }

   cancel() {
    this.viewCtrl.dismiss();
  }

done() {
   // if (!this.form.valid) { return; }
    this.viewCtrl.dismiss();//this.form.value);
  }
}
