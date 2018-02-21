import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';


@Component({
    selector: 'app-ok-dialog',
    templateUrl: './okdialog.component.html',
    styleUrls: ['./okdialog.component.css'],
})

export class OkdialogComponent implements OnInit {


    constructor(public thisDialogRef: MatDialogRef<OkdialogComponent>, @Inject(MAT_DIALOG_DATA) public data: string) {}

    ngOnInit() {
        this.data = 'Заказ успешно создан!';
    }

    onCloseOk() {
        this.thisDialogRef.close('Ok');
    }
}