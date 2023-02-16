import CardUI from './card';
import styles from './styles.module.css';

const CardsUI = () => {
  return (
    <div className={styles.container}>
      <CardUI icon="/icons/users.svg" number={70} text="total students" />
      <CardUI icon="/icons/log-in.svg" number={15} text="total lecturers" />
      <CardUI icon="/icons/smile.svg" number={6} text="non adacemic staff" />
      <CardUI icon="/icons/clock.svg" number={5} text="non regular staff" />
    </div>
  );
};

export default CardsUI;
