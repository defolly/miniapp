import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';

import { ProductPage } from '../product/product';
import { CustomerPage } from '../customer/customer';
import { SupperPage } from '../supper/supper';
import { SalesOrderPage } from '../sales-order/sales-order';
import { BillingPage } from '../billing/billing';
import { PurchaseOrderPage } from '../purchase-order/purchase-order';
import { StockPage } from '../stock/stock';
import { ReceiptPage } from '../receipt/receipt';
import { CheckPage } from '../check/check';


/*
  Generated class for the Workbench page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-workbench',
  templateUrl: 'workbench.html'
})
export class WorkbenchPage {

  pepperoni: boolean = true;
  sausage: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkbenchPage');
  }

  pageList = {
    "product": ProductPage,
    "cust": CustomerPage,
    "supper": SupperPage,
    "sale": SalesOrderPage,
    "bill": BillingPage,
    "purchase": PurchaseOrderPage,
    "check":CheckPage,
    "stock":StockPage,
    "receipt":ReceiptPage
  };

  openModel(modelno: string) {
    if (!modelno || !this.pageList[modelno]) return;
    this.navCtrl.push(this.pageList[modelno]);
  }
}
