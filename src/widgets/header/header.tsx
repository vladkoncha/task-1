import { LINKS } from './links';
import styles from './styles.module.scss';
import { HeaderLink } from './ui/header-link';

export const Header = () => {
  return (
    <div className={styles['header-wrapper']}>
      <header className={styles.header}>
        <nav className={styles['header-content']}>
          {LINKS.map(({ href, label }) => (
            <HeaderLink key={href} href={href}>
              {label}
            </HeaderLink>
          ))}
        </nav>
      </header>
    </div>
  );
};
