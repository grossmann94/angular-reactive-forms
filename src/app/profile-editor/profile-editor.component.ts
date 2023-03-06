import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
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
    aliases: this.fb.array([this.fb.control('')]),
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
  
  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }
}
