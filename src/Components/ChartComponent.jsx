import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "2021-02-03", users: 0 },
  { name: "2021-02-04", users: 0 },
  { name: "2021-02-05", users: 0 },
  { name: "2021-02-06", users: 0 },
  { name: "2021-02-07", users: 0 },
  { name: "2021-02-08", users: 0 },
  { name: "2021-02-09", users: 1 },
];

const ChartComponent = () => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data}>
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="users" stroke="#82ca9d" strokeWidth={3} />
    </LineChart>
  </ResponsiveContainer>
);

export default ChartComponent;
