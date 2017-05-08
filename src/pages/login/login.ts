import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import {UtilService} from '../../providers/util-service';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
    loginText: string;
    user:any={};
    constructor(public navCtrl: NavController, public navParams: NavParams,
                private util: UtilService) {
        this.loginText = "登录";
       this.util.getByKey("userName").then((userName)=>{
            this.user.userName=userName;
        });
        this.util.getByKey("passWord").then((passWord)=>{
            console.log(passWord);
            this.user.passWord=passWord;
        });

    }
    loginClick() {
        if(!this.user.userName||!this.user.passWord){
            this.util.showToast("用户名或者密码不能为空");
            return;
        }
        if (this.user.userName != "liuya" || this.user.passWord != "123456") {
            this.util.showToast("用户名或者密码错误");
        } else {
            this.util.setByKey('userName',this.user.userName);
            this.util.setByKey('passWord',this.user.passWord);
            this.navCtrl.push(TabsPage);
        }
    }

}

