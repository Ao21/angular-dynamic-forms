import { Injectable } from '@angular/core';
import { Question } from '../interfaces/question.interface';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class QuestionControlService {
  constructor() {}

  toFormGroup(questions: Question<any>[]) {
    const group: any = {};
    questions.forEach(question => {
      const validators = question.validations ? question.validations.map(x => x.validator) : null;
      group[question.key] = question.validations
        ? new FormControl(question.value !== undefined ? question.value : null, Validators.compose(validators))
        : new FormControl(question.value !== undefined ? question.value : null);
    });
    return new FormGroup(group);
  }
}
