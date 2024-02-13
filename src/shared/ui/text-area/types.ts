import { InputHTMLAttributes } from 'react';

export interface TextAreaProps
  extends InputHTMLAttributes<HTMLTextAreaElement> {
  maxLength?: number;
  defaultValue?: string;
  areaValue?: string;
  name: string;
  label: string;
}
