import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
import { MatDialog } from '@angular/material/dialog';
import { EditPersonalDetailsComponent } from '../edit-personal-details/edit-personal-details.component';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent {
  public routes = routes;
  public isEditing = false;
  public profileImageUrl = 'assets/img/profiles/avatar-15.jpg';

  // User Data Properties
  firstName = 'Abhi';
  lastName = 'Pandey';
  userName = 'abhishek_p';
  taxNumber = 'Not provided';
  email = 'abhishekpandeymail.com';
  mobile = '+91 756767576';
  whatsapp = '+91 756767576';

  constructor(private dialog: MatDialog) { }

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profileImageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  openEditModal() {
    const dialogRef = this.dialog.open(EditPersonalDetailsComponent, {
      data: {
        firstName: this.firstName,
        lastName: this.lastName,
        userName: this.userName,
        taxNumber: this.taxNumber,
        mobile: this.mobile,
        whatsapp: this.whatsapp
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.firstName = result.firstName;
        this.lastName = result.lastName;
        this.userName = result.userName;
        this.taxNumber = result.taxNumber;
        this.mobile = result.mobile;
        this.whatsapp = result.whatsapp;
      }
    });
  }
}
