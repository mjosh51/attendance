import CardUI from './card';
import styles from './styles.module.css';

const CardsUI = () => {
  return (
    <div className={styles.container}>
      <CardUI icon="/icons/users.svg" number={47} text="total students" />
      <CardUI icon="/icons/log-in.svg" number={42} text="total lecturers" />
      <CardUI icon="/icons/smile.svg" number={2} text="absent today" />
      <CardUI icon="/icons/clock.svg" number={5} text="late students today" />
    </div>
  );
};

export default CardsUI;
