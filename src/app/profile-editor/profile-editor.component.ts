import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css'],
})
export class ProfileEditorComponent {
  constructor(private fb: FormBuilder) {}

  profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],

    address: this.fb.group({
      street: [''],
      streetNumber: [''],
      zip: [''],
      city: [''],
    }),
  });

  onSubmit() {
    console.warn(this.profileForm.value);
  }

  fillOutSampleAddress() {
    this.profileForm.patchValue({
      address: {
        street: 'Rudolf-Harbig-Weg',
        streetNumber: '123',
        zip: '48149',
        city: 'Münster',
      },
    });
  }
}
