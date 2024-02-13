import cn from 'classnames';
import { forwardRef } from 'react';

import styles from './styles.module.scss';
import { InputProps, InputRef } from './types';

const Input = forwardRef<InputRef, InputProps>((props, ref) => {
  return (
    <div className={styles['input-container']}>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        {...props}
        id={props.name}
        ref={ref}
        className={cn(styles.input, props.className)}
        style={props.style}
      />
    </div>
  );
});

Input.displayName = 'Input';
export { Input };
