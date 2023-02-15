import Image from 'next/image';
import styles from './styles.module.css';

const custom = {
  container: 'w-full bg-dark-blue',
  wrapper:
    'flex flex-col gap-3 px-1 lg:pt-8 pb-24 flex flex-row justify-between',
  row1: 'flex items-center',
  profileImage: `bg-center bg-no-repeat bg-cover bg-white w-16 h-16 rounded-full mr-4`,
  greetingsTop: 'flex gap-1 text-white',
  greetingsBottom: 'text-slate-400 text-xs',
  row2: 'flex items-center text-sm gap-2',
  select: 'bg-dark-blue-light rounded p-2 text-white cursor-pointer',
  button: 'bg-green text-white flex rounded p-2 gap-1 text-sm cursor-pointer',
};

const BannerUI = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.row1}>
          <div className={styles.profile__image}></div>
          <div>
            <div className={styles.greetings__top}>
              Hello Chris,{' '}
              <Image src="/hand.svg" alt="hand" width={20} height={20} />
            </div>
            <div className={styles.greetings__bottom}>
              We hope you are having a great day.
            </div>
          </div>
        </div>
        <div className={styles.row2}>
          <select name="" id="" className={styles.select}>
            <option value="">All Classes</option>
            <option value="">100 Level Classes</option>
            <option value="">200 Level Classes</option>
            <option value="">300 Level Classes</option>
            <option value="">Final Year Classes</option>
          </select>
          <select name="" id="" className={styles.select}>
            <option value="">Last 30 days</option>
            <option value="">Last 90 days</option>
            <option value="">6 months ago</option>
          </select>
          <button className={styles.button}>
            <Image
              src="/icons/filter.svg"
              alt="filter"
              width={15}
              height={15}
            />
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerUI;
