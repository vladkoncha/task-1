import cn from 'classnames';
import { forwardRef } from 'react';

import styles from './styles.module.scss';
import { ButtonProps, ButtonRef } from './types';

const Button = forwardRef<ButtonRef, ButtonProps>((props, ref) => {
  return (
    <button
      {...props}
      ref={ref}
      className={cn(
        styles.button,
        {
          [styles.primary]: props.kind === 'primary',
          [styles.secondary]: props.kind === 'secondary',
        },
        props.className
      )}
      style={props.style}
    />
  );
});

Button.displayName = 'Button';
export { Button };
