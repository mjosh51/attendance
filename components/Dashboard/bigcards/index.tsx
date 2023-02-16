import BigCardUI from './card';
import LecturerUI from './lecturer';
import styles from './styles.module.css';

const BigCardsUI = () => {
  return (
    <div className={styles.container}>
      <BigCardUI />
      <LecturerUI />
    </div>
  );
};

export default BigCardsUI;
