import React, { ForwardedRef, forwardRef } from 'react';

import styles from './styles.module.scss';
import { TextAreaProps } from './types';

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    { name, defaultValue, areaValue, maxLength, label, ...rest },
    ref: ForwardedRef<HTMLTextAreaElement>
  ) => {
    return (
      <div className={styles['label-container']}>
        <label htmlFor={name}>{label}</label>
        <div className={styles['area-container']}>
          <textarea
            {...rest}
            id={name}
            maxLength={maxLength}
            name={name}
            className={styles['text-area']}
            ref={ref}
          />
          {maxLength && (
            <p>
              {areaValue?.length ?? 0}/{maxLength}
            </p>
          )}
        </div>
      </div>
    );
  }
);

TextArea.displayName = 'TextArea';
export { TextArea };
