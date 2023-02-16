import { Line } from '@ant-design/charts';
import '@ant-design/flowchart/dist/index.css';

const GraphsUI = () => {
  const data = [
    { date: 'Jan 4', value: 45 },
    { date: 'Jan 5', value: 45 },
    { date: 'Jan 7', value: 50 },
    { date: 'Jan 9', value: 52 },
    { date: 'Jan 12', value: 47 },
    { date: 'Jan 14', value: 49 },
    { date: 'Jan 16', value: 41 },
    { date: 'Jan 20', value: 43 },
    { date: 'Jan 23', value: 45 },
    { date: 'Jan 25', value: 45 },
    { date: 'Jan 28', value: 50 },
    { date: 'Jan 31', value: 48 },
  ];

  const config = {
    data,
    height: 400,
    xField: 'date',
    yField: 'value',
    point: {
      size: 9,
      shape: 'diamond',
    },
  };
  return <Line {...config} />;
};

export default GraphsUI;
