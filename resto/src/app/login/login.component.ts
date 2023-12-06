import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  alert: boolean = false;
  wrongCredentialsAlert = false;
  login= new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private resto: RestoService) {}

  ngOnInit(): void {}

  loginUser() {
    this.resto.getRegisteredUsers().subscribe((registeredUsers) => {
      console.log('Registered Users:', registeredUsers);
      if (Array.isArray(registeredUsers)) {
        // Check if registeredUsers is an array
        const userCredentials = this.login.value;
        const foundUser = registeredUsers.find(
          (user) =>
            user.email === userCredentials.email && user.password === userCredentials.password
        );
  
        if (foundUser) {
          this.alert = true;
          console.log('Login successful.');
          // Set the 'authenticated' session variable only after a successful login.
          sessionStorage.setItem('authenticated', 'true');
          // Additional logic for successful login
        } else {
          this.wrongCredentialsAlert = true;
          console.log('Login failed. Invalid credentials.');
          sessionStorage.removeItem('authenticated');
        }
  
        this.login.reset({});
      } else {
        console.log('Registered users data is not an array.');
      }
    });
  }
  
  closeAlert(){
    this.alert=false
  }
  closeWrongCredentialsAlert() {
    this.wrongCredentialsAlert = false;
  }
}