import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { storiesOf } from '@storybook/angular';
import { DynamicFormsModule } from '../../app/components/dynamic-forms/dynamic-forms.module';
import { QuestionControlService } from '../../app/components/dynamic-forms/services/question-control.service';
import { TextBoxQuestionComponent, DropdownQuestionComponent, DateQuestionComponent, RadioQuestionComponent, CheckboxQuestionComponent } from './dynamic-form-questions.story';
import { MatNativeDateModule } from '@angular/material';

storiesOf('DynamicFormQuestion', module).add('Textbox', () => ({
  component: TextBoxQuestionComponent,
  moduleMetadata: {
    imports: [BrowserAnimationsModule, ReactiveFormsModule, DynamicFormsModule],
    providers: [QuestionControlService],
  },
})).add('Dropdown', () => ({
  component: DropdownQuestionComponent,
  moduleMetadata: {
    imports: [BrowserAnimationsModule, ReactiveFormsModule, DynamicFormsModule],
    providers: [QuestionControlService],
  },
})).add('Date', () => ({
  component: DateQuestionComponent,
  moduleMetadata: {
    imports: [BrowserAnimationsModule, ReactiveFormsModule, DynamicFormsModule, MatNativeDateModule],
    providers: [QuestionControlService],
  },
})).add('Radio', () => ({
  component: RadioQuestionComponent,
  moduleMetadata: {
    imports: [BrowserAnimationsModule, ReactiveFormsModule, DynamicFormsModule],
    providers: [QuestionControlService],
  },
})).add('Checkbox', () => ({
  component: CheckboxQuestionComponent,
  moduleMetadata: {
    imports: [BrowserAnimationsModule, ReactiveFormsModule, DynamicFormsModule],
    providers: [QuestionControlService],
  },
}));