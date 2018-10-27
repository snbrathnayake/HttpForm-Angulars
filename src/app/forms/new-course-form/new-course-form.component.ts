import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {

  userForm;

  control: FormControl;

  constructor(private fb: FormBuilder) {
    this.control = fb.control(
      { value: 'text', disabled: true },
      Validators.required,
    );
  }

  // constructor(private fb: FormBuilder) {

  //   this.userForm = this.fb.group({
  //     name: ['', Validators.required],
  //   });
  // }

  saveUser() {
    console.log(this.userForm.value);
  }

  // form2;

  // // with formBuilder class
  // constructor(fb: FormBuilder) {
  //   this.form2 = fb.group({
  //     name: ['', Validators.required],
  //     contact: fb.group({
  //       email:[],
  //       phone:[],
  //     }),
  //     topics: fb.array([])
  //   });
  // }

  // // normal way to associte with forms 
  // form = new FormGroup({
  //   name: new FormControl('', Validators.required),
  //   contact: new FormGroup({
  //     email: new FormControl(),
  //     phone: new FormControl(),
  //   }),
  //   topics: new FormArray([])
  // });


  // get topics() {
  //   return this.form.get('topics') as FormArray;
  // }

  // addTopic(topic: HTMLInputElement) {
  //   (this.topics.push(new FormControl(topic.value)));
  //   topic.value = '';
  // }

  // removeTopic(topic: FormControl) {
  //   let index = this.topics.controls.indexOf(topic);
  //   this.topics.removeAt(index);
  // }


}
