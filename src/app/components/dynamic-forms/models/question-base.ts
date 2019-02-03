import { Validator } from '../interfaces/validator.interface';
import { Question } from '../interfaces/question.interface';
import { Condition } from '../interfaces/conditions.interface';

export class QuestionBase<T> implements Question<T> {
  key: string;
  value?: T;
  label: string;
  placeholder: string;
  validations?: Validator[];
  order?: number;
  controlType: string;
  appearance: 'legacy' | 'standard' | 'fill' | 'outline';
  hint?: string;

  hiddenBy: Condition;
  disabledBy: Condition;

  children: Question<any>[];

  constructor(options: Question<T>) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.placeholder = options.placeholder || this.label;
    this.validations = options.validations ? options.validations : [];
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.appearance = options.appearance || 'standard';
    this.hint = options.hint;

    this.hiddenBy = options.hiddenBy;
    this.disabledBy = options.disabledBy;
  }
}
