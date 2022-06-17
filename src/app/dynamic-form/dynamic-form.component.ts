import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  public form: FormGroup;
  // create formControls Obj names
  public person: any = {
    firstName: 'Juri',
    age: 32,
    surname: 'Ivanov',
    twitter: 'ivan@guy'
  }
  public personProp: string[] = [];

  constructor() { }

  ngOnInit(): void {
    // iterating all person Obj properties
    const formDataObj: any = {};
    for (const prop of Object.keys(this.person)) {
      formDataObj[prop] = new FormControl(this.person[prop]);
      // add new form controls in person prop array
      this.personProp.push(prop);
    }
    this.form = new FormGroup(formDataObj);
  }

}
