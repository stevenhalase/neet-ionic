import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { ActivitiesPage } from '../pages/activities/activities';
import { ContactPage } from '../pages/contact/contact';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { TabsPage } from '../pages/tabs/tabs';

import { ActivityProvider } from '../providers/activity-provider';

@NgModule({
  declarations: [
    MyApp,
    ActivitiesPage,
    ContactPage,
    DashboardPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ActivitiesPage,
    ContactPage,
    DashboardPage,
    TabsPage
  ],
  providers: [ActivityProvider]
})
export class AppModule {}
