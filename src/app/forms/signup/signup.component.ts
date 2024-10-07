import { Component } from '@angular/core';
import { Form, FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

submitForm(refForm:NgForm){
  console.log("hello")
  console.log(refForm.value)

}
reset(refForm:NgForm){
 refForm.reset();
}
}
