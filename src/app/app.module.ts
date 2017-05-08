import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {IonicStorageModule} from '@ionic/storage';


/*Pages*/
import {MyApp} from './app.component';
import {WorkPage} from '../pages/work/work';
import {SettingPage} from '../pages/setting/setting';
import {AlarmPage} from '../pages/alarm/alarm';
import {ReportPage} from '../pages/report/report';
import {TabsPage} from '../pages/tabs/tabs';
import {WelcomePage} from '../pages/welcome/welcome';
import {LoginPage} from '../pages/login/login';
import {AboutUsPage} from '../pages/setting/about-us/about-us';
import {ModifyPasswordPage} from '../pages/setting/modify-password/modify-password';
/*商品管理*/
import {GoodsListPage} from '../pages/work/goods-list/goods-list';
import {GoodsEditPage} from '../pages/work/goods-edit/goods-edit';
/*客户管理*/
import{CustomerListPage} from '../pages/work/customer-list/customer-list';
import{CustomerEditPage} from '../pages/work/customer-edit/customer-edit';
import{SupplierListPage} from '../pages/work/supplier-list/supplier-list';
import {SupplierAddPage} from '../pages/work/supplier-add/supplier-add';
/*demo*/
import {DemoListPage} from '../pages//work/demo-list/demo-list';
import {DemoDetailPage} from '../pages//work/demo-detail/demo-detail';


/*Services*/
import {UtilService} from '../providers/util-service';
import {CONSTANT} from '../providers/constants';
import {UpdateService} from '../providers/update-service';
import {SqlService} from '../providers/sql-service';
import {CustomerService} from '../providers/customer-service';
import {SupplierService} from '../providers/supplier-service';

/*库存管理*/
import{StkListPage} from '../pages/work/stk-list/stk-list';
import {StkAddPage} from '../pages/work/stk-add/stk-add';

/*Plugins*/
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Toast} from '@ionic-native/toast';
import {SQLite} from '@ionic-native/sqlite';
import {MyErrorHandler} from '../providers/my-error-handler';
import {AppVersion} from '@ionic-native/app-version';
import {Network} from '@ionic-native/network';
import {HTTP} from '@ionic-native/http';
import {ImagePicker} from '@ionic-native/image-picker';
import {Camera} from '@ionic-native/camera';
import { Transfer } from '@ionic-native/transfer';
import { File } from '@ionic-native/file';

@NgModule({
    declarations: [
        MyApp,
        WorkPage,
        SettingPage,
        AlarmPage,
        ReportPage,
        TabsPage,
        WelcomePage,
        LoginPage,
        GoodsListPage,
        GoodsEditPage,
        CustomerListPage,
        CustomerEditPage,
        SupplierListPage,
        SupplierAddPage,
        DemoListPage,
        DemoDetailPage,
        StkListPage,
        StkAddPage,
        AboutUsPage,
        ModifyPasswordPage
    ],
    imports: [
        IonicModule.forRoot(MyApp, {
            backButtonText: '返回',//修改返回文字
            tabsHideOnSubPages: 'true', //隐藏全部子页面tabs
            iconMode: 'ios',//在整个应用程序中为所有图标使用的模式。 可用选项：“ios”，“md”
            mode: 'ios',//在整个应用程序中使用的模式。(解决title不居中显示，返回文字和图片不对齐问题)
            tabsHighlight: 'true',//高亮当前选中tab
            pageTransition: 'ios-transition'
        }),
        IonicStorageModule.forRoot()
        /*, {
         links: [
         {component: WelcomePage, name: 'Welcome', segment: 'welcome'},
         {component: LoginPage, name: 'Login', segment: 'login'},
         {component: TabsPage, name: 'Tabs', segment: 'tabs'},
         {component: AlarmPage, name: 'alarm', segment: ''},
         {component: WorkPage, name: 'Work', segment: ''},
         {component: ReportPage, name: 'Report', segment: ''},
         {component: SettingPage, name: 'Setting', segment: ''},
         {component: GoodsListPage, name: 'GoodsList', segment: 'goodsList'},
         {component: GoodsEditPage, name: 'GoodsEdit', segment: 'goodsEdit'},
         {component: CustomerListPage, name: 'CustomerList', segment: 'customerList'},
         {component: CustomerEditPage, name: 'CustomerEdit', segment: 'customerEdit'},
         {component:SupplierListPage,name:'SupplierList',segment:'SupplierList'},
         {component:SupplierAddPage,name:'SupplierAdd',segment:'SupplierAdd'}
         ]
         }*/
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        WorkPage,
        SettingPage,
        AlarmPage,
        ReportPage,
        TabsPage,
        WelcomePage,
        LoginPage,
        GoodsListPage,
        GoodsEditPage,
        CustomerListPage,
        CustomerEditPage,
        SupplierListPage,
        SupplierAddPage,
        DemoListPage,
        DemoDetailPage,
        StkListPage,
        StkAddPage,
        AboutUsPage,
        ModifyPasswordPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        IonicStorageModule,
        Toast,
        SQLite,
        UtilService,
        AppVersion,
        Network,
        HTTP,
        ImagePicker,
        SqlService,
        CustomerService,
        SupplierService,
        Camera,
        CONSTANT,
        UpdateService,
        Transfer,
        File,
        {provide: ErrorHandler, useClass: MyErrorHandler}
    ]
})
export class AppModule {
}
