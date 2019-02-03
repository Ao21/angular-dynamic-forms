import { Component, ViewEncapsulation } from '@angular/core';
import { TextQuestion } from '../../app/components/dynamic-forms/models/question-text';
import { QuestionControlService } from '../../app/components/dynamic-forms/services/question-control.service';
import { FormGroup, Validators } from '@angular/forms';
import { SelectQuestion } from '../../app/components/dynamic-forms/models/question-select';
import { DateQuestion } from '../../app/components/dynamic-forms/models/question-date';
import { RadioQuestion } from '../../app/components/dynamic-forms/models/question-radio';
import { CheckboxQuestion } from '../../app/components/dynamic-forms/models/question-checkbox';

export const FORM_TEMPLATE = `
<form (ngSubmit)="onSubmit()" [formGroup]="form">
  <div *ngFor="let question of questions" class="form-row">
    <inno-dynamic-field [question]="question" [form]="form"></inno-dynamic-field>
  </div>
  <button type="submit">Submit</button>
  </form>`;

@Component({
  selector: 'inno-sb-date-question',
  template: FORM_TEMPLATE,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['../../storybook.scss','../../styles.scss'],
})
export class DateQuestionComponent {
  form: FormGroup;

  questions = [
    new DateQuestion({
      label: 'Text Label',
      key: 'dateQuestion',
    }),
    new DateQuestion({
      label: 'Text Label',
      key: 'dateQuestionMin',
      min: new Date(Date.now() - 864e5),
    }),
    new DateQuestion({
      label: 'Text Label',
      key: 'dateQuestionMax',
      max: new Date(Date.now() + 864e5),
    }),
  ];

  constructor(private questionControlService: QuestionControlService) {
    this.form = this.questionControlService.toFormGroup(this.questions);
  }

  onSubmit() {
    console.log(this.form.value);
  }
}

@Component({
  selector: 'inno-sb-checkbox-question',
  template: FORM_TEMPLATE,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['../../storybook.scss','../../styles.scss'],
})
export class CheckboxQuestionComponent {
  form: FormGroup;

  questions = [
    new CheckboxQuestion({
      label: 'Text Label',
      key: 'checkboxQ',
      hint: 'Check Questions',
    }),
  ];

  constructor(private questionControlService: QuestionControlService) {
    this.form = this.questionControlService.toFormGroup(this.questions);
  }

  onSubmit() {
    console.log(this.form.value);
  }
}

@Component({
  selector: 'inno-sb-radio-question',
  template: FORM_TEMPLATE,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['../../storybook.scss','../../styles.scss'],
})
export class RadioQuestionComponent {
  form: FormGroup;

  questions = [
    new RadioQuestion({
      label: 'Text Label',
      key: 'radioQuestion',
      hint: 'Radio Stt',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Invalid email',
        },
      ],
      options: [
        { key: 'Answer1', value: 'Answer1' },
        { key: 'Answer2', value: 'Answer2' },
      ],
      
    }),
  ];

  constructor(private questionControlService: QuestionControlService) {
    this.form = this.questionControlService.toFormGroup(this.questions);
  }

  onSubmit() {
    console.log(this.form.value);
  }
}

@Component({
  selector: 'inno-sb-textbox-question',
  template: FORM_TEMPLATE,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['../../storybook.scss','../../styles.scss'],
})
export class TextBoxQuestionComponent {
  form: FormGroup;

  questions = [
    new TextQuestion({
      label: 'Text Label',
      key: 'textBoxQuestion',
      value: 'Hello',
      appearance: 'outline',
      hint: 'Wut!',
      validations: [
        {
          name: 'pattern',
          validator: Validators.pattern(
            '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$',
          ),
          message: 'Invalid email',
        },
      ],
    }),
    new TextQuestion({
      label: 'Text Label',
      key: 'textBoxQuestion2',
      value: 'Wut',
      hiddenBy: {
        key: 'textBoxQuestion',
        condition: '',
      },
    }),
    new TextQuestion({
      label: 'Text Label',
      key: 'textBoxQuestion3',
      type: 'number',
      max: 5,
      hiddenBy: {
        key: 'textBoxQuestion',
        condition: '',
      },
    }),
  ];

  constructor(private questionControlService: QuestionControlService) {
    this.form = this.questionControlService.toFormGroup(this.questions);
  }

  onSubmit() {
    console.log(this.form.value);
  }
}

@Component({
  selector: 'inno-sb-dropdown-question',
  template: FORM_TEMPLATE,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['../../storybook.scss','../../styles.scss'],
})
export class DropdownQuestionComponent {
  form: FormGroup;

  questions = [
    new SelectQuestion({
      label: 'Text Label',
      key: 'dropdownQuestion',
      options: [
        { key: 'Answer1', value: 'Answer1' },
        { key: 'Answer2', value: 'Answer2' },
      ],
    }),
    new SelectQuestion({
      label: 'Text Label',
      key: 'dropdownQuestion2',
      options: [
        { key: 'Answer1', value: 'Answer1' },
        { key: 'Answer2', value: 'Answer2' },
      ],
      hiddenBy: {
        key: 'dropdownQuestion',
        condition: 'Answer1',
      },
    }),
    new SelectQuestion({
      label: 'Text Label',
      key: 'dropdownQuestion3',
      options: [
        { key: 'Answer1', value: 'Answer1' },
        { key: 'Answer2', value: 'Answer2' },
      ],
      disabledBy: {
        key: 'dropdownQuestion',
        condition: 'Answer1',
      },
    }),
  ];

  constructor(private questionControlService: QuestionControlService) {
    this.form = this.questionControlService.toFormGroup(this.questions);
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
