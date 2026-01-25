import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddAddressComponent } from './add-address/add-address.component';

@Component({
    selector: 'app-user-address',
    templateUrl: './user-address.component.html',
    styleUrls: ['./user-address.component.scss']
})
export class UserAddressComponent {
    public addresses: any[] = [
        {
            shipToName: 'Abhi Pandey',
            addressName: 'Gurugram Sector 18',
            address: 'Sharoul Sector 18',
            city: 'Gurugram',
            postCode: '76765',
            country: 'India',
            region: 'Uttar Pradesh',
            isDefault: true
        },
        {
            shipToName: 'Abhi Pandey',
            addressName: 'Office Park',
            address: '45, IT Park',
            city: 'Coimbatore',
            postCode: '641001',
            country: 'India',
            region: 'Tamil Nadu',
            isDefault: false
        }
    ];


    constructor(private matDialog: MatDialog) { }

    addAddress() {
        this.openModal();
    }

    editAddress(index: number) {
        this.openModal(this.addresses[index]);
    }

    deleteAddress(index: number) {
        this.addresses.splice(index, 1);
    }

    setDefault(index: number) {
        this.addresses.forEach((addr, i) => {
            addr.isDefault = i === index;
        });
    }

    openModal(data: any = null) {
        // Logic to open AddAddressComponent will be added next
        const config = new MatDialogConfig();
        config.position = { right: '0', top: '0' };
        config.height = '100%';
        config.width = '400px';
        config.panelClass = 'right-side-modal'; // You might need to add this class to global styles or component styles

        this.matDialog.open(AddAddressComponent, config);
    }
}
