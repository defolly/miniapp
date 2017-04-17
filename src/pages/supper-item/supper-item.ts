import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';

/*
  Generated class for the SupperItem page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-supper-item',
  templateUrl: 'supper-item.html'
})
export class SupperItemPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl:ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SupperItemPage');
  }

    cancel() {
    this.viewCtrl.dismiss();
  }

done() {
   // if (!this.form.valid) { return; }
    this.viewCtrl.dismiss();//this.form.value);
  }

}
