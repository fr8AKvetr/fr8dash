import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import OverviewCards from './components/OverviewCards';
import RevenueChart from './components/RevenueChart';
import RegionalMap from './components/RegionalMap';
import TopRegionsTable from './components/TopRegionsTable';
import RecentActivity from './components/RecentActivity';
import { LoadsAnalytics } from './types';
import './App.css';

function App() {
  const [data, setData] = useState<LoadsAnalytics | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/reports/loads-analytics')
      .then(res => res.json())
      .then(setData)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="flex items-center justify-center h-screen">Loading dashboard...</div>;

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-gray-900">Loads Analytics Dashboard</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 px-4">
        <OverviewCards overview={data!.overview} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <RevenueChart chartData={data!.chartData} />
          <TopRegionsTable regions={data!.regionalData.topRegions} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <RegionalMap mapPoints={data!.regionalData.mapPoints} />
          <RecentActivity activities={data!.recentActivity} />
        </div>
      </main>
    </div>
  );
}

export default App;
