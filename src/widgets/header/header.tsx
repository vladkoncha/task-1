import styles from './styles.module.scss';
import { HeaderLink } from './ui/header-link';

export const Header = () => {
  return (
    <div className={styles['header-wrapper']}>
      <header className={styles.header}>
        <nav className={styles['header-content']}>
          <HeaderLink href="/button">Кнопка</HeaderLink>
          <HeaderLink href="/year">Текущий год</HeaderLink>
        </nav>
      </header>
    </div>
  );
};
