import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orderscomponent/orders.component';
import { CreateneworderComponent } from './createnewordercomponent/createneworder.component';
import { OrdersService } from './orderscomponent/orders.service';
import { MydialogComponent } from './mydialogcomponent/mydialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OkdialogComponent } from './okdialogcomponent/okdialog.component';
import { DxButtonModule, DxDataGridModule,  } from 'devextreme-angular';
import {GridComponent} from './gridcomponent/grid.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
      DxButtonModule,
      DxDataGridModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    OrdersComponent,
    CreateneworderComponent,
    MydialogComponent,
    OkdialogComponent,
      GridComponent
  ],
  providers: [OrdersService ],
  bootstrap: [ AppComponent ],
    entryComponents: [
        MydialogComponent,
        OkdialogComponent
    ],
})
export class AppModule { }
