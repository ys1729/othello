import styles from './index.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.board}>
        <div className={styles.boards}>1</div>
        <div className={styles.boards}>2</div>
      </div>
    </div>
  );
};

export default Home;
