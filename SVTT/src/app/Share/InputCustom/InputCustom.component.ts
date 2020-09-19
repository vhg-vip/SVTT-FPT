import { Component, NgModule, Input, forwardRef } from "@angular/core";
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, NG_VALIDATORS, Validator, FormControl, ValidationErrors, FormsModule } from '@angular/forms';

@Component({
    selector: 'input-custom',
    templateUrl: 'InputCustom.component.html',
    styleUrls: ['InputCustom.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputCustomComponent),
            multi: true
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => InputCustomComponent),
            multi: true
        }
    ]
})

export class InputCustomComponent implements ControlValueAccessor, Validator {
    
    @Input() Type: string;
    @Input('type') type: 'central' | 'province'; 
    @Input() ErrorEntity: any;

    Data: any;
    onChange: (Data: any) => void;
    onTouched: () => void;
    isDisabled: boolean;
    @Input() value: any;
    constructor(){}
    
    writeValue(obj: any): void {
        this.Data = obj;
    }
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }
    setDisabledState?(isDisabled: boolean): void {
        this.isDisabled = isDisabled;
    }
    handleOnProvinceChange(value){
        const data = value;
        this.writeValue(data);
        this.onChange(data);
    }
    validate(c: FormControl) {
        if (!this.type || !this.Data) {
          return null;
        }
        return this.Data.type === this.type ? null : {
          type: {
            valid: false,
            actual: c.value
          }
        }
      }

}

@NgModule({
    imports: [
        CommonModule, FormsModule
    ],
    exports: [
        InputCustomComponent
    ],
    declarations: [
        InputCustomComponent
    ]
})
export class InputCustomModule{}