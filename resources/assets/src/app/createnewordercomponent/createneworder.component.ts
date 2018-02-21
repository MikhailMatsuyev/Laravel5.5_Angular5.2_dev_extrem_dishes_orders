import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orderscomponent/orders.service';
import {MatDialog} from '@angular/material';
import {OkdialogComponent} from '../okdialogcomponent/okdialog.component';

// import {MydialogComponent} from '../mydialogcomponent/mydialog.component';

@Component({
  selector: 'app-createneworder',
  templateUrl: './createneworder.component.html',
  styleUrls: ['./createneworder.component.css'],
  providers: []
})
export class CreateneworderComponent implements OnInit {

    dialogResult = '';

    constructor(private httpService: OrdersService, public dialog: MatDialog) {  }

  ngOnInit() {

  }
    plusClick() {
        alert('100');
    }

  createOrder(data) {
      console.log('dir ', data);

      this.httpService.createNewOrderInDB(data)
          .subscribe(( ) => {this.openDialog()});
  }
    openDialog() {
        let dialogRef = this.dialog.open(OkdialogComponent, {
            width: '600px',
            data: 'This text is passed into the dialog!',
            disableClose: false,
            hasBackdrop: false
        });
        dialogRef.afterClosed().subscribe(result => {
            /*
            if (result === 'Ok') {
                //this.deleteOneOrderInView(data);
            }
            */
        });
    }



}
