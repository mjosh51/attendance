import Image from 'next/image';
import { useEffect } from 'react';
import styles from './styles.module.css';

const CardUI = ({ icon, number, text }) => {
  const figure = `${number}`.padStart(2, '0');
  useEffect(() => {
    const moreElement = document.querySelectorAll<HTMLElement>('#more');
    moreElement.forEach((element) =>
      element.addEventListener(
        'click',
        () => (element.style.color = 'var(--text-custom-light)'),
      ),
    );
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <i className="fa-solid fa-ellipsis" id="more"></i>
        <div className={styles.stats}>
          <Image src={icon} alt="student-icon" width={30} height={30} />
          <div className={styles.stats__text}>
            <span>{figure}</span>
            <small>{text}</small>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CardUI;
