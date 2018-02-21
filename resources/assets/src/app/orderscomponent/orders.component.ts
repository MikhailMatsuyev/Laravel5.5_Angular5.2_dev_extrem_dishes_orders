import { Component, OnInit } from '@angular/core';
import { OrdersService } from './orders.service';
import {MatDialog} from '@angular/material';
import {MydialogComponent} from '../mydialogcomponent/mydialog.component';

@Component({
  selector: 'app-orderscomponent',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  providers: [OrdersService]
})

export class OrdersComponent implements OnInit {
    dialogResult = '';

    constructor(private httpService: OrdersService, public dialog: MatDialog) {  }

    dataForOutput: any= [];

    openDialog(data) {
        let dialogRef = this.dialog.open(MydialogComponent, {
            width: '600px',
            data: 'This text is passed into the dialog!',
            disableClose: false,
            hasBackdrop: false
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result === 'Confirm') {
                this.deleteOneOrderInView(data);
            }
        });
    }

    ngOnInit() {
        this.getAllOrdersFromService();
    }

    getAllOrdersFromService() {
        this.httpService.getAllOrdersFromServer()
            .subscribe((data) => {this.showAllOrdersInView(data); });
    }

    showAllOrdersInView(data) {
        // console.log('show all   ', data);
        this.dataForOutput = data;
    }

    deleteOneOrderInView(data) {
        console.log('delete one   ', data.target.dataset.id);
        this.httpService.deleteOneOrdersFromView(data.target.dataset.id)
            .subscribe(() => {this.getAllOrdersFromService(); });
        // this.dataForOutput = data;
    }
}