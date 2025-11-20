import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartData } from '../types';

interface Props {
  chartData: ChartData;
}

export default function RevenueChart({ chartData }: Props) {
  return (
    <div className="bg-white p-6 rounded-lg shadow h-96">
      <h3 className="text-lg font-medium mb-4">Revenue & Loads Over Time</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData.labels.map((label, i) => ({ label, revenue: chartData.revenue[i], loads: chartData.loadCounts[i] }))}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
          <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
          <Tooltip />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="revenue" stroke="#8884d8" name="Revenue ($)" />
          <Line yAxisId="right" type="monotone" dataKey="loads" stroke="#82ca9d" name="Loads" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
