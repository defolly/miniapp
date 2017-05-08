import {Component, ViewChild} from '@angular/core';

import {WorkPage} from '../work/work';
import {AlarmPage} from '../alarm/alarm';
import {SettingPage} from '../setting/setting';
import {ReportPage} from '../report/report';
import {Tabs} from "ionic-angular";

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    @ViewChild('mainTabs') tabs: Tabs;//加这句以及引用两个模块
    tab1Root: any = WorkPage;
    tab2Root: any = ReportPage;
    tab3Root: any = AlarmPage;
    tab4Root: any = SettingPage;

    constructor() {

    }
}
