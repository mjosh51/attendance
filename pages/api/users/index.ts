import axios from 'axios';

export default async function fetchStudentAttendanceRanking() {
  let data: [];
  try {
    const res = await axios.get(
      `${process.env.BASE_URL}/api/student-attendance-ranking/fetch`,
    );
    data = res.data.result;
  } catch (err: any) {}
}
