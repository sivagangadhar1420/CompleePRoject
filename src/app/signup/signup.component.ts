import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { RegistrationService } from '../registration.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  ALPHABET = '23456789abdegjkmnpqrvwxyz';
  angForm: FormGroup;

  ID_LENGTH = 3;
  a = this.fun1();
   fun1() {
   let rtn = 'oyo';
   for (let i = 0; i < this.ID_LENGTH; i++) {
     rtn += this.ALPHABET.charAt(Math.floor(Math.random() * this.ALPHABET.length));
   }
   return rtn;
 }

  constructor(private fb: FormBuilder, private rs: RegistrationService) {
    this.createForm();
  }



  createForm() {
    this.angForm = this.fb.group({
      hotelcode: [],
      hotelname: ['', Validators.required ],
      hotellocation: ['', Validators.required ]
    });
  }


  addRegistration(hotelcode, hotelname, hotellocation) {
    this.rs.addRegistration(hotelcode, hotelname, hotellocation);
  }
 ngOnInit() {
}
}
