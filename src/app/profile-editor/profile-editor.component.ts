import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css'],
})
export class ProfileEditorComponent {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),

    address: new FormGroup({
      street: new FormControl(''),
      streetNumber: new FormControl(''),
      zip: new FormControl(''),
      city: new FormControl(''),
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
