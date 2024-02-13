import { CurrentYear } from '@/src/widgets/current-year';

import styles from './styles.module.scss';

export const YearPage = () => {
  return (
    <div className={styles['page-container']}>
      <div className={styles['year-container']}>
        <CurrentYear />
      </div>
    </div>
  );
};
