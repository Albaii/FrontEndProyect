import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-loginandregister',
  standalone: true,
  imports: [],
  templateUrl: './loginandregister.component.html',
  styleUrl: './loginandregister.component.css'
})
export class LoginandregisterComponent implements OnInit {

  LoginForm = {
    username: '',
    password: ''
  }

  RegisterForm = {
    username: '',
    age: '',
    email: '',
    country: '',
    password: ''
  }

  constructor(private router: Router){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  Login(form: string){
    if(this.LoginForm.username !== '' || this.LoginForm.password ! == ''){
      console.log('El usuario se ha logeedo')
    } else {
      alert('Error al introducir los datos')
    }
  }

  Register(form: string) {
    if (Object.values(this.RegisterForm).every(value => value !== '')) {
      console.log('El usuario se ha registrado correctamente');
    } else {
      alert('Por favor, complete todos los campos');
    }
  }
  }
