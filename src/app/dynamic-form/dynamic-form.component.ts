import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  @Input() formDataObj: any;

  public form: FormGroup;
  public personProp: any[] = [];

  constructor() { }

  ngOnInit(): void {
    // iterating all person Obj properties
    const formDataObj: any = {};
    for (const prop of Object.keys(this.formDataObj)) {
      formDataObj[prop] = new FormControl(this.formDataObj[prop].value);
      // add new form controls in person prop array
      this.personProp.push({
        key: prop,
        label: this.formDataObj[prop].label,
        type: this.formDataObj[prop].type,
        options: this.formDataObj[prop].options,
      });
    }
    this.form = new FormGroup(formDataObj);
  }

}
