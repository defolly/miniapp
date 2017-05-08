import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage} from '../login/login'

/*
  Generated class for the Welcome page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }
    goToLogin(){
        this.navCtrl.setRoot(LoginPage);
    }

}
