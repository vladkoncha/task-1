import { ButtonHTMLAttributes } from 'react';

type ButtonKind = 'primary' | 'secondary';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  kind: ButtonKind;
}

export type ButtonRef = HTMLButtonElement;
