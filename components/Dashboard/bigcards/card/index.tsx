import axios from 'axios';
import { Key, useEffect, useState } from 'react';
import styles from './styles.module.css';

const BigCardUI = () => {
  const [results, setResults] = useState([]);
  useEffect(() => {
    async function fetchStudentAttendanceRanking() {
      try {
        const res = await axios.get(
          `${process.env.BASE_URL}/api/student-attendance-ranking/fetch`,
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
    fetchStudentAttendanceRanking();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          Top 5 students <small>by Attendance (%)</small>
        </div>
        <table className={styles.table}>
          <thead className={styles.table__headings}>
            <tr className={styles.table__headings__row}>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Matric. No</th>
              <th>Email</th>
              <th>Attendance (%)</th>
            </tr>
          </thead>
          {results.map(
            (
              result: {
                firstName: string;
                lastName: string;
                matricNo: string;
                email: string;
                attendanceCount: number;
              },
              index: Key,
            ) => (
              <tbody key={index}>
                <tr>
                  <td>{result.firstName}</td>
                  <td>{result.lastName}</td>
                  <td>{result.matricNo}</td>
                  <td>{result.email}</td>
                  <td>{result.attendanceCount}</td>
                </tr>
              </tbody>
            ),
          )}
        </table>
      </div>
    </div>
  );
};

export default BigCardUI;
