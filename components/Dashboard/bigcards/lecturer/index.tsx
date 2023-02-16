import axios from 'axios';
import { useState, useEffect, Key } from 'react';
import styles from './styles.module.css';

const LecturerUI = () => {
  const [results, setResults] = useState([]);
  useEffect(() => {
    async function fetchLecturersAttendanceRanking() {
      try {
        const res = await axios.get(
          `${process.env.BASE_URL}/api/lecturer-attendance-ranking/fetch`,
        );
        const { result } = res.data;
        const topFive = result
          .sort(
            (a: { attendanceCount: number }, b: { attendanceCount: number }) =>
              b.attendanceCount - a.attendanceCount,
          )
          .slice(0, 5);
        setResults(topFive);
      } catch (err: any) {}
    }
    fetchLecturersAttendanceRanking();
  }, []);
  return (
    <div className={styles.card__lecturers}>
      <i className="fa-solid fa-ellipsis" id="more"></i>
      <div className={styles.cl__title}>
        Top 5 lecturers <small>by Attendance</small>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Attendance (%)</th>
          </tr>
        </thead>
        {results.map(
          (
            result: {
              firstName: string;
              lastName: string;
              attendanceCount: number;
            },
            index: Key,
          ) => {
            const expectedTotalAttendanceForASemester = 30; // hard coded
            const attendanceInPercentage =
              (expectedTotalAttendanceForASemester / 100) *
              result.attendanceCount; // attendance count in percent
            console.log(attendanceInPercentage);
            <tbody key={index}>
              <tr>
                <td>
                  {result.firstName} {result.lastName}
                </td>
                <td>{result.attendanceCount}</td>
              </tr>
            </tbody>;
          },
        )}
      </table>
    </div>
  );
};

export default LecturerUI;
