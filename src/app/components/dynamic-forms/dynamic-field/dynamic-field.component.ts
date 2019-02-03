import { Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Question } from '../interfaces/question.interface';
import { throwDynamicFormMissingQuestionError } from './dynamic-field.errors';

@Component({
  selector: 'inno-dynamic-field',
  templateUrl: './dynamic-field.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./dynamic-field.component.scss'],
})
export class DynamicFieldComponent implements OnInit, OnDestroy {
  @Input() question: Question<any>;
  @Input() form: FormGroup;

  isDisabled = false;
  isHidden = false;

  subs: Subscription[] = [];

  get isValid() {
    return this.form.controls[this.question.key].valid;
  }

  constructor() {}

  ngOnInit() {
    if (!this.question) {
      throw throwDynamicFormMissingQuestionError();
    }

    if (this.question.hiddenBy) {
      this.checkAndSubscribeToHiddenBy();
    }

    if (this.question.disabledBy) {
      this.checkAndSubscribeToDisabledBy();
    }
  }

  checkAndSubscribeToDisabledBy() {
    const disabledBy = this.form.get(this.question.disabledBy.key);
    const control = this.form.get(this.question.key);
    if (disabledBy.value === this.question.disabledBy.condition) {
      control.disable();
    }
    const disabled$ = disabledBy.valueChanges.subscribe(n => {
      if (n === this.question.disabledBy.condition) {
        control.disable();
      } else {
        control.enable();
      }
    });
    this.subs.push(disabled$);
  }

  checkAndSubscribeToHiddenBy() {
    const hiddenByControl = this.form.get(this.question.hiddenBy.key);
    const control = this.form.get(this.question.key);
    if (hiddenByControl.value === this.question.hiddenBy.condition) {
      control.disable();
      this.isHidden = true;
    }
    const hidden$ = hiddenByControl.valueChanges.subscribe(n => {
      if (n === this.question.hiddenBy.condition) {
        control.disable();
        this.isHidden = true;
      } else {
        control.enable();
        this.isHidden = false;
      }
    });
    this.subs.push(hidden$);
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }
}
