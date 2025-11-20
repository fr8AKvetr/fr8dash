import { Region } from '../types';

interface Props {
  regions: Region[];
}

export default function TopRegionsTable({ regions }: Props) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-medium mb-4">Top Regions</h3>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Region</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Loads</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">%</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {regions.map((region, i) => (
            <tr key={i}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{region.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{region.loadCount}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">${region.revenue.toLocaleString()}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{region.percentage}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
