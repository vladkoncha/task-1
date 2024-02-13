import { Form } from '@/src/widgets/form';

import styles from './styles.module.scss';

export const FormPage = () => {
  return (
    <div className={styles['page-container']}>
      <div className={styles['form-container']}>
        <Form />
      </div>
    </div>
  );
};
