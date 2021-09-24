import { Component, Input } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: CustomCounterComponent
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: CustomCounterComponent
    }
  ]
})
export class CustomCounterComponent implements ControlValueAccessor, Validator {

  @Input()
  increment: number | any;

  counter: number = 0;
  touched: boolean = false;
  disabled: boolean = false;

  writeValue(counter: number) {
    this.counter = counter;
  }

  onChange = (counter: number) => { };
  onTouched = () => {  };

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }


  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  onAdd() {
    this.markAsTouched();
    this.counter += this.increment;
    this.onChange(this.counter);
  }

  onRemove() {
    this.markAsTouched();
    this.counter -= this.increment;
    this.onChange(this.counter);
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  validate(control: AbstractControl): ValidationErrors | any {
    const counter = control.value;
    if (counter <= 0) {
      return {
        mustBePositive: {
          counter
        }
      };
    }
  }

}
