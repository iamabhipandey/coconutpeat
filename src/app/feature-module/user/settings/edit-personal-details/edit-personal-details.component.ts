
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataFactoryService } from 'src/app/shared/services/common/data-factory.service';

@Component({
    selector: 'app-edit-personal-details',
    templateUrl: './edit-personal-details.component.html',
    styleUrls: ['./edit-personal-details.component.css']
})
export class EditPersonalDetailsComponent implements OnInit {
    editForm!: FormGroup;
    loggedUserData: any;

    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<EditPersonalDetailsComponent>,
        private dataFactory: DataFactoryService,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

    ngOnInit(): void {
        this.loggedUserData = this.dataFactory.getCurrentUser();

        // Initialize form with data passed or default values
        this.editForm = this.fb.group({
            firstName: [this.data?.firstName || '', Validators.required],
            lastName: [this.data?.lastName || '', Validators.required],
            userName: [this.data?.userName || '', Validators.required],
            taxNumber: [this.data?.taxNumber || ''],
            mobile: [this.data?.mobile || '', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
            whatsapp: [this.data?.whatsapp || '', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]]
        });
    }

    close(): void {
        this.dialogRef.close();
    }

    saveDetails(): void {
        if (this.editForm.valid) {
            // Return the updated data to the caller (who will handle the API call)
            this.dialogRef.close(this.editForm.value);
        } else {
            this.editForm.markAllAsTouched();
        }
    }
}
