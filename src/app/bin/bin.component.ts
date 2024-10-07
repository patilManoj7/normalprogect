import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupName, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-bin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './bin.component.html',
  styleUrl: './bin.component.css'
})
export class BinComponent {
  title= new FormControl('',[
    Validators.required,
    Validators.maxLength(100),
    Validators.minLength(10)
  ]);
  snippit=new FormControl('',[
    Validators.required
  ])
  form=new FormGroup({
    title:this.title,
    snippit:this.snippit
  });
  save(ref:FormGroup){
    console.log(ref.value)

  }

}
