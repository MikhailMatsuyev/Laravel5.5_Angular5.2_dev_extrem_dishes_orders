import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';


@Component({
    selector: 'app-my-dialog',
    templateUrl: './mydialog.component.html',
    styleUrls: ['./mydialog.component.css'],
})

export class MydialogComponent implements OnInit {


    constructor(public thisDialogRef: MatDialogRef<MydialogComponent>, @Inject(MAT_DIALOG_DATA) public data: string) {
        thisDialogRef.disableClose = false;
    }

    ngOnInit() {
    }

    onCloseConfirm() {
        this.thisDialogRef.close('Confirm');
    }

    onCloseCancel() {
        this.thisDialogRef.close('Cancel');
    }
}