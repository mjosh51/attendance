import Link from 'next/link';
import Home from '../components/Dashboard';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout title="Attendance Management">
    <Home />
  </Layout>
);

export default IndexPage;
