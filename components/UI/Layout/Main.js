import styles from './Main.module.css';

const Main = ({ className, children }) => {
  return (
    <main className={`${styles.main} ${className || ''}`}>
      {children}
    </main>
  );
};

export default Main;
