import {Component, ViewChild} from '@angular/core';
import {Platform, Nav, IonicApp, ToastController,Keyboard} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {WelcomePage} from '../pages/welcome/welcome';
import {LoginPage} from '../pages/login/login';

import {UtilService} from '../providers/util-service';
import {SqlService} from '../providers/sql-service';


import {AlarmPage} from '../pages/alarm/alarm';



@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any;
    backButtonPressed: boolean = false;  //用于判断返回键是否触发
    @ViewChild('myNav') nav: Nav;

    constructor(public platform: Platform,
                statusBar: StatusBar,
                splashScreen: SplashScreen,
                public ionicApp: IonicApp,
                public toastCtrl: ToastController,
                public util: UtilService,
                public keyboard: Keyboard,
                public sqlHelp: SqlService) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            this.init();
            this.createDB();
            this.registerBackButtonAction();//注册返回按键事件
        });
    }

    init() {
        this.util.getByKey('firstIn').then((result)=>{
            if (result) {
                this.rootPage = AlarmPage;//LoginPage;
            } else {
                this.util.setByKey('firstIn', true);
                this.rootPage = WelcomePage;
            }
        })
    }

    createDB() {
        const goodSql = 'CREATE TABLE IF NOT EXISTS good (id integer primary key, good_no varchar, good_name varchar, unit varchar,img varchar,purchase_price varchar,cost_price varchar,sale_price varchar)';
        this.sqlHelp.execSql(goodSql, []).then(() => {
        }).catch((err) => {
            console.info("error:", err);
        });

        // this.util.sqliteCustomSQL(goodSql, (res) => {
        // });


        const customerSql = 'CREATE TABLE IF NOT EXISTS customer (id integer primary key, customer_no varchar, customer_name varchar, customer_addr varchar,contact varchar,phone varchar,email varchar,company varchar)';
        this.sqlHelp.execSql(customerSql, []).then(() => {
        }).catch((err) => {
            console.info("error:", err);
        });
        // this.util.sqliteCustomSQL(customerSql, (res) => {
        // });

        //供应商表
        const supplierSql = 'CREATE TABLE IF NOT EXISTS supplier (id integer primary key, supplier_no varchar, supplier_name varchar, supplier_addr varchar,contact varchar,phone varchar,email varchar,company varchar)';
        this.sqlHelp.execSql(supplierSql,[]).then(() => {
        }).catch((err) => {
            console.info("error:", err);
        });

      //库存表
      var stkSql = 'CREATE TABLE IF NOT EXISTS stk (id integer primary key, good_no varchar, cell_no varchar, qty float)';
      this.sqlHelp.execSql(stkSql, []).then(function () {
        console.info("create table stk sucess");
      }).catch(function (err) {
        console.info("error:", err);
      });
      //进出仓明细
      var stkInOutDtlSql = 'CREATE TABLE IF NOT EXISTS stk_in_out_dtl (id integer primary key, good_no varchar, store_no varchar,cell_no varchar,in_out_flag varchar, qty float,creator varchar,create_time varchar)';
      this.sqlHelp.execSql(stkInOutDtlSql, []).then(function () {
        console.info("create table stk_in_out_dtl sucess");
      }).catch(function (err) {
        console.info("error:", err);
      });

    }


    registerBackButtonAction() {
        this.platform.registerBackButtonAction(() => {
            if (this.keyboard.isOpen()) {
                // 键盘打开则
                this.keyboard.close();
                return;
            }
            //如果想点击返回按钮隐藏toast或loading或Overlay就把下面加上
            // this.ionicApp._toastPortal.getActive() || this.ionicApp._loadingPortal.getActive() || this.ionicApp._overlayPortal.getActive()
            let activePortal = this.ionicApp._modalPortal.getActive()||this.ionicApp._toastPortal.getActive() || this.ionicApp._overlayPortal.getActive();
            let loadingPortal=this.ionicApp._loadingPortal.getActive();
            if (activePortal) {
                //其他的关闭
                activePortal.dismiss().catch(() => {
                });
                activePortal.onDidDismiss(() => {
                });
                return;
            }
            if(loadingPortal){
                //loading的话，返回键无效
                return;
            }
            let activeVC = this.nav.getActive();
            let page = activeVC.instance;

            if(page instanceof LoginPage||page instanceof WelcomePage){
                this.platform.exitApp();
                return;
            }
            let tabs = activeVC.instance.tabs;
            let activeNav = tabs.getSelected();
            return activeNav.canGoBack() ? activeNav.pop() : this.showExit();//另外两种方法在这里将this.showExit()改为其他两种的方法的逻辑就好。
        }, 1);
    }

    //双击退出提示框
    showExit() {
        if (this.backButtonPressed) { //当触发标志为true时，即2秒内双击返回按键则退出APP
            this.platform.exitApp();
        } else {
            this.toastCtrl.create({
                message: '再按一次退出应用',
                duration: 2000,
                position: 'bottom',
                cssClass: 'text-align: center'
            }).present();
            this.backButtonPressed = true;
            setTimeout(() => this.backButtonPressed = false, 2000);//2秒内没有再次点击返回则将触发标志标记为false
        }
    }
}
