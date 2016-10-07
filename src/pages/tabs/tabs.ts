import { Component } from '@angular/core';

import { DashboardPage } from '../dashboard/dashboard';
import { ActivitiesPage } from '../activities/activities';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = DashboardPage;
  tab2Root: any = ActivitiesPage;
  tab3Root: any = ContactPage;

  constructor() {

  }
}
