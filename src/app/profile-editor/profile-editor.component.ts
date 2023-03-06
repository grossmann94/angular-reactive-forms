import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css'],
})
export class ProfileEditorComponent {
  constructor(private fb: FormBuilder) {}

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],

    address: this.fb.group({
      street: [''],
      streetNumber: [''],
      zip: [''],
      city: ['', Validators.required],
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
