import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-add-address',
    templateUrl: './add-address.component.html',
    styleUrls: ['./add-address.component.scss']
})
export class AddAddressComponent {

    constructor(public dialogRef: MatDialogRef<AddAddressComponent>) { }

    close() {
        this.dialogRef.close();
    }

    save() {
        // Implement save logic here
        this.dialogRef.close('save');
    }
}
