import styles from './styles.module.css';
import logoIgniteHorizontal from "/logos/ignite-horizontal.svg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        <a>
          <img src={logoIgniteHorizontal} alt="Ignite Feed" />
        </a>
      </h1>
    </header>
  );
};