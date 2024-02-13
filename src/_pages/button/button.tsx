import { ColorSwitchingButton } from '@/src/widgets/color-switching-button';

import styles from './styles.module.css';

export const ButtonPage = () => {
  return (
    <div className={styles['page-container']}>
      <div className={styles['button-container']}>
        <ColorSwitchingButton>Поменять цвет</ColorSwitchingButton>
      </div>
    </div>
  );
};
