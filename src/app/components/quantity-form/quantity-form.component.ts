import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-quantity-form',
  templateUrl: './quantity-form.component.html',
  styleUrls: ['./quantity-form.component.scss']
})
export class QuantityFormComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      quantity: [60, [Validators.required, Validators.max(100), Validators.min(0)]]
    });
  }

  ngOnInit(): void {
  }

}
