import { Condition } from './conditions.interface';
import { Validator } from './validator.interface';

export interface Question<T> {
  value?: T;
  key: string;
  label: string;
  placeholder?: string;
  validations?: Validator[];
  order?: number;
  controlType?: string;
  appearance?: 'legacy' | 'standard' | 'fill' | 'outline';
  hint?: string;

  hiddenBy?: Condition;
  disabledBy?: Condition;

  // Number / Date
  min?: number | Date;
  max?: number | Date;

  // Text
  type?: string;
  autocomplete?: string;

  // Dropdown
  options?: { value: string; key: string }[];
}
