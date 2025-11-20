import { LoadsOverview } from '../types';

interface Props {
  overview: LoadsOverview;
}

export default function OverviewCards({ overview }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-sm font-medium text-gray-500">Total Revenue</h3>
        <p className="text-2xl font-bold text-gray-900">${overview.totalRevenue.toLocaleString()}</p>
        <p className={`text-sm ${overview.revenueChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
          {overview.revenueChange >= 0 ? '+' : ''}{overview.revenueChange}%
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-sm font-medium text-gray-500">Total Loads</h3>
        <p className="text-2xl font-bold text-gray-900">{overview.totalLoads}</p>
        <p className={`text-sm ${overview.loadsChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
          {overview.loadsChange >= 0 ? '+' : ''}{overview.loadsChange}%
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-sm font-medium text-gray-500">Avg Load Value</h3>
        <p className="text-2xl font-bold text-gray-900">${overview.averageLoadValue.toFixed(2)}</p>
        <p className={`text-sm ${overview.averageValueChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
          {overview.averageValueChange >= 0 ? '+' : ''}{overview.averageValueChange}%
        </p>
      </div>
    </div>
  );
}
