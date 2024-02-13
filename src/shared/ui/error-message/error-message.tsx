import styles from './styles.module.scss';
import { ErrorMessageProps } from './types';

export const ErrorMessage = ({ children }: ErrorMessageProps) => {
  if (!children) {
    return <div className={styles['error-message']} />;
  }

  return <p className={styles['error-message']}>{children}</p>;
};
