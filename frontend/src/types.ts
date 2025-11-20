export interface LoadsOverview {
  totalRevenue: number;
  revenueChange: number;
  totalLoads: number;
  loadsChange: number;
  averageLoadValue: number;
  averageValueChange: number;
}

export interface ChartData {
  labels: string[];
  revenue: number[];
  loadCounts: number[];
}

export interface Region {
  name: string;
  loadCount: number;
  revenue: number;
  percentage: number;
}

export interface MapPoint {
  region: string;
  latitude: number;
  longitude: number;
  loadCount: number;
}

export interface RegionalData {
  topRegions: Region[];
  mapPoints: MapPoint[];
}

export interface Activity {
  type: string;
  description: string;
  status: string;
  timestamp: string;
}

export interface LoadsAnalytics {
  overview: LoadsOverview;
  chartData: ChartData;
  regionalData: RegionalData;
  recentActivity: Activity[];
}
